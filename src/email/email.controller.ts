import { Controller, Post, Body, UseGuards, Get, Param, Query } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/send-email.dto';
import { WhitelistGuard } from '../common/guards/whitelist.guard';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';

@Controller('email')
@UseGuards(WhitelistDbGuard)
export class EmailController {
  constructor(private readonly emailService: EmailService) { }

  @Post('send')
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

  @Get('status/:logId')
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

  @Get('templates')
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

  @Get('health')
  async healthCheck() {
    const queueStatus = await this.emailService.getQueueStatus();

    return {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      queue: queueStatus,
    };
  }

  @Get('logs')
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
    const testeData = await this.emailService.functeste(limit, sortBy, sortOrder, template, search, startDate, endDate, status, level)


    return {
      status: 'success',
      data: testeData
    }
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