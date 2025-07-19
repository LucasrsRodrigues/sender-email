import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { TemplateService } from './template.service';
import { SendEmailDto, EmailJobData, EmailPriority } from './dto/send-email.dto';
import { TemplateDbService } from './template-db.service';
import { EmailStatus } from '../../prisma/generated/prisma';

@Injectable()
export class EmailService {
  constructor(
    @InjectQueue('email') private emailQueue: Queue<EmailJobData>,
    private prisma: PrismaService,
    private templateDbService: TemplateDbService,
  ) { }

  async sendEmail(sendEmailDto: SendEmailDto) {
    // Criar registro no banco de dados
    const emailLog = await this.prisma.emailLog.create({
      data: {
        to: sendEmailDto.to,
        subject: sendEmailDto.subject,
        template: sendEmailDto.template,
        variables: sendEmailDto.variables || {},
        status: EmailStatus.PENDING,
      },
    });

    // Definir prioridade da fila
    const priority = this.getPriorityValue(sendEmailDto.priority);

    // Adicionar job à fila
    const job = await this.emailQueue.add(
      'send-email',
      {
        ...sendEmailDto,
        logId: emailLog.id,
      },
      {
        priority,
        delay: this.getDelayByPriority(sendEmailDto.priority),
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
      },
    );

    // Atualizar registro com jobId
    await this.prisma.emailLog.update({
      where: { id: emailLog.id },
      data: { jobId: job.id.toString() },
    });

    return {
      logId: emailLog.id,
      jobId: job.id,
    };
  }

  async getEmailStatus(logId: string) {
    const emailLog = await this.prisma.emailLog.findUnique({
      where: { id: logId },
    });

    if (!emailLog) {
      return null;
    }

    let jobStatus = null;
    if (emailLog.jobId) {
      const job = await this.emailQueue.getJob(emailLog.jobId);
      if (job) {
        jobStatus = {
          id: job.id,
          progress: job.progress,
          attemptsMade: job.attemptsMade,
          finishedOn: job.finishedOn,
          processedOn: job.processedOn,
          failedReason: job.failedReason,
          state: await job.getState(),
        };
      }
    }

    return {
      ...emailLog,
      job: jobStatus,
    };
  }

  async getQueueStatus() {
    const waiting = await this.emailQueue.getWaiting();
    const active = await this.emailQueue.getActive();
    const completed = await this.emailQueue.getCompleted();
    const failed = await this.emailQueue.getFailed();

    return {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
      total: waiting.length + active.length + completed.length + failed.length,
    };
  }

  private getPriorityValue(priority: EmailPriority): number {
    const priorities = {
      [EmailPriority.CRITICAL]: 1,
      [EmailPriority.HIGH]: 2,
      [EmailPriority.NORMAL]: 3,
      [EmailPriority.LOW]: 4,
    };

    return priorities[priority] || priorities[EmailPriority.NORMAL];
  }

  private getDelayByPriority(priority: EmailPriority): number {
    const delays = {
      [EmailPriority.CRITICAL]: 0,
      [EmailPriority.HIGH]: 5000,
      [EmailPriority.NORMAL]: 15000,
      [EmailPriority.LOW]: 30000,
    };

    return delays[priority] || delays[EmailPriority.NORMAL];
  }

  async functeste(limit, sortBy, sortOrder, template, search, startDate, endDate, status, level) {
    const limitNum = limit ? parseInt(limit) : 50;
    const sortField = sortBy || 'createdAt';
    const sortDirection = sortOrder === 'asc' ? 'asc' : 'desc';

    // Construir filtros WHERE
    const where: any = {};

    // Filtro por status
    if (status && status !== 'all') {
      where.status = status.toUpperCase();
    }

    // Filtro por template
    if (template) {
      where.template = { contains: template, mode: 'insensitive' };
    }

    // Filtro por busca geral
    if (search) {
      where.OR = [
        { to: { contains: search, mode: 'insensitive' } },
        { subject: { contains: search, mode: 'insensitive' } },
        { errorMessage: { contains: search, mode: 'insensitive' } }
      ];
    }

    // Filtro por data
    if (startDate) {
      where.createdAt = {
        ...where.createdAt,
        gte: new Date(startDate)
      };
    }
    if (endDate) {
      where.createdAt = {
        ...where.createdAt,
        lte: new Date(endDate)
      };
    }

    // Buscar logs
    const [logs, totalCount] = await Promise.all([
      this.prisma.emailLog.findMany({
        where,
        orderBy: { [sortField]: sortDirection },
        take: limitNum,
        select: {
          id: true,
          to: true,
          subject: true,
          template: true,
          status: true,
          provider: true,
          errorMessage: true,
          createdAt: true,
          sentAt: true,
          attempts: true,
          variables: true,
          // processingTime: true
        }
      }),
      this.prisma.emailLog.count({ where })
    ]);

    // Mapear para formato de logs
    const formattedLogs = logs.map(log => ({
      id: log.id,
      level: this.mapStatusToLevel(log.status),
      message: this.formatLogMessage(log),
      template: log.template,
      to: log.to,
      status: log.status,
      provider: log.provider,
      createdAt: log.createdAt,
      sentAt: log.sentAt,
      errorMessage: log.errorMessage,
      attempts: log.attempts,
      variables: log.variables,
      // processingTime: log.processingTime,
      timestamp: log.createdAt // Para compatibilidade
    }));

    return {
      logs: formattedLogs,
      count: totalCount,
      filters: {
        level,
        status,
        template,
        search,
        startDate,
        endDate,
        limit: limitNum,
        sortBy: sortField,
        sortOrder: sortDirection
      }
    }
  }

  getAvailableTemplates() {
    return this.templateDbService.getAvailableTemplates();
  }

  private mapStatusToLevel(status: string): string {
    switch (status) {
      case 'SENT': return 'INFO';
      case 'FAILED': return 'ERROR';
      case 'PENDING': return 'INFO';
      case 'RETRYING': return 'WARN';
      default: return 'INFO';
    }
  }

  private formatLogMessage(log: any): string {
    switch (log.status) {
      case 'SENT':
        return `Email enviado para ${log.to} via ${log.provider || 'desconhecido'}`;
      case 'FAILED':
        return `Falha no envio para ${log.to}: ${log.errorMessage || 'Erro desconhecido'}`;
      case 'PENDING':
        return `Email para ${log.to} aguardando processamento`;
      case 'RETRYING':
        return `Tentativa ${log.attempts} de envio para ${log.to}`;
      default:
        return `Email para ${log.to} - Status: ${log.status}`;
    }
  }
}