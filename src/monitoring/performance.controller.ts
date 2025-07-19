import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { PerformanceService } from './performance.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('metrics/performance')
@UseGuards(WhitelistDbGuard, JwtAuthGuard)
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) { }

  // Métricas de performance em tempo real
  @Get()
  async getCurrentMetrics(@Query('period') period: string = '1h') {
    const metrics = await this.performanceService.getCurrentMetrics(period);

    return {
      status: 'success',
      data: metrics,
    };
  }

  // Histórico de métricas
  @Get('history')
  async getMetricsHistory(@Query('hours') hours?: string) {
    const hoursNum = hours ? parseInt(hours) : 1;
    const history = await this.performanceService.getMetricsHistory(hoursNum);

    return {
      status: 'success',
      data: {
        history,
        count: history.length,
        period: `${hoursNum}h`,
      },
    };
  }

  // Alertas ativos
  @Get('alerts')
  async getActiveAlerts() {
    const alerts = await this.performanceService.getAlerts();

    return {
      status: 'success',
      data: {
        alerts,
        count: alerts.length,
        criticalCount: alerts.filter(a => a.level === 'error').length,
        warningCount: alerts.filter(a => a.level === 'warning').length,
      },
    };
  }

  // Benchmark de performance
  @Post('benchmark')
  async runBenchmark() {
    const benchmark = await this.performanceService.runPerformanceBenchmark();

    return {
      status: 'success',
      message: 'Benchmark concluído',
      data: benchmark,
    };
  }

  // Estatísticas detalhadas do sistema
  @Get('system')
  async getSystemStats() {
    const metrics = await this.performanceService.getCurrentMetrics('1h');

    return {
      status: 'success',
      data: {
        system: metrics.system,
        timestamp: metrics.timestamp,
        recommendations: this.getSystemRecommendations(metrics.system),
      },
    };
  }

  // Análise de tendências
  @Get('trends')
  async getTrends(@Query('period') period: string = '24h') {
    const currentMetrics = await this.performanceService.getCurrentMetrics(period);
    const previousPeriod = this.getPreviousPeriod(period);
    const previousMetrics = await this.performanceService.getCurrentMetrics(previousPeriod);

    const trends = {
      emailTrends: {
        sent: {
          current: currentMetrics.email.totalSent,
          previous: previousMetrics.email.totalSent,
          change: this.calculateChange(currentMetrics.email.totalSent, previousMetrics.email.totalSent),
        },
        successRate: {
          current: currentMetrics.email.successRate,
          previous: previousMetrics.email.successRate,
          change: this.calculateChange(currentMetrics.email.successRate, previousMetrics.email.successRate),
        },
      },
      systemTrends: {
        memory: {
          current: currentMetrics.system.memoryUsage.heapUsed,
          previous: previousMetrics.system.memoryUsage.heapUsed,
          change: this.calculateChange(currentMetrics.system.memoryUsage.heapUsed, previousMetrics.system.memoryUsage.heapUsed),
        },
      },
    };

    return {
      status: 'success',
      data: {
        period,
        trends,
        summary: this.generateTrendsSummary(trends),
      },
    };
  }

  private getSystemRecommendations(system: any): string[] {
    const recommendations: string[] = [];

    const memoryUsagePercent = (system.memoryUsage.heapUsed / system.memoryUsage.heapTotal) * 100;

    if (memoryUsagePercent > 80) {
      recommendations.push('Uso de memória alto. Considere reiniciar o serviço ou otimizar código.');
    }

    if (system.uptime < 300) {
      recommendations.push('Serviço reiniciado recentemente. Monitore estabilidade.');
    }

    if (system.uptime > 7 * 24 * 3600) {
      recommendations.push('Serviço rodando há mais de 7 dias. Considere restart para limpeza de memória.');
    }

    if (recommendations.length === 0) {
      recommendations.push('Sistema operando dentro dos parâmetros normais.');
    }

    return recommendations;
  }

  private getPreviousPeriod(period: string): string {
    // Retorna o período anterior para comparação de tendências
    switch (period) {
      case '1h':
        return '1h'; // Compara com hora anterior
      case '24h':
        return '24h'; // Compara com dia anterior
      case '7d':
        return '7d'; // Compara com semana anterior
      default:
        return '1h';
    }
  }

  private calculateChange(current: number, previous: number): number {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100 * 100) / 100;
  }

  private generateTrendsSummary(trends: any): string {
    const emailChange = trends.emailTrends.sent.change;
    const successRateChange = trends.emailTrends.successRate.change;

    let summary = '';

    if (emailChange > 10) {
      summary += 'Volume de emails aumentou significativamente. ';
    } else if (emailChange < -10) {
      summary += 'Volume de emails diminuiu significativamente. ';
    }

    if (successRateChange > 5) {
      summary += 'Taxa de sucesso melhorou. ';
    } else if (successRateChange < -5) {
      summary += 'Taxa de sucesso piorou. ';
    }

    if (!summary) {
      summary = 'Performance estável no período analisado.';
    }

    return summary.trim();
  }
}