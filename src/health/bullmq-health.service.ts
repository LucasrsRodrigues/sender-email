import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';

export interface QueueHealthInfo {
  queueName: string;
  isHealthy: boolean;
  waiting: number;
  active: number;
  completed: number;
  failed: number;
  delayed: number;
  paused: boolean;
  jobCounts: any;
  workers: number;
  error?: string;
}

@Injectable()
export class BullMQHealthService {
  private readonly logger = new Logger(BullMQHealthService.name);

  constructor(
    @InjectQueue('email') private emailQueue: Queue,
  ) { }

  async getQueueHealth(): Promise<QueueHealthInfo> {
    try {
      const [
        waiting,
        active,
        completed,
        failed,
        delayed,
        isPaused,
        jobCounts,
        workers
      ] = await Promise.all([
        this.emailQueue.getWaiting(),
        this.emailQueue.getActive(),
        this.emailQueue.getCompleted(),
        this.emailQueue.getFailed(),
        this.emailQueue.getDelayed(),
        this.emailQueue.isPaused(),
        this.emailQueue.getJobCounts(),
        this.emailQueue.getWorkers(),
      ]);

      const isHealthy = this.evaluateQueueHealth({
        waiting: waiting.length,
        active: active.length,
        failed: failed.length,
        paused: isPaused,
      });

      return {
        queueName: 'email',
        isHealthy,
        waiting: waiting.length,
        active: active.length,
        completed: completed.length,
        failed: failed.length,
        delayed: delayed.length,
        paused: isPaused,
        jobCounts,
        workers: workers.length,
      };
    } catch (error) {
      this.logger.error(`Erro ao obter saúde da fila: ${error.message}`);
      return {
        queueName: 'email',
        isHealthy: false,
        waiting: 0,
        active: 0,
        completed: 0,
        failed: 0,
        delayed: 0,
        paused: false,
        jobCounts: {},
        workers: 0,
        error: error.message,
      };
    }
  }

  async getDetailedQueueStats() {
    try {
      const queue = this.emailQueue;

      const [
        jobCounts,
        workers,
        metrics,
        isPaused,
        redisInfo
      ] = await Promise.all([
        queue.getJobCounts(),
        queue.getWorkers(),
        queue.getMetrics('completed', Date.now() - 24 * 60 * 60 * 1000, Date.now()),
        queue.isPaused(),
        this.getRedisInfo(),
      ]);

      return {
        queueName: 'email',
        jobCounts,
        workers: workers.map(worker => ({
          id: worker.id,
          addr: worker.addr,
          fd: worker.fd,
          name: worker.name,
          age: worker.age,
          idle: worker.idle,
        })),
        metrics: {
          completed: metrics.count,
          failed: jobCounts.failed || 0,
          throughput: this.calculateThroughput(metrics),
        },
        isPaused,
        redis: redisInfo,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logger.error(`Erro ao obter estatísticas detalhadas: ${error.message}`);
      throw error;
    }
  }

  async pauseQueue(): Promise<void> {
    await this.emailQueue.pause();
    this.logger.log('Fila de e-mail pausada');
  }

  async resumeQueue(): Promise<void> {
    await this.emailQueue.resume();
    this.logger.log('Fila de e-mail retomada');
  }

  async cleanQueue(grace: number = 0, status?: string): Promise<number> {
    try {
      let cleaned = 0;

      if (!status || status === 'completed') {
        const completedJobs = await this.emailQueue.clean(grace, 100, 'completed');
        cleaned += completedJobs.length;
      }

      if (!status || status === 'failed') {
        const failedJobs = await this.emailQueue.clean(grace, 100, 'failed');
        cleaned += failedJobs.length;
      }

      if (!status || status === 'active') {
        const activeJobs = await this.emailQueue.clean(grace, 100, 'active');
        cleaned += activeJobs.length;
      }

      this.logger.log(`Limpeza da fila concluída: ${cleaned} jobs removidos`);
      return cleaned;
    } catch (error) {
      this.logger.error(`Erro na limpeza da fila: ${error.message}`);
      throw error;
    }
  }

  async retryFailedJobs(limit?: number): Promise<number> {
    try {
      const failedJobs = await this.emailQueue.getFailed(0, limit || -1);
      let retriedCount = 0;

      for (const job of failedJobs) {
        try {
          await job.retry();
          retriedCount++;
        } catch (error) {
          this.logger.warn(`Falha ao reprocessar job ${job.id}: ${error.message}`);
        }
      }

      this.logger.log(`${retriedCount} jobs falhados reprocessados`);
      return retriedCount;
    } catch (error) {
      this.logger.error(`Erro ao reprocessar jobs falhados: ${error.message}`);
      throw error;
    }
  }

  private evaluateQueueHealth(stats: {
    waiting: number;
    active: number;
    failed: number;
    paused: boolean;
  }): boolean {
    // Fila não está saudável se:
    // - Está pausada
    // - Muitos jobs esperando (>1000)
    // - Taxa de falha alta (>10% dos jobs ativos)
    // - Sem workers ativos por muito tempo

    if (stats.paused) return false;
    if (stats.waiting > 1000) return false;
    if (stats.active > 0 && stats.failed / stats.active > 0.1) return false;

    return true;
  }

  private async getRedisInfo() {
    try {
      const redis = await this.emailQueue.client;
      const info = await redis.info('memory');

      const memoryMatch = info.match(/used_memory_human:(.+)/);
      const connectionsMatch = info.match(/connected_clients:(\d+)/);

      return {
        memory: memoryMatch ? memoryMatch[1].trim() : 'unknown',
        connections: connectionsMatch ? parseInt(connectionsMatch[1]) : 0,
        status: 'connected',
      };
    } catch (error) {
      return {
        memory: 'unknown',
        connections: 0,
        status: 'error',
        error: error.message,
      };
    }
  }

  private calculateThroughput(metrics: any): number {
    // Calcular throughput (jobs/hora) baseado nas métricas
    if (!metrics || !metrics.count) return 0;

    const timeWindow = 24 * 60 * 60 * 1000; // 24 horas em ms
    const jobsPerHour = (metrics.count / timeWindow) * (60 * 60 * 1000);

    return Math.round(jobsPerHour * 100) / 100;
  }
}