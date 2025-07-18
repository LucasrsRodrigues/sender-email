import { Injectable, Logger } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue, FlowProducer } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { EmailJobData, EmailPriority } from './dto/send-email.dto';

export interface EmailFlow {
  name: string;
  userId: string;
  userEmail: string;
  userData: Record<string, any>;
  flowType: 'onboarding' | 'password-recovery' | 'marketing-campaign' | 'custom';
}

export interface FlowStep {
  name: string;
  template: string;
  delay: number;
  condition?: string; // Condição JS para executar o step
  variables?: Record<string, any>;
}

@Injectable()
export class EmailFlowsService {
  private readonly logger = new Logger(EmailFlowsService.name);
  private flowProducer: FlowProducer;

  constructor(
    @InjectQueue('email') private emailQueue: Queue,
    private prisma: PrismaService,
  ) {
    // Inicializar FlowProducer
    this.flowProducer = new FlowProducer({
      connection: {
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT) || 6379,
        password: process.env.REDIS_PASSWORD,
      },
    });
  }

  // Iniciar flow de onboarding para novo usuário
  async startOnboardingFlow(userId: string, userEmail: string, userData: Record<string, any>) {
    const flowId = `onboarding-${userId}-${Date.now()}`;

    const flow = {
      name: flowId,
      queueName: 'email',
      children: [
        // 1. Email de boas-vindas (imediato)
        {
          name: `welcome-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Bem-vindo à nossa plataforma!',
            template: 'welcome',
            variables: {
              user: userData,
              activationUrl: `https://app.com/activate?userId=${userId}`,
              sentAt: new Date().toISOString(),
            },
            logId: null, // Será preenchido pelo processor
          } as EmailJobData,
          opts: {
            priority: 1,
            delay: 0,
          }
        },

        // 2. Tutorial por email (1 dia depois)
        {
          name: `tutorial-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Como começar - Tutorial completo',
            template: 'tutorial',
            variables: {
              user: userData,
              tutorialUrl: `https://app.com/tutorial?userId=${userId}`,
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 2,
            delay: 24 * 60 * 60 * 1000, // 24 horas
          }
        },

        // 3. Recursos em destaque (3 dias depois)
        {
          name: `features-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Descubra recursos que você vai amar',
            template: 'features-highlight',
            variables: {
              user: userData,
              featuresUrl: `https://app.com/features?userId=${userId}`,
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 3,
            delay: 3 * 24 * 60 * 60 * 1000, // 3 dias
          }
        },

        // 4. Feedback (7 dias depois)
        {
          name: `feedback-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Como está sendo sua experiência?',
            template: 'feedback-request',
            variables: {
              user: userData,
              feedbackUrl: `https://app.com/feedback?userId=${userId}`,
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 3,
            delay: 7 * 24 * 60 * 60 * 1000, // 7 dias
          }
        }
      ]
    };

    try {
      const flowJob = await this.flowProducer.add(flow);

      this.logger.log(`Flow de onboarding iniciado para usuário ${userId}: ${flowJob.job.id}`);

      return {
        flowId,
        jobId: flowJob.job.id,
        steps: flow.children.length,
      };
    } catch (error) {
      this.logger.error(`Erro ao iniciar flow de onboarding: ${error.message}`);
      throw error;
    }
  }

  // Flow de recuperação de senha
  async startPasswordRecoveryFlow(
    userId: string,
    userEmail: string,
    resetToken: string,
    userData: Record<string, any>
  ) {
    const flowId = `password-recovery-${userId}-${Date.now()}`;

    const flow = {
      name: flowId,
      queueName: 'email',
      children: [
        // 1. Email de reset (imediato)
        {
          name: `reset-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Redefinição de senha solicitada',
            template: 'password-reset',
            variables: {
              user: userData,
              resetToken,
              resetUrl: `https://app.com/reset-password?token=${resetToken}`,
              expiresIn: '1 hora',
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 1, // Alta prioridade
            delay: 0,
          }
        },

        // 2. Alerta de segurança (1 min depois, para não ser spam)
        {
          name: `security-alert-${userId}`,
          queueName: 'email',
          data: {
            to: userEmail,
            subject: 'Alerta de segurança - Senha redefinida',
            template: 'security-alert',
            variables: {
              user: userData,
              timestamp: new Date().toISOString(),
              ipAddress: '(será preenchido pelo sistema)',
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 2,
            delay: 60 * 1000, // 1 minuto
          }
        }
      ]
    };

    try {
      const flowJob = await this.flowProducer.add(flow);

      this.logger.log(`Flow de recuperação de senha iniciado para usuário ${userId}: ${flowJob.job.id}`);

      return {
        flowId,
        jobId: flowJob.job.id,
        resetToken,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000), // 1 hora
      };
    } catch (error) {
      this.logger.error(`Erro ao iniciar flow de recuperação: ${error.message}`);
      throw error;
    }
  }

  // Campanha de marketing personalizada
  async startMarketingCampaignFlow(
    campaignId: string,
    recipients: Array<{ userId: string; email: string; data: Record<string, any> }>,
    campaignData: Record<string, any>
  ) {
    const flows = [];

    for (const recipient of recipients) {
      const flowId = `campaign-${campaignId}-${recipient.userId}`;

      const flow = {
        name: flowId,
        queueName: 'email',
        children: [
          // Email principal da campanha
          {
            name: `campaign-main-${recipient.userId}`,
            queueName: 'email',
            data: {
              to: recipient.email,
              subject: campaignData.subject,
              template: campaignData.template,
              variables: {
                user: recipient.data,
                campaign: campaignData,
                unsubscribeUrl: `https://app.com/unsubscribe?userId=${recipient.userId}&campaign=${campaignId}`,
                sentAt: new Date().toISOString(),
              },
              logId: null,
            } as EmailJobData,
            opts: {
              priority: 4, // Baixa prioridade para marketing
              delay: Math.random() * 60000, // Delay aleatório até 1min para evitar spam
            }
          }
        ]
      };

      // Adicionar follow-up se configurado
      if (campaignData.followUp) {
        flow.children.push({
          name: `campaign-followup-${recipient.userId}`,
          queueName: 'email',
          data: {
            to: recipient.email,
            subject: campaignData.followUp.subject,
            template: campaignData.followUp.template,
            variables: {
              user: recipient.data,
              campaign: campaignData,
              sentAt: new Date().toISOString(),
            },
            logId: null,
          } as EmailJobData,
          opts: {
            priority: 4,
            delay: campaignData.followUp.delay || 3 * 24 * 60 * 60 * 1000, // 3 dias
          }
        });
      }

      flows.push(flow);
    }

    try {
      const flowJobs = await this.flowProducer.addBulk(flows);

      this.logger.log(`Campanha ${campaignId} iniciada para ${recipients.length} destinatários`);

      return {
        campaignId,
        recipientCount: recipients.length,
        flowJobs: flowJobs.map(job => job.job.id),
      };
    } catch (error) {
      this.logger.error(`Erro ao iniciar campanha: ${error.message}`);
      throw error;
    }
  }

  // Cancelar flow específico
  async cancelFlow(flowId: string): Promise<void> {
    try {
      // Usar connection do flowProducer ao invés de client
      const redis = await this.flowProducer.connection;
      await redis.del(`bull:email:${flowId}`);

      this.logger.log(`Flow ${flowId} cancelado`);
    } catch (error) {
      this.logger.error(`Erro ao cancelar flow ${flowId}: ${error.message}`);
      throw error;
    }
  }

  // Obter status de um flow
  async getFlowStatus(flowId: string) {
    try {
      // Usar connection do flowProducer
      const redis = await this.flowProducer.connection;
      const flowData = await redis.hgetall(`bull:email:${flowId}`);

      return {
        flowId,
        status: flowData.status || 'unknown',
        createdAt: flowData.createdAt ? new Date(parseInt(flowData.createdAt)) : null,
        completedSteps: parseInt(flowData.completedSteps) || 0,
        totalSteps: parseInt(flowData.totalSteps) || 0,
        lastUpdate: flowData.lastUpdate ? new Date(parseInt(flowData.lastUpdate)) : null,
      };
    } catch (error) {
      this.logger.error(`Erro ao obter status do flow ${flowId}: ${error.message}`);
      return null;
    }
  }

  // Listar flows ativos
  async getActiveFlows(limit: number = 50) {
    try {
      // Usar connection do flowProducer
      const redis = await this.flowProducer.connection;
      const keys = await redis.keys('bull:email:*-flow');
      const flows = [];

      for (const key of keys.slice(0, limit)) {
        const flowData = await redis.hgetall(key);
        if (flowData.status !== 'completed' && flowData.status !== 'failed') {
          flows.push({
            id: key.replace('bull:email:', ''),
            ...flowData,
          });
        }
      }

      return flows;
    } catch (error) {
      this.logger.error(`Erro ao listar flows ativos: ${error.message}`);
      return [];
    }
  }

  // Estatísticas de flows
  async getFlowStats(period: 'day' | 'week' | 'month' = 'day') {
    const startDate = new Date();

    switch (period) {
      case 'day':
        startDate.setDate(startDate.getDate() - 1);
        break;
      case 'week':
        startDate.setDate(startDate.getDate() - 7);
        break;
      case 'month':
        startDate.setMonth(startDate.getMonth() - 1);
        break;
    }

    try {
      // Buscar estatísticas dos flows no banco
      const stats = await this.prisma.emailLog.groupBy({
        by: ['template'],
        where: {
          createdAt: { gte: startDate },
          jobId: { contains: 'flow' } // Assumindo que flows têm 'flow' no jobId
        },
        _count: { template: true },
        _avg: { attempts: true },
      });

      return {
        period,
        startDate,
        endDate: new Date(),
        flows: stats.map(stat => ({
          template: stat.template,
          count: stat._count.template,
          avgAttempts: Math.round(stat._avg.attempts * 100) / 100,
        })),
        totalFlows: stats.reduce((sum, stat) => sum + stat._count.template, 0),
      };
    } catch (error) {
      this.logger.error(`Erro ao obter estatísticas de flows: ${error.message}`);
      throw error;
    }
  }
}