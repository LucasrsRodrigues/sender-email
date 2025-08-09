import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';

export interface PerformanceMetrics {
  timestamp: Date;
  period: string;
  email: {
    totalSent: number;
    totalFailed: number;
    averageProcessingTime: number;
    throughputPerSecond: number;
    successRate: number;
    providerStats: {
      gmail: { sent: number; failed: number; avgTime: number };
      sendgrid: { sent: number; failed: number; avgTime: number };
    };
  };
  queue: {
    waiting: number;
    active: number;
    completed: number;
    failed: number;
    delayed: number;
    throughput: number;
    averageWaitTime: number;
  };
  system: {
    memoryUsage: NodeJS.MemoryUsage;
    cpuUsage: NodeJS.CpuUsage;
    uptime: number;
    redisMemory: string;
    redisConnections: number;
  };
  alerts: Array<{
    level: 'info' | 'warning' | 'error';
    message: string;
    metric: string;
    value: number;
    threshold: number;
  }>;
}

@Injectable()
export class PerformanceService {
  private readonly logger = new Logger(PerformanceService.name);
  private cpuUsageStart: NodeJS.CpuUsage;
  private metricsHistory: PerformanceMetrics[] = [];
  private readonly maxHistorySize = 1440; // 24h de dados (1 por minuto)

  constructor(
    @InjectQueue('email') private emailQueue: Queue,
    private prisma: PrismaService,
  ) {
    this.cpuUsageStart = process.cpuUsage();
  }

  // Coletar métricas a cada minuto
  // @Cron(CronExpression.EVERY_MINUTE)
  // async collectMetrics() {
  //   try {
  //     const metrics = await this.generateMetrics('1min');

  //     this.metricsHistory.push(metrics);

  //     // Manter apenas as últimas 24h
  //     if (this.metricsHistory.length > this.maxHistorySize) {
  //       this.metricsHistory = this.metricsHistory.slice(-this.maxHistorySize);
  //     }

  //     // Log alertas críticos
  //     const criticalAlerts = metrics.alerts.filter(alert => alert.level === 'error');

  //     if (criticalAlerts.length > 0) {
  //       this.logger.error(`Alertas críticos detectados: ${criticalAlerts.map(a => a.message).join(', ')}`);
  //     }

  //   } catch (error) {
  //     this.logger.error(`Erro ao coletar métricas: ${error.message}`);
  //   }
  // }

  // Gerar métricas para período específico
  async generateMetrics(period: string): Promise<PerformanceMetrics> {
    const startTime = this.getStartTime(period);
    const now = new Date();

    const [emailStats, queueStats, systemStats] = await Promise.all([
      this.getEmailMetrics(startTime, now),
      this.getQueueMetrics(),
      this.getSystemMetrics(),
    ]);

    const metrics: PerformanceMetrics = {
      timestamp: now,
      period,
      email: emailStats,
      queue: queueStats,
      system: systemStats,
      alerts: [],
    };

    // Gerar alertas baseados nas métricas
    metrics.alerts = this.generateAlerts(metrics);

    return metrics;
  }

