import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Request } from 'express';
import { ConfigService } from '../../config/config.service';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WhitelistDbGuard implements CanActivate {
  constructor(
    private configService: ConfigService,
    private prisma: PrismaService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const clientIp = this.getClientIp(request);

    console.log(`🔍 IP Check (DB): ${clientIp}`);

    // Buscar IPs permitidos do banco de dados
    const allowedIPs = await this.configService.getAllowedIPs();

    // Fallback para variáveis de ambiente se não houver IPs no banco
    if (allowedIPs.length === 0) {
      const envIPs = process.env.ALLOWED_IPS?.split(',') || ['127.0.0.1', '::1'];
      if (!envIPs.includes(clientIp)) {
        throw new ForbiddenException(`IP ${clientIp} não autorizado (env fallback)`);
      }
      return true;
    }

    if (!allowedIPs.includes(clientIp)) {
      throw new ForbiddenException(`IP ${clientIp} não autorizado`);
    }

    // Atualizar estatísticas de uso do IP
    try {
      await this.prisma.allowedIP.update({
        where: { ipAddress: clientIp },
        data: {
          lastUsed: new Date(),
          usageCount: { increment: 1 },
        },
      });
    } catch (error) {
      // Ignorar erro de atualização de estatísticas
      console.warn(`Erro ao atualizar estatísticas do IP ${clientIp}:`, error.message);
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