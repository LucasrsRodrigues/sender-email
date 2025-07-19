import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';

@Controller('admin')
@UseGuards(WhitelistDbGuard)
export class AdminController {
  constructor(private readonly prisma: PrismaService) { }

  // Dashboard geral de administração
  @Get('dashboard')
  async getDashboard() {
    const [
      totalEmails,
      emailsToday,
      activeTemplates,
      activeWebhooks,
      queueStats,
      recentErrors
    ] = await Promise.all([
      this.prisma.emailLog.count(),
      this.prisma.emailLog.count({
        where: {
          createdAt: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
          },
        },
      }),
      this.prisma.emailTemplate.count({
        where: { isActive: true },
      }),
      this.prisma.webhookConfig.count({
        where: { isActive: true },
      }),
      this.getQueueStats(),
      this.prisma.emailLog.findMany({
        where: { status: 'FAILED' },
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          to: true,
          subject: true,
          errorMessage: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      status: 'success',
      data: {
        overview: {
          totalEmails,
          emailsToday,
          activeTemplates,
          activeWebhooks,
        },
        queue: queueStats,
        recentErrors,
        timestamp: new Date().toISOString(),
      },
    };
  }

  // Estatísticas por período
  @Get('stats')
  async getStats(@Query('period') period: string = 'week') {
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

    const [emailStats, templateStats, providerStats] = await Promise.all([
      this.getEmailStatsByPeriod(startDate),
      this.getTemplateStatsByPeriod(startDate),
      this.getProviderStatsByPeriod(startDate),
    ]);

    return {
      status: 'success',
      data: {
        period,
        startDate,
        endDate: new Date(),
        email: emailStats,
        templates: templateStats,
        providers: providerStats,
      },
    };
  }

  // Busca geral
  @Get('search')
  async search(@Query('q') query: string, @Query('type') type?: string) {
    if (!query || query.length < 2) {
      return {
        status: 'error',
        message: 'Query deve ter pelo menos 2 caracteres',
      };
    }

    const results = {
      emails: [],
      templates: [],
      configs: [],
      webhooks: [],
    };

    // Buscar emails
    if (!type || type === 'emails') {
      results.emails = await this.prisma.emailLog.findMany({
        where: {
          OR: [
            { to: { contains: query, mode: 'insensitive' } },
            { subject: { contains: query, mode: 'insensitive' } },
          ],
        },
        orderBy: { createdAt: 'desc' },
        take: 10,
        select: {
          id: true,
          to: true,
          subject: true,
          status: true,
          createdAt: true,
        },
      });
    }

    // Buscar templates
    if (!type || type === 'templates') {
      results.templates = await this.prisma.emailTemplate.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { subject: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: 10,
        select: {
          id: true,
          name: true,
          subject: true,
          description: true,
          isActive: true,
        },
      });
    }

    // Buscar configurações
    if (!type || type === 'configs') {
      results.configs = await this.prisma.systemConfig.findMany({
        where: {
          OR: [
            { key: { contains: query, mode: 'insensitive' } },
            { description: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: 10,
        select: {
          id: true,
          key: true,
          description: true,
          category: true,
          isActive: true,
        },
      });
    }

    // Buscar webhooks
    if (!type || type === 'webhooks') {
      results.webhooks = await this.prisma.webhookConfig.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { url: { contains: query, mode: 'insensitive' } },
          ],
        },
        take: 10,
        select: {
          id: true,
          name: true,
          url: true,
          isActive: true,
          events: true,
        },
      });
    }

    const totalResults = Object.values(results).reduce((acc, arr) => acc + arr.length, 0);

    return {
      status: 'success',
      data: {
        query,
        type: type || 'all',
        results,
        totalResults,
      },
    };
  }

