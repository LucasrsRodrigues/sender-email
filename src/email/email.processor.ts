import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { TemplateService } from './template.service';
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
    private templateService: TemplateService,
  ) {
    super();
    this.setupEmailProviders();
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

      // Renderizar template
      const htmlContent = await this.templateService.renderTemplate(template, variables || {});

      // Tentar enviar por Gmail primeiro
      let success = false;
      let provider = '';
      let errorMessage = '';

      try {
        await this.sendViaGmail(to, subject, htmlContent, from);
        success = true;
        provider = 'gmail';
        this.logger.log(`E-mail enviado via Gmail para: ${to}`);
      } catch (gmailError) {
        this.logger.warn(`Falha no Gmail: ${gmailError.message}`);

        try {
          await this.sendViaSendGrid(to, subject, htmlContent, from);
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
      });

      throw error;
    }
  }

  private setupEmailProviders() {
    // Configurar Gmail
    this.gmailTransporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Configurar SendGrid
    if (process.env.SENDGRID_API_KEY) {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    }

    this.logger.log('Provedores de e-mail configurados');
  }

  private async sendViaGmail(
    to: string,
    subject: string,
    html: string,
    from?: string,
  ): Promise<void> {
    const mailOptions = {
      from: from || process.env.GMAIL_USER,
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
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key não configurada');
    }

    const msg = {
      to,
      from: from || process.env.GMAIL_USER,
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