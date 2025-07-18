import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { TemplateService } from './template.service';
import { SendEmailDto, EmailJobData, EmailPriority } from './dto/send-email.dto';
import { EmailStatus } from 'generated/prisma';

@Injectable()
export class EmailService {
  constructor(
    @InjectQueue('email') private emailQueue: Queue<EmailJobData>,
    private prisma: PrismaService,
    private templateService: TemplateService,
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

  getAvailableTemplates(): string[] {
    return this.templateService.getAvailableTemplates();
  }
}