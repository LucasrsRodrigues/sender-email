import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class WhitelistGuard implements CanActivate {
  private readonly allowedIps: string[];

  constructor() {
    this.allowedIps = process.env.ALLOWED_IPS?.split(',') || ['127.0.0.1', '::1'];
  }

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const clientIp = this.getClientIp(request);

    console.log(`🔍 IP Check: ${clientIp} | Allowed: ${this.allowedIps.join(', ')}`);

    if (!this.allowedIps.includes(clientIp)) {
      throw new ForbiddenException(`IP ${clientIp} não autorizado`);
    }

    return true;
  }

  private getClientIp(request: Request): string {
    return (
      request.headers['x-forwarded-for'] as string ||
      request.headers['x-real-ip'] as string ||
      request.connection.remoteAddress ||
      request.socket.remoteAddress ||
      request.ip ||
      '127.0.0.1'
    ).split(',')[0].trim();
  }
}