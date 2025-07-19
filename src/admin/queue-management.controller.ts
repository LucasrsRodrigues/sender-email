import { Controller, Get, Post, Delete, Body, Query, UseGuards } from '@nestjs/common';
import { BullMQHealthService } from '../health/bullmq-health.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';
import { UserRole } from 'prisma/generated/prisma';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('admin/queue')
@UseGuards(WhitelistDbGuard)
@Roles(UserRole.ADMIN)
export class QueueManagementController {
  constructor(private readonly bullMQHealthService: BullMQHealthService) { }

  // Status da fila
  @Get('status')
  async getQueueStatus() {
    const health = await this.bullMQHealthService.getQueueHealth();

    return {
      status: 'success',
      data: health,
    };
  }

  // Estatísticas detalhadas
  @Get('stats')
  async getDetailedStats() {
    const stats = await this.bullMQHealthService.getDetailedQueueStats();

    return {
      status: 'success',
      data: stats,
    };
  }

  // Pausar fila
  @Post('pause')
  async pauseQueue() {
    await this.bullMQHealthService.pauseQueue();

    return {
      status: 'success',
      message: 'Fila pausada com sucesso',
    };
  }

  // Retomar fila
  @Post('resume')
  async resumeQueue() {
    await this.bullMQHealthService.resumeQueue();

    return {
      status: 'success',
      message: 'Fila retomada com sucesso',
    };
  }

  // Limpar fila
  @Delete('clean')
  async cleanQueue(
    @Query('grace') grace?: string,
    @Query('status') status?: string
  ) {
    const graceMs = grace ? parseInt(grace) : 0;
    const cleaned = await this.bullMQHealthService.cleanQueue(graceMs, status);

    return {
      status: 'success',
      message: `${cleaned} jobs removidos da fila`,
      data: { cleaned },
    };
  }

  // Reprocessar jobs falhados
  @Post('retry-failed')
  async retryFailedJobs(@Query('limit') limit?: string) {
    const limitNum = limit ? parseInt(limit) : undefined;
    const retried = await this.bullMQHealthService.retryFailedJobs(limitNum);

    return {
      status: 'success',
      message: `${retried} jobs falhados reprocessados`,
      data: { retried },
    };
  }

  // Health check específico da fila
  @Get('health')
  async getQueueHealth() {
    const health = await this.bullMQHealthService.getQueueHealth();


    console.log("===> health")
    console.log(health)
    console.log("===> health")


    const isHealthy = health.isHealthy;

    return {
      status: isHealthy ? 'healthy' : 'unhealthy',
      data: health,
      recommendations: this.getHealthRecommendations(health),
    };
  }

  private getHealthRecommendations(health: any): string[] {
    const recommendations: string[] = [];

    if (health.paused) {
      recommendations.push('A fila está pausada. Considere retomá-la se apropriado.');
    }

    if (health.waiting > 100) {
      recommendations.push(`${health.waiting} jobs aguardando. Considere adicionar mais workers.`);
    }

    if (health.failed > health.completed * 0.1) {
      recommendations.push('Alta taxa de falhas. Verifique configurações de e-mail.');
    }

    if (health.workers === 0) {
      recommendations.push('Nenhum worker ativo. Verifique se o serviço está rodando.');
    }

    if (health.active > 50) {
      recommendations.push(`${health.active} jobs ativos. Sistema pode estar sobrecarregado.`);
    }

    if (recommendations.length === 0) {
      recommendations.push('Fila operando normalmente.');
    }

    return recommendations;
  }
}