  // Obter métricas de e-mail
  private async getEmailMetrics(startTime: Date, endTime: Date) {
    const [totalSent, totalFailed, providerStats, avgProcessingTime] = await Promise.all([
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startTime, lte: endTime },
          status: 'SENT',
        },
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startTime, lte: endTime },
          status: 'FAILED',
        },
      }),
      this.getProviderStats(startTime, endTime),
      this.getAverageProcessingTime(startTime, endTime),
    ]);

    const totalEmails = totalSent + totalFailed;
    const successRate = totalEmails > 0 ? (totalSent / totalEmails) * 100 : 0;
    const periodSeconds = (endTime.getTime() - startTime.getTime()) / 1000;
    const throughputPerSecond = totalSent / periodSeconds;

    return {
      totalSent,
      totalFailed,
      averageProcessingTime: avgProcessingTime,
      throughputPerSecond: Math.round(throughputPerSecond * 100) / 100,
      successRate: Math.round(successRate * 100) / 100,
      providerStats,
    };
  }

  // Obter estatísticas por provedor
  private async getProviderStats(startTime: Date, endTime: Date) {
    const stats = await this.prisma.emailLog.groupBy({
      by: ['provider', 'status'],
      where: {
        createdAt: { gte: startTime, lte: endTime },
        provider: { not: null },
      },
      _count: { provider: true },
      _avg: { attempts: true },
    });

    const providerStats = {
      gmail: { sent: 0, failed: 0, avgTime: 0 },
      sendgrid: { sent: 0, failed: 0, avgTime: 0 },
    };

    for (const stat of stats) {
      const provider = stat.provider.toLowerCase();
      if (providerStats[provider]) {
        if (stat.status === 'SENT') {
          providerStats[provider].sent = stat._count.provider;
        } else if (stat.status === 'FAILED') {
          providerStats[provider].failed = stat._count.provider;
        }
        providerStats[provider].avgTime = stat._avg.attempts * 1000; // Aproximação
      }
    }

    return providerStats;
  }

  // Tempo médio de processamento
  private async getAverageProcessingTime(startTime: Date, endTime: Date): Promise<number> {
    const emails = await this.prisma.emailLog.findMany({
      where: {
        createdAt: { gte: startTime, lte: endTime },
        sentAt: { not: null },
        status: 'SENT',
      },
      select: {
        createdAt: true,
        sentAt: true,
      },
    });

    if (emails.length === 0) return 0;

    const totalTime = emails.reduce((sum, email) => {
      return sum + (email.sentAt.getTime() - email.createdAt.getTime());
    }, 0);

    return Math.round(totalTime / emails.length); // em milliseconds
  }

  // Métricas da fila
  private async getQueueMetrics() {
    const [waiting, active, completed, failed, delayed, metrics] = await Promise.all([
      this.emailQueue.getWaiting(),
      this.emailQueue.getActive(),
      this.emailQueue.getCompleted(),
      this.emailQueue.getFailed(),
      this.emailQueue.getDelayed(),
      this.emailQueue.getMetrics('completed', Date.now() - 60000, Date.now()), // último minuto
    ]);

    const throughput = metrics ? metrics.count / 60 : 0; // por segundo
    const averageWaitTime = waiting.length > 0 ?
      waiting.reduce((sum, job) => sum + (Date.now() - job.timestamp), 0) / waiting.length : 0;

    return {
      waiting: waiting.length,
      active: active.length,
      completed: completed.length,
      failed: failed.length,
      delayed: delayed.length,
      throughput: Math.round(throughput * 100) / 100,
      averageWaitTime: Math.round(averageWaitTime),
    };
  }

  // Métricas do sistema
  private async getSystemMetrics() {
    const memoryUsage = process.memoryUsage();
    const cpuUsage = process.cpuUsage(this.cpuUsageStart);
    const uptime = process.uptime();

    // Info do Redis
    let redisMemory = 'unknown';
    let redisConnections = 0;

    try {
      const redis = await this.emailQueue.client;
      const info = await redis.info('memory');
      const connectionsInfo = await redis.info('clients');

      const memoryMatch = info.match(/used_memory_human:(.+)/);
      const connectionsMatch = connectionsInfo.match(/connected_clients:(\d+)/);

      redisMemory = memoryMatch ? memoryMatch[1].trim() : 'unknown';
      redisConnections = connectionsMatch ? parseInt(connectionsMatch[1]) : 0;
    } catch (error) {
      this.logger.warn(`Erro ao obter info do Redis: ${error.message}`);
    }

    return {
      memoryUsage,
      cpuUsage,
      uptime,
      redisMemory,
      redisConnections,
    };
  }

  // Gerar alertas baseados nas métricas
  private generateAlerts(metrics: PerformanceMetrics): Array<any> {
    const alerts = [];

    // Alerta: Taxa de sucesso baixa
    if (metrics.email.successRate < 95) {
      alerts.push({
        level: metrics.email.successRate < 90 ? 'error' : 'warning',
        message: `Taxa de sucesso de e-mails baixa: ${metrics.email.successRate}%`,
        metric: 'email.successRate',
        value: metrics.email.successRate,
        threshold: 95,
      });
    }

    // Alerta: Fila muito grande
    if (metrics.queue.waiting > 1000) {
      alerts.push({
        level: metrics.queue.waiting > 5000 ? 'error' : 'warning',
        message: `Muitos jobs na fila: ${metrics.queue.waiting}`,
        metric: 'queue.waiting',
        value: metrics.queue.waiting,
        threshold: 1000,
      });
    }

    // Alerta: Tempo de processamento alto
    if (metrics.email.averageProcessingTime > 30000) {
      alerts.push({
        level: metrics.email.averageProcessingTime > 60000 ? 'error' : 'warning',
        message: `Tempo de processamento alto: ${Math.round(metrics.email.averageProcessingTime / 1000)}s`,
        metric: 'email.averageProcessingTime',
        value: metrics.email.averageProcessingTime,
        threshold: 30000,
      });
    }

    // Alerta: Uso de memória alto
    const memoryUsagePercent = (metrics.system.memoryUsage.heapUsed / metrics.system.memoryUsage.heapTotal) * 100;
    if (memoryUsagePercent > 80) {
      alerts.push({
        level: memoryUsagePercent > 90 ? 'error' : 'warning',
        message: `Uso de memória alto: ${Math.round(memoryUsagePercent)}%`,
        metric: 'system.memoryUsage',
        value: memoryUsagePercent,
        threshold: 80,
      });
    }

    // Alerta: Muitos jobs falhados
    if (metrics.queue.failed > 100) {
      alerts.push({
        level: metrics.queue.failed > 500 ? 'error' : 'warning',
        message: `Muitos jobs falhados: ${metrics.queue.failed}`,
        metric: 'queue.failed',
        value: metrics.queue.failed,
        threshold: 100,
      });
    }

    return alerts;
  }

  // Helper para calcular data de início
  private getStartTime(period: string): Date {
    const now = new Date();

    switch (period) {
      case '1min':
        return new Date(now.getTime() - 60 * 1000);
      case '5min':
        return new Date(now.getTime() - 5 * 60 * 1000);
      case '1h':
        return new Date(now.getTime() - 60 * 60 * 1000);
      case '24h':
        return new Date(now.getTime() - 24 * 60 * 60 * 1000);
      case '7d':
        return new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      default:
        return new Date(now.getTime() - 60 * 1000);
    }
  }

  // APIs públicas
  async getCurrentMetrics(period: string = '1h'): Promise<PerformanceMetrics> {
    return await this.generateMetrics(period);
  }

  async getMetricsHistory(hours: number = 1): Promise<PerformanceMetrics[]> {
    const startTime = new Date(Date.now() - hours * 60 * 60 * 1000);
    return this.metricsHistory.filter(metric => metric.timestamp >= startTime);
  }

  async getAlerts(): Promise<Array<any>> {
    const latestMetrics = this.metricsHistory[this.metricsHistory.length - 1];
    return latestMetrics ? latestMetrics.alerts : [];
  }

  // Benchmark de performance
  async runPerformanceBenchmark(): Promise<any> {
    const startTime = Date.now();

    // Simular operações típicas
    const operations = [
      () => this.prisma.emailLog.count(),
      () => this.emailQueue.getWaiting(),
      () => this.emailQueue.getActive(),
      () => this.generateMetrics('1min'),
    ];

    const results = [];

    for (const operation of operations) {
      const opStart = Date.now();
      try {
        await operation();
        results.push({
          operation: operation.name,
          duration: Date.now() - opStart,
          status: 'success',
        });
      } catch (error) {
        results.push({
          operation: operation.name,
          duration: Date.now() - opStart,
          status: 'error',
          error: error.message,
        });
      }
    }

    const totalDuration = Date.now() - startTime;

    return {
      timestamp: new Date(),
      totalDuration,
      operations: results,
      summary: {
        totalOperations: operations.length,
        successfulOperations: results.filter(r => r.status === 'success').length,
        averageDuration: Math.round(results.reduce((sum, r) => sum + r.duration, 0) / results.length),
      },
    };
  }
}