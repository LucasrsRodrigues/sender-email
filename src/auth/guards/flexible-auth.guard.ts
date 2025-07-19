import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class FlexibleAuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // 1. Verificar JWT Token
    const bearerToken = this.extractTokenFromHeader(request);
    if (bearerToken) {
      try {
        const payload = this.jwtService.verify(bearerToken);
        const user = await this.authService.getUserById(payload.sub);
        if (user && user.isActive) {
          request.user = user;
          return true;
        }
      } catch (error) {
        // Token inválido, continuar para próxima verificação
      }
    }

    // 2. Verificar API Key
    const apiKey = request.headers['x-api-key'];
    if (apiKey) {
      const user = await this.authService.validateApiKey(apiKey);
      if (user) {
        request.user = user;
        return true;
      }
    }

    // 3. Verificar IP whitelist (fallback)
    const allowedIps = process.env.ALLOWED_IPS?.split(',') || [];
    const clientIp = this.getClientIp(request);

    if (allowedIps.includes(clientIp)) {
      request.user = { role: 'IP_WHITELIST', ip: clientIp };
      return true;
    }

    return false;
  }

  private extractTokenFromHeader(request: any): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private getClientIp(request: any): string {
    return (
      request.headers['x-forwarded-for'] ||
      request.headers['x-real-ip'] ||
      request.connection.remoteAddress ||
      request.socket.remoteAddress ||
      request.ip ||
      '127.0.0.1'
    ).split(',')[0].trim();
  }
}