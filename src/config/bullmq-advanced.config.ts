import { Injectable } from '@nestjs/common';
import { QueueOptions, WorkerOptions, JobsOptions } from 'bullmq';

@Injectable()
export class BullMQAdvancedConfig {

  // Configuração otimizada para produção
  getQueueConfig(): QueueOptions {
    return {
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
        maxRetriesPerRequest: 3,
        retryDelayOnFailover: 100,
        enableReadyCheck: false,
        lazyConnect: true,
      },
      defaultJobOptions: {
        removeOnComplete: 100,    // Manter últimos 100 jobs completos
        removeOnFail: 50,         // Manter últimos 50 jobs falhados
        attempts: 3,              // Máximo 3 tentativas
        backoff: {
          type: 'exponential',
          delay: 2000,            // Delay inicial de 2s
        },
        delay: 0,                 // Sem delay por padrão
      },
    };
  }

  // Configuração do Worker
  getWorkerConfig(): WorkerOptions {
    return {
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
      },
      concurrency: parseInt(process.env.WORKER_CONCURRENCY) || 5, // 5 jobs simultâneos
      maxStalledCount: 1,       // Máximo de jobs travados
      stalledInterval: 30000,   // Verificar jobs travados a cada 30s
    };
  }

  // Configurações específicas por tipo de job
  getJobOptions(priority: string): JobsOptions {
    const baseOptions: JobsOptions = {
      removeOnComplete: 100,
      removeOnFail: 50,
    };

    switch (priority) {
      case 'critical':
        return {
          ...baseOptions,
          priority: 1,              // Maior prioridade
          delay: 0,                 // Sem delay
          attempts: 5,              // Mais tentativas
          backoff: {
            type: 'exponential',
            delay: 1000,
          },
        };

      case 'high':
        return {
          ...baseOptions,
          priority: 2,
          delay: 5000,              // 5s delay
          attempts: 4,
          backoff: {
            type: 'exponential',
            delay: 1500,
          },
        };

      case 'normal':
        return {
          ...baseOptions,
          priority: 3,
          delay: 15000,             // 15s delay
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 2000,
          },
        };

      case 'low':
        return {
          ...baseOptions,
          priority: 4,
          delay: 30000,             // 30s delay
          attempts: 2,
          backoff: {
            type: 'fixed',
            delay: 5000,
          },
        };

      default:
        return {
          ...baseOptions,
          priority: 3,
          attempts: 3,
          backoff: {
            type: 'exponential',
            delay: 2000,
          },
        };
    }
  }

  // Rate limiting por tipo de email
  getRateLimitConfig(emailType?: string) {
    const rateLimits = {
      'welcome': { max: 100, duration: 60000 },      // 100/min para boas-vindas
      'password-reset': { max: 10, duration: 60000 }, // 10/min para reset
      'marketing': { max: 50, duration: 60000 },      // 50/min para marketing
      'notification': { max: 200, duration: 60000 },  // 200/min para notificações
      'default': { max: 100, duration: 60000 },       // Padrão
    };

    return rateLimits[emailType] || rateLimits.default;
  }

  // Configuração de flow para jobs complexos
  getFlowConfig() {
    return {
      // Exemplo: workflow de onboarding
      onboarding: {
        name: 'user-onboarding',
        queueName: 'email',
        children: [
          {
            name: 'welcome-email',
            data: { template: 'welcome' },
            opts: { delay: 0 }
          },
          {
            name: 'tutorial-email',
            data: { template: 'tutorial' },
            opts: { delay: 24 * 60 * 60 * 1000 } // 24h depois
          },
          {
            name: 'feature-highlight',
            data: { template: 'features' },
            opts: { delay: 7 * 24 * 60 * 60 * 1000 } // 7 dias depois
          }
        ]
      },

      // Workflow de recuperação de senha
      passwordRecovery: {
        name: 'password-recovery',
        queueName: 'email',
        children: [
          {
            name: 'reset-email',
            data: { template: 'password-reset' },
            opts: { delay: 0 }
          },
          {
            name: 'security-alert',
            data: { template: 'security-alert' },
            opts: { delay: 60000 } // 1 min depois
          }
        ]
      }
    };
  }

  // Configuração de métricas customizadas
  getMetricsConfig() {
    return {
      // Intervalos para coleta de métricas
      intervals: {
        realtime: 1000,           // 1s para métricas em tempo real
        shortTerm: 60000,         // 1min para métricas de curto prazo
        longTerm: 3600000,        // 1h para métricas de longo prazo
      },

      // Métricas a serem coletadas
      metrics: [
        'throughput',             // Jobs/segundo
        'latency',                // Tempo de processamento
        'errorRate',              // Taxa de erro
        'queueSize',              // Tamanho da fila
        'activeWorkers',          // Workers ativos
        'memoryUsage',            // Uso de memória Redis
      ],

      // Alertas automáticos
      alerts: {
        queueSize: 1000,          // Alertar se fila > 1000
        errorRate: 0.1,           // Alertar se erro > 10%
        latency: 30000,           // Alertar se latência > 30s
        throughput: 0.5,          // Alertar se throughput < 0.5/s
      }
    };
  }

  // Configuração de cleanup automático
  getCleanupConfig() {
    return {
      // Limpeza automática de jobs antigos
      schedules: {
        completed: {
          cron: '0 2 * * *',      // Diariamente às 2h
          grace: 24 * 60 * 60 * 1000, // Jobs > 24h
          limit: 1000,            // Máximo 1000 por vez
        },
        failed: {
          cron: '0 3 * * *',      // Diariamente às 3h  
          grace: 7 * 24 * 60 * 60 * 1000, // Jobs > 7 dias
          limit: 500,
        },
        active: {
          cron: '*/30 * * * *',   // A cada 30min
          grace: 60 * 60 * 1000,  // Jobs > 1h
          limit: 100,
        }
      },

      // Retenção de dados
      retention: {
        logs: 30,                 // Logs por 30 dias
        metrics: 90,              // Métricas por 90 dias
        jobs: 7,                  // Jobs por 7 dias
      }
    };
  }
}