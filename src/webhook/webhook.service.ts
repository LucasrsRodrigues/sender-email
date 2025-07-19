import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { EmailStatus } from '@prisma/client';

export interface WebhookPayload {
  event: 'email.sent' | 'email.failed' | 'email.bounced';
  emailId: string;
  timestamp: string;
  data: {
    to: string;
    subject: string;
    status: EmailStatus;
    provider?: string;
    errorMessage?: string;
    attempts: number;
  };
}

@Injectable()
export class WebhookService {
  private readonly logger = new Logger(WebhookService.name);
  private readonly webhookUrls: string[];

  constructor(private readonly httpService: HttpService) {
    // URLs dos webhooks configuradas via env
    this.webhookUrls = (process.env.WEBHOOK_URLS || '').split(',').filter(url => url.trim());
  }

  async notifyEmailEvent(payload: WebhookPayload) {
    if (this.webhookUrls.length === 0) {
      return; // Nenhum webhook configurado
    }

    const promises = this.webhookUrls.map(url => this.sendWebhook(url, payload));

    try {
      await Promise.allSettled(promises);
    } catch (error) {
      this.logger.error(`Erro ao enviar webhooks: ${error.message}`);
    }
  }

  private async sendWebhook(url: string, payload: WebhookPayload): Promise<void> {
    try {
      const signature = this.generateSignature(payload);

      await this.httpService.post(url, payload, {
        headers: {
          'Content-Type': 'application/json',
          'X-Webhook-Signature': signature,
          'X-Webhook-Event': payload.event,
          'User-Agent': 'EmailService-Webhook/1.0',
        },
        timeout: 5000,
      }).pipe(
        timeout(5000),
        catchError(error => {
          this.logger.warn(`Webhook failed for ${url}: ${error.message}`);
          return of(null);
        })
      ).toPromise();

      this.logger.log(`Webhook sent successfully to: ${url}`);
    } catch (error) {
      this.logger.error(`Failed to send webhook to ${url}: ${error.message}`);
    }
  }

  private generateSignature(payload: WebhookPayload): string {
    const crypto = require('crypto');
    const secret = process.env.WEBHOOK_SECRET || 'default-secret';
    const payloadString = JSON.stringify(payload);

    return crypto
      .createHmac('sha256', secret)
      .update(payloadString)
      .digest('hex');
  }
}