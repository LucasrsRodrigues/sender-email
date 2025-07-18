import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface EmailValidationResult {
  isValid: boolean;
  reason?: string;
  suggestion?: string;
}

@Injectable()
export class EmailValidationService {
  private readonly logger = new Logger(EmailValidationService.name);

  // Lista de domínios temporários conhecidos
  private readonly disposableDomains = new Set([
    '10minutemail.com', 'tempmail.org', 'guerrillamail.com',
    'mailinator.com', 'yopmail.com', 'sharklasers.com'
  ]);

  // Lista de domínios bloqueados
  private readonly blockedDomains = new Set(
    (process.env.BLOCKED_DOMAINS || '').split(',').filter(d => d.trim())
  );

  constructor(private prisma: PrismaService) { }

  async validateEmail(email: string): Promise<EmailValidationResult> {
    // Validação básica de formato
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        isValid: false,
        reason: 'Formato de e-mail inválido'
      };
    }

    const [localPart, domain] = email.toLowerCase().split('@');

    // Verificar domínios bloqueados
    if (this.blockedDomains.has(domain)) {
      return {
        isValid: false,
        reason: 'Domínio bloqueado'
      };
    }

    // Verificar e-mails temporários
    if (this.disposableDomains.has(domain)) {
      return {
        isValid: false,
        reason: 'E-mail temporário não permitido'
      };
    }

    // Verificar se já houve muitas falhas para este e-mail
    const failureCount = await this.prisma.emailLog.count({
      where: {
        to: email,
        status: 'FAILED',
        createdAt: {
          gte: new Date(Date.now() - 24 * 60 * 60 * 1000) // últimas 24h
        }
      }
    });

    if (failureCount >= 5) {
      return {
        isValid: false,
        reason: 'Muitas falhas recentes para este e-mail'
      };
    }

    // Sugestões para domínios comuns com typos
    const suggestion = this.getSuggestion(domain);
    if (suggestion && suggestion !== domain) {
      return {
        isValid: true,
        suggestion: `${localPart}@${suggestion}`
      };
    }

    return { isValid: true };
  }

  private getSuggestion(domain: string): string {
    const commonDomains = {
      'gamil.com': 'gmail.com',
      'gmai.com': 'gmail.com',
      'gmial.com': 'gmail.com',
      'hotmial.com': 'hotmail.com',
      'yaho.com': 'yahoo.com',
      'outlok.com': 'outlook.com',
    };

    return commonDomains[domain] || domain;
  }

  async isEmailInBlacklist(email: string): Promise<boolean> {
    // Implementar blacklist no banco se necessário
    return false;
  }

  async addToBlacklist(email: string, reason: string): Promise<void> {
    this.logger.warn(`E-mail ${email} adicionado à blacklist: ${reason}`);
    // Implementar lógica de blacklist
  }
}