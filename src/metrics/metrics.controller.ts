import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { WhitelistGuard } from '../common/guards/whitelist.guard';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';

@Controller('metrics')
@UseGuards(WhitelistDbGuard)
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) { }

  @Get()
  async getMetrics(@Query('period') period: string = '24h') {
    const metrics = await this.metricsService.getMetrics(period);

    return {
      status: 'success',
      data: metrics,
    };
  }

  @Get('health')
  async getDetailedHealth() {
    const health = await this.metricsService.getDetailedHealthCheck();

    return health;
  }

  @Get('prometheus')
  async getPrometheusMetrics() {
    const metrics = await this.metricsService.getMetrics('24h');

    // Formato Prometheus
    const prometheusMetrics = `
# HELP email_total Total number of emails processed
# TYPE email_total counter
email_total{status="sent"} ${metrics.sentEmails}
email_total{status="failed"} ${metrics.failedEmails}
email_total{status="pending"} ${metrics.pendingEmails}

# HELP email_success_rate Email success rate percentage
# TYPE email_success_rate gauge
email_success_rate ${metrics.successRate}

# HELP email_processing_time_avg Average email processing time in milliseconds
# TYPE email_processing_time_avg gauge
email_processing_time_avg ${metrics.averageProcessingTime}

# HELP email_provider_total Emails sent by provider
# TYPE email_provider_total counter
email_provider_total{provider="gmail"} ${metrics.providerStats.gmail}
email_provider_total{provider="sendgrid"} ${metrics.providerStats.sendgrid}

# HELP email_queue_size Current queue size
# TYPE email_queue_size gauge
email_queue_size{status="waiting"} ${metrics.queueStats.waiting}
email_queue_size{status="active"} ${metrics.queueStats.active}
email_queue_size{status="completed"} ${metrics.queueStats.completed}
email_queue_size{status="failed"} ${metrics.queueStats.failed}
`.trim();

    return prometheusMetrics;
  }
}