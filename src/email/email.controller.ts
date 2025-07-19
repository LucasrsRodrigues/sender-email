import { Controller, Post, Body, UseGuards, Get, Param, Query } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiKeyAuthGuard } from 'src/auth/guards/api-key-auth.guard';

@Controller('email')
@UseGuards(WhitelistDbGuard)
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  // Endpoint principal de envio 
  @Post('send')
  @UseGuards(ApiKeyAuthGuard)
  @Throttle({ default: { limit: 10, ttl: 60000 } })
  async sendEmail(@Body() sendEmailDto: SendEmailDto) {
    const result = await this.emailService.sendEmail(sendEmailDto);
    return {
      status: 'enqueued',
      message: 'E-mail adicionado à fila de processamento',
      data: {
        logId: result.logId,
        jobId: result.jobId,
        priority: sendEmailDto.priority,
        estimatedDelay: this.getEstimatedDelay(sendEmailDto.priority),
      },
    };
  }

  // Status do email 
  @Get('status/:logId')
  @UseGuards(ApiKeyAuthGuard)
  async getEmailStatus(@Param('logId') logId: string) {
    const status = await this.emailService.getEmailStatus(logId);
    if (!status) {
      return {
        status: 'not_found',
        message: 'E-mail não encontrado',
      };
    }
    return {
      status: 'success',
      data: status,
    };
  }

  // Templates disponíveis - público para consulta
  @Get('templates')
  @UseGuards(JwtAuthGuard)
  @UseGuards()
  async getAvailableTemplates() {
    const templates = this.emailService.getAvailableTemplates();
    return {
      status: 'success',
      data: {
        templates,
        supportedExtensions: ['.hbs', '.html'],
        templatesPath: 'src/email/templates/',
      },
    };
  }

  // Health check - público para monitoramento
  @Get('health')
  @UseGuards(JwtAuthGuard)
  async healthCheck() {
    const queueStatus = await this.emailService.getQueueStatus();
    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      queue: queueStatus,
    };
  }

  // Logs de email - apenas JWT (admin)
  @Get('logs')
  @UseGuards(JwtAuthGuard)
  async getEmailLogs(
    @Query('level') level?: string,
    @Query('status') status?: string,
    @Query('template') template?: string,
    @Query('limit') limit?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: string,
    @Query('search') search?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string
  ) {
    const testeData = await this.emailService.functeste(
      limit,
      sortBy,
      sortOrder,
      template,
      search,
      startDate,
      endDate,
      status,
      level
    );
    return {
      status: 'success',
      data: testeData
    };
  }

  private getEstimatedDelay(priority: string): string {
    const delays = {
      critical: '0-5 segundos',
      high: '5-15 segundos',
      normal: '15-30 segundos',
      low: '30-60 segundos',
    };
    return delays[priority] || delays.normal;
  }
}