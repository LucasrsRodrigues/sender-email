// src/email/email.processor.ts
import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TemplateDbService } from './template-db.service';
import { ConfigService } from '../config/config.service'; // ← NOVA IMPORTAÇÃO
import { EmailJobData } from './dto/send-email.dto';
import { EmailStatus } from '@prisma/client';
import * as nodemailer from 'nodemailer';
import * as sgMail from '@sendgrid/mail';

@Processor('email')
@Injectable()
export class EmailProcessor extends WorkerHost {
  private readonly logger = new Logger(EmailProcessor.name);
  private gmailTransporter: nodemailer.Transporter;

  constructor(
    private prisma: PrismaService,
    private templateDbService: TemplateDbService,
    private configService: ConfigService, // ← NOVA DEPENDÊNCIA
  ) {
    super();
    // Não chamar setupEmailProviders no constructor
    // Será chamado dinamicamente a cada email
  }

  async process(job: Job<EmailJobData>): Promise<any> {
    const { to, subject, template, variables, from, logId } = job.data;

    this.logger.log(`Processando envio de e-mail para: ${to}`);

    try {
      // Atualizar status para "processando"
      await this.updateEmailLog(logId, {
        status: EmailStatus.RETRYING,
        attempts: job.attemptsMade + 1,
      });

      // Renderizar template usando TemplateDbService
      const { subject: templateSubject, content: htmlContent } = await this.templateDbService.renderTemplate(template, variables || {});

      // Usar subject do template se não foi fornecido um específico
      const finalSubject = subject || templateSubject;

      // Configurar provedores de email dinamicamente (busca do banco)
      await this.setupEmailProviders();

      // Tentar enviar por Gmail primeiro
      let success = false;
      let provider = '';
      let errorMessage = '';

      try {
        await this.sendViaGmail(to, finalSubject, htmlContent, from);
        success = true;
        provider = 'gmail';
        this.logger.log(`E-mail enviado via Gmail para: ${to}`);
      } catch (gmailError) {
        this.logger.warn(`Falha no Gmail: ${gmailError.message}`);

        try {
          await this.sendViaSendGrid(to, finalSubject, htmlContent, from);
          success = true;
          provider = 'sendgrid';
          this.logger.log(`E-mail enviado via SendGrid para: ${to}`);
        } catch (sendgridError) {
          this.logger.error(`Falha no SendGrid: ${sendgridError.message}`);
          errorMessage = `Gmail: ${gmailError.message} | SendGrid: ${sendgridError.message}`;
          throw new Error(errorMessage);
        }
      }

      // Atualizar status de sucesso
      if (success) {
        await this.updateEmailLog(logId, {
          status: EmailStatus.SENT,
          provider,
          sentAt: new Date(),
        });
      }

      return { success: true, provider };

    } catch (error) {
      this.logger.error(`Erro ao enviar e-mail: ${error.message}`);

      // Atualizar status de falha
      const maxAttempts = job.opts?.attempts || 3;
      await this.updateEmailLog(logId, {
        status: job.attemptsMade + 1 >= maxAttempts ? EmailStatus.FAILED : EmailStatus.RETRYING,
        errorMessage: error.message,
        attempts: job.attemptsMade + 1,
      });

      throw error;
    }
  }

  // ← ALTERAÇÃO: Buscar configurações do banco de dados
  private async setupEmailProviders() {
    try {
      this.logger.log('🔍 Buscando configurações SMTP do banco de dados...');

      // Buscar configurações do banco de dados com fallback para env
      const gmailUser = await this.configService.get<string>('GMAIL_USER', process.env.GMAIL_USER);
      const gmailPass = await this.configService.get<string>('GMAIL_PASS', process.env.GMAIL_PASS);
      const sendgridApiKey = await this.configService.get<string>('SENDGRID_API_KEY', process.env.SENDGRID_API_KEY);

      this.logger.log(`📧 Gmail User: ${gmailUser ? 'Configurado' : 'Não encontrado'}`);
      this.logger.log(`🔑 Gmail Pass: ${gmailPass ? 'Configurado' : 'Não encontrado'}`);
      this.logger.log(`📨 SendGrid Key: ${sendgridApiKey ? 'Configurado' : 'Não encontrado'}`);

      // Configurar Gmail se as credenciais estão disponíveis
      if (gmailUser && gmailPass) {
        this.gmailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: gmailUser,
            pass: gmailPass,
          },
        });
        this.logger.log('✅ Gmail configurado com sucesso (via banco de dados)');
      } else {
        this.logger.warn('⚠️ Configurações do Gmail não encontradas no banco nem no .env');
      }

      // Configurar SendGrid se a API key está disponível
      if (sendgridApiKey) {
        sgMail.setApiKey(sendgridApiKey);
        this.logger.log('✅ SendGrid configurado com sucesso (via banco de dados)');
      } else {
        this.logger.warn('⚠️ API key do SendGrid não encontrada no banco nem no .env');
      }

    } catch (error) {
      this.logger.error(`❌ Erro ao configurar provedores de email: ${error.message}`);

      // Fallback para variáveis de ambiente em caso de erro
      this.logger.warn('🔄 Usando fallback para variáveis de ambiente');

      if (process.env.GMAIL_USER && process.env.GMAIL_PASS) {
        this.gmailTransporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });
        this.logger.log('✅ Gmail configurado via .env (fallback)');
      }

      if (process.env.SENDGRID_API_KEY) {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        this.logger.log('✅ SendGrid configurado via .env (fallback)');
      }
    }
  }

  private async sendViaGmail(
    to: string,
    subject: string,
    html: string,
    from?: string,
  ): Promise<void> {
    if (!this.gmailTransporter) {
      throw new Error('Gmail não configurado ou credenciais inválidas');
    }

    // Buscar o email do remetente do banco ou usar fallback
    const defaultFromEmail = await this.configService.get<string>('GMAIL_USER', process.env.GMAIL_USER);

    const mailOptions = {
      from: from || defaultFromEmail,
      to,
      subject,
      html,
    };

    await this.gmailTransporter.sendMail(mailOptions);
  }

  private async sendViaSendGrid(
    to: string,
    subject: string,
    html: string,
    from?: string,
  ): Promise<void> {
    // Buscar configurações do banco
    const sendgridApiKey = await this.configService.get<string>('SENDGRID_API_KEY', process.env.SENDGRID_API_KEY);
    const defaultFromEmail = await this.configService.get<string>('SENDGRID_FROM_EMAIL',
      await this.configService.get<string>('GMAIL_USER', process.env.GMAIL_USER)
    );

    if (!sendgridApiKey) {
      throw new Error('SendGrid API key não configurada no banco nem no .env');
    }

    // Configurar SendGrid dinamicamente
    sgMail.setApiKey(sendgridApiKey);

    const msg = {
      to,
      from: from || defaultFromEmail,
      subject,
      html,
    };

    await sgMail.send(msg);
  }

  private async updateEmailLog(
    logId: string,
    data: Partial<{
      status: EmailStatus;
      provider: string;
      errorMessage: string;
      sentAt: Date;
      attempts: number;
    }>,
  ) {
    try {
      await this.prisma.emailLog.update({
        where: { id: logId },
        data,
      });
    } catch (error) {
      this.logger.error(`Erro ao atualizar log do e-mail: ${error.message}`);
    }
  }
}