  // Logs do sistema
  @Get('logs')
  async getLogs(@Query('level') level?: string, @Query('limit') limit?: string) {
    // Esta seria uma implementação real de logs do sistema
    // Por enquanto, retornamos logs simulados baseados nos emails

    const limitNum = limit ? parseInt(limit) : 50;

    const emailLogs = await this.prisma.emailLog.findMany({
      where: level === 'error' ? { status: 'FAILED' } : undefined,
      orderBy: { createdAt: 'desc' },
      take: limitNum,
      select: {
        id: true,
        to: true,
        subject: true,
        status: true,
        errorMessage: true,
        createdAt: true,
        provider: true,
      },
    });

    const logs = emailLogs.map(log => ({
      id: log.id,
      level: log.status === 'FAILED' ? 'error' : log.status === 'SENT' ? 'info' : 'warn',
      message: log.status === 'FAILED' ?
        `Falha no envio para ${log.to}: ${log.errorMessage}` :
        `Email enviado para ${log.to} via ${log.provider}`,
      timestamp: log.createdAt,
      metadata: {
        emailId: log.id,
        recipient: log.to,
        subject: log.subject,
        status: log.status,
        provider: log.provider,
      },
    }));

    return {
      status: 'success',
      data: {
        logs,
        count: logs.length,
        filters: {
          level,
          limit: limitNum,
        },
      },
    };
  }

  // Limpeza geral do sistema
  @Post('cleanup')
  async cleanup(@Body() options: {
    olderThan?: number; // dias
    types?: string[]; // ['emails', 'logs', 'webhooks']
  }) {
    const olderThan = options.olderThan || 30;
    const types = options.types || ['emails', 'logs'];
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - olderThan);

    const results = {
      emails: 0,
      webhookLogs: 0,
      configHistory: 0,
    };

    if (types.includes('emails')) {
      const deletedEmails = await this.prisma.emailLog.deleteMany({
        where: {
          createdAt: { lt: cutoffDate },
          status: { in: ['SENT', 'FAILED'] },
        },
      });
      results.emails = deletedEmails.count;
    }

    if (types.includes('logs')) {
      const deletedWebhookLogs = await this.prisma.webhookLog.deleteMany({
        where: {
          createdAt: { lt: cutoffDate },
        },
      });
      results.webhookLogs = deletedWebhookLogs.count;

      const deletedConfigHistory = await this.prisma.configHistory.deleteMany({
        where: {
          createdAt: { lt: cutoffDate },
        },
      });
      results.configHistory = deletedConfigHistory.count;
    }

    return {
      status: 'success',
      message: `Limpeza concluída - dados anteriores a ${olderThan} dias removidos`,
      data: {
        cutoffDate,
        results,
        totalDeleted: Object.values(results).reduce((acc, val) => acc + val, 0),
      },
    };
  }

  private async getQueueStats() {
    // Stats simulados da fila - seria implementado com BullMQ real
    return {
      waiting: 5,
      active: 2,
      completed: 1250,
      failed: 15,
      delayed: 3,
    };
  }

  private async getEmailStatsByPeriod(startDate: Date) {
    const [sent, failed, pending] = await Promise.all([
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: 'SENT',
        },
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: 'FAILED',
        },
      }),
      this.prisma.emailLog.count({
        where: {
          createdAt: { gte: startDate },
          status: { in: ['PENDING', 'RETRYING'] },
        },
      }),
    ]);

    const total = sent + failed + pending;
    const successRate = total > 0 ? (sent / total) * 100 : 0;

    return {
      sent,
      failed,
      pending,
      total,
      successRate: Math.round(successRate * 100) / 100,
    };
  }

  private async getTemplateStatsByPeriod(startDate: Date) {
    const templateUsage = await this.prisma.emailLog.groupBy({
      by: ['template'],
      where: {
        createdAt: { gte: startDate },
        status: 'SENT',
      },
      _count: { template: true },
      orderBy: { _count: { template: 'desc' } },
      take: 5,
    });

    return templateUsage.map(item => ({
      template: item.template,
      usage: item._count.template,
    }));
  }

  private async getProviderStatsByPeriod(startDate: Date) {
    const providerUsage = await this.prisma.emailLog.groupBy({
      by: ['provider'],
      where: {
        createdAt: { gte: startDate },
        status: 'SENT',
        provider: { not: null },
      },
      _count: { provider: true },
    });

    return providerUsage.map(item => ({
      provider: item.provider,
      usage: item._count.provider,
    }));
  }
}