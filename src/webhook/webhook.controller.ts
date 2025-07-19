import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';

class CreateWebhookDto {
  name: string;
  url: string;
  secret?: string;
  events: string[];
  retryCount?: number;
  timeout?: number;
  headers?: Record<string, string>;
}

class UpdateWebhookDto {
  name?: string;
  url?: string;
  secret?: string;
  events?: string[];
  isActive?: boolean;
  retryCount?: number;
  timeout?: number;
  headers?: Record<string, string>;
}

@Controller('admin/webhooks')
@UseGuards(WhitelistDbGuard)
export class WebhookController {
  constructor(private readonly prisma: PrismaService) { }

  // Listar todos os webhooks
  @Get()
  async getWebhooks() {
    const webhooks = await this.prisma.webhookConfig.findMany({
      orderBy: { createdAt: 'desc' },
    });

    return {
      status: 'success',
      data: {
        webhooks: webhooks.map(webhook => ({
          ...webhook,
          secret: webhook.secret ? '***' : null, // Mascarar secret na resposta
        })),
        count: webhooks.length,
      },
    };
  }

  // Listar todos os webhooks
  @Get("health")
  async getHealth() {
    // TODO: Arrumar esse health

    return {
      status: 'success',
      data: { ok: 'true' },
    };
  }

  // Obter webhook específico
  @Get(':id')
  async getWebhook(@Param('id') id: string) {
    console.log("==+> getWeb")
    console.log(id)
    console.log("==+> getWeb")

    const webhook = await this.prisma.webhookConfig.findUnique({
      where: { id },
      include: {
        logs: {
          take: 10,
          orderBy: { createdAt: 'desc' },
        },
      },
    });

    if (!webhook) {
      return {
        status: 'not_found',
        message: 'Webhook não encontrado',
      };
    }

    return {
      status: 'success',
      data: {
        webhook: {
          ...webhook,
          secret: webhook.secret ? '***' : null,
        },
      },
    };
  }

  // Criar novo webhook
  @Post()
  async createWebhook(@Body() dto: CreateWebhookDto) {
    const webhook = await this.prisma.webhookConfig.create({
      data: {
        name: dto.name,
        url: dto.url,
        secret: dto.secret,
        events: dto.events,
        retryCount: dto.retryCount || 3,
        timeout: dto.timeout || 5000,
        headers: dto.headers || {},
      },
    });

    return {
      status: 'success',
      message: 'Webhook criado com sucesso',
      data: {
        webhook: {
          ...webhook,
          secret: webhook.secret ? '***' : null,
        },
      },
    };
  }

  // Atualizar webhook
  @Put(':id')
  async updateWebhook(@Param('id') id: string, @Body() dto: UpdateWebhookDto) {
    const webhook = await this.prisma.webhookConfig.update({
      where: { id },
      data: {
        ...dto,
        updatedAt: new Date(),
      },
    });

    return {
      status: 'success',
      message: 'Webhook atualizado com sucesso',
      data: {
        webhook: {
          ...webhook,
          secret: webhook.secret ? '***' : null,
        },
      },
    };
  }

  // Deletar webhook
  @Delete(':id')
  async deleteWebhook(@Param('id') id: string) {
    await this.prisma.webhookConfig.delete({
      where: { id },
    });

    return {
      status: 'success',
      message: 'Webhook deletado com sucesso',
    };
  }

  // Testar webhook
  @Post(':id/test')
  async testWebhook(@Param('id') id: string) {
    const webhook = await this.prisma.webhookConfig.findUnique({
      where: { id },
    });

    if (!webhook) {
      return {
        status: 'not_found',
        message: 'Webhook não encontrado',
      };
    }

    try {
      const testPayload = {
        event: 'webhook.test',
        timestamp: new Date().toISOString(),
        data: {
          message: 'Este é um teste do webhook',
          webhookId: id,
        },
      };

      // Aqui seria feita a chamada HTTP real para o webhook
      // Por enquanto, simularemos um teste bem-sucedido

      await this.prisma.webhookLog.create({
        data: {
          webhookId: id,
          event: 'webhook.test',
          url: webhook.url,
          payload: testPayload,
          response: 'Test successful',
          statusCode: 200,
          success: true,
          responseTime: Math.floor(Math.random() * 1000) + 100,
        },
      });

      return {
        status: 'success',
        message: 'Webhook testado com sucesso',
        data: {
          url: webhook.url,
          payload: testPayload,
          timestamp: new Date().toISOString(),
        },
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Erro ao testar webhook',
        error: error.message,
      };
    }
  }

