import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

export interface EmailMetrics {
  period: string;
  totalEmails: number;
  sentEmails: number;
  failedEmails: number;
  pendingEmails: number;
  successRate: number;
  averageProcessingTime: number;
  providerStats: {
    gmail: number;
    sendgrid: number;
  };
  queueStats: {
    waiting: number;
    active: number;
    completed: number;
    failed: number;
  };
}

@Injectable()
export class MetricsService {
  private readonly logger = new Logger(MetricsService.name);
  private cachedMetrics: EmailMetrics | null = null;
  private lastUpdate: Date | null = null;

  constructor(
    private prisma: PrismaService,
    @InjectQueue('email') private emailQueue: Queue,
  ) { }

  // Atualizar métricas a cada 5 minutos
  @Cron(CronExpression.EVERY_5_MINUTES)
  async updateMetrics() {
    try {
      this.cachedMetrics = await this.calculateMetrics('24h');
      this.lastUpdate = new Date();
      this.logger.log('Métricas atualizadas com sucesso');
    } catch (error) {
      this.logger.error(`Erro ao atualizar métricas: ${error.message}`);
    }
  }

  async getMetrics(period: string = '24h'): Promise<EmailMetrics> {
    // Se tem cache válido (menos de 5 min), retorna cache
    if (this.cachedMetrics && this.lastUpdate &&
      Date.now() - this.lastUpdate.getTime() < 5 * 60 * 1000) {
      return this.cachedMetrics;
    }

    // Senão, calcula em tempo real
    return await this.calculateMetrics(period);
  }

  private async calculateMetrics(period: string): Promise<EmailMetrics> {
    const startDate = this.getStartDate(period);

    // Buscar dados do banco
    const [totalEmails, sentEmails, failedEmails, pendingEmails, providerStats] = await Promise.all([
      this.prisma.emailLog.count({
        where: { createdAt: { gte: startDate } }
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: 'SENT'
        }
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: 'FAILED'
        }
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: { in: ['PENDING', 'RETRYING'] }
        }
      }),
      this.getProviderStats(startDate),
    ]);

    // Stats da fila
    const queueStats = await this.getQueueStats();

    // Calcular tempo médio de processamento
    const avgProcessingTime = await this.getAverageProcessingTime(startDate);

    const successRate = totalEmails > 0 ? (sentEmails / totalEmails) * 100 : 0;

    return {
      period,
      totalEmails,
      sentEmails,
      failedEmails,
      pendingEmails,
      successRate: Math.round(successRate * 100) / 100,
      averageProcessingTime: Math.round(avgProcessingTime),
      providerStats,
      queueStats,
    };
  }

  private async getProviderStats(startDate: Date) {
    const stats = await this.prisma.emailLog.groupBy({
      by: ['provider'],
      where: {
        createdAt: { gte: startDate },
        status: 'SENT'
      },
      _count: { provider: true }
    });

    return {
      gmail: stats.find(s => s.provider === 'gmail')?._count.provider || 0,
      sendgrid: stats.find(s => s.provider === 'sendgrid')?._count.provider || 0,
    };
  }

  private async getQueueStats() {
    const [waiting, active, completed, failed] = await Promise.all([
      this.emailQueue.getWaiting(),
      this.emailQueue.getActive(),
      this.emailQueue.getCompleted(),
      this.emailQueue.getFailed(),
    ]);

    return {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
    };
  }

  private async getAverageProcessingTime(startDate: Date): Promise<number> {
    const emails = await this.prisma.emailLog.findMany({
      where: {
        createdAt: { gte: startDate },
        sentAt: { not: null },
        status: 'SENT'
      },
      select: {
        createdAt: true,
        sentAt: true,
      }
    });

    if (emails.length === 0) return 0;

    const totalTime = emails.reduce((sum, email) => {
      const processingTime = email.sentAt.getTime() - email.createdAt.getTime();
      return sum + processingTime;
    }, 0);

    return totalTime / emails.length; // em milliseconds
  }

  private getStartDate(period: string): Date {
    const now = new Date();

    switch (period) {
      case '1h':
        return new Date(now.getTime() - 60 * 60 * 1000);
      case '24h':
        return new Date(now.getTime() - 24 * 60 * 60 * 1000);
      case '7d':
        return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      case '30d':
        return new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
      default:
        return new Date(now.getTime() - 24 * 60 * 60 * 1000);
    }
  }

  async getDetailedHealthCheck() {
    try {
      const [dbHealth, redisHealth, queueHealth, metrics] = await Promise.all([
        this.checkDatabaseHealth(),
        this.checkRedisHealth(),
        this.checkQueueHealth(),
        this.getMetrics('1h')
      ]);

      const overall = dbHealth.status === 'healthy' &&
        redisHealth.status === 'healthy' &&
        queueHealth.status === 'healthy';

      return {
        status: overall ? 'healthy' : 'unhealthy',
        timestamp: new Date().toISOString(),
        services: {
          database: dbHealth,
          redis: redisHealth,
          queue: queueHealth,
        },
        metrics,
        uptime: process.uptime(),
        memory: process.memoryUsage(),
        version: process.env.npm_package_version || '1.0.0',
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error.message,
      };
    }
  }

  private async checkDatabaseHealth() {
    try {
      const start = Date.now();
      await this.prisma.$queryRaw`SELECT 1`;
      const responseTime = Date.now() - start;

      return {
        status: 'healthy',
        responseTime: `${responseTime}ms`,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
      };
    }
  }

  private async checkRedisHealth() {
    try {
      const start = Date.now();
      const redis = await this.emailQueue.client;
      await redis.ping();
      const responseTime = Date.now() - start;

      return {
        status: 'healthy',
        responseTime: `${responseTime}ms`,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
      };
    }
  }

  private async checkQueueHealth() {
    try {
      const stats = await this.getQueueStats();

      console.log("===> checkQueueHealth")
      console.log(stats)
      console.log("===> checkQueueHealth")

      const isHealthy = stats.active < 100 && stats.failed < stats.completed * 0.1;

      return {
        status: isHealthy ? 'healthy' : 'degraded',
        stats,
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        error: error.message,
      };
    }
  }
}