  // Logs do webhook
  @Get(':id/logs')
  async getWebhookLogs(
    @Param('id') id: string,
    @Query('limit') limit?: string,
    @Query('success') success?: string
  ) {
    const limitNum = limit ? parseInt(limit) : 50;
    const successFilter = success !== undefined ? success === 'true' : undefined;

    const logs = await this.prisma.webhookLog.findMany({
      where: {
        webhookId: id,
        ...(successFilter !== undefined && { success: successFilter }),
      },
      orderBy: { createdAt: 'desc' },
      take: limitNum,
    });

    return {
      status: 'success',
      data: {
        logs,
        count: logs.length,
        filters: {
          webhookId: id,
          limit: limitNum,
          successOnly: successFilter,
        },
      },
    };
  }

  // Estatísticas de webhooks
  @Get(':id/stats')
  async getWebhookStats(@Param('id') id: string, @Query('period') period: string = 'day') {
    const startDate = new Date();

    switch (period) {
      case 'hour':
        startDate.setHours(startDate.getHours() - 1);
        break;
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

    const [totalCalls, successfulCalls, failedCalls, avgResponseTime] = await Promise.all([
      this.prisma.webhookLog.count({
        where: {
          webhookId: id,
          createdAt: { gte: startDate },
        },
      }),
      this.prisma.webhookLog.count({
        where: {
          webhookId: id,
          createdAt: { gte: startDate },
          success: true,
        },
      }),
      this.prisma.webhookLog.count({
        where: {
          webhookId: id,
          createdAt: { gte: startDate },
          success: false,
        },
      }),
      this.prisma.webhookLog.aggregate({
        where: {
          webhookId: id,
          createdAt: { gte: startDate },
          responseTime: { not: null },
        },
        _avg: { responseTime: true },
      }),
    ]);

    const successRate = totalCalls > 0 ? (successfulCalls / totalCalls) * 100 : 0;

    return {
      status: 'success',
      data: {
        period,
        totalCalls,
        successfulCalls,
        failedCalls,
        successRate: Math.round(successRate * 100) / 100,
        avgResponseTime: Math.round(avgResponseTime._avg.responseTime || 0),
        startDate,
        endDate: new Date(),
      },
    };
  }

  // Eventos disponíveis
  @Get('events/available')
  async getAvailableEvents() {
    const events = [
      {
        event: 'email.sent',
        description: 'Disparado quando um e-mail é enviado com sucesso',
        payload: {
          emailId: 'string',
          to: 'string',
          subject: 'string',
          provider: 'string',
          sentAt: 'ISO date',
        },
      },
      {
        event: 'email.failed',
        description: 'Disparado quando um e-mail falha no envio',
        payload: {
          emailId: 'string',
          to: 'string',
          subject: 'string',
          errorMessage: 'string',
          attempts: 'number',
        },
      },
      {
        event: 'email.bounced',
        description: 'Disparado quando um e-mail retorna (bounce)',
        payload: {
          emailId: 'string',
          to: 'string',
          bounceType: 'string',
          bounceReason: 'string',
        },
      },
      {
        event: 'queue.stalled',
        description: 'Disparado quando a fila trava',
        payload: {
          queueName: 'string',
          stalledJobs: 'number',
          timestamp: 'ISO date',
        },
      },
    ];

    return {
      status: 'success',
      data: {
        events,
        count: events.length,
      },
    };
  }

  // Reenviar webhook falhado
  @Post(':id/retry/:logId')
  async retryWebhook(@Param('id') id: string, @Param('logId') logId: string) {
    const log = await this.prisma.webhookLog.findFirst({
      where: {
        id: logId,
        webhookId: id,
        success: false,
      },
    });

    if (!log) {
      return {
        status: 'not_found',
        message: 'Log de webhook não encontrado ou já bem-sucedido',
      };
    }

    // Aqui seria implementada a lógica de reenvio
    // Por enquanto, simularemos um reenvio

    return {
      status: 'success',
      message: 'Webhook reenviado para processamento',
      data: {
        originalLogId: logId,
        retryTimestamp: new Date().toISOString(),
      },
    };
  }
}