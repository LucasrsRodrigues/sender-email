import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SystemConfigType } from 'generated/prisma';

export interface ConfigItem {
  key: string;
  value: any;
  type: SystemConfigType;
  description?: string;
  category: string;
}

@Injectable()
export class ConfigService implements OnModuleInit {
  private readonly logger = new Logger(ConfigService.name);
  private configCache = new Map<string, any>();
  private lastCacheUpdate = new Date();

  constructor(private prisma: PrismaService) { }

  async onModuleInit() {
    await this.initializeDefaultConfigs();
    await this.loadConfigsToCache();
    this.logger.log('Configurações carregadas do banco de dados');
  }

  // Carregar configuração com fallback para variável de ambiente
  async get<T = string>(key: string, defaultValue?: T): Promise<T> {
    // Verificar cache primeiro
    if (this.configCache.has(key)) {
      return this.configCache.get(key) as T;
    }

    // Buscar no banco
    const config = await this.prisma.systemConfig.findFirst({
      where: { key, isActive: true }
    });

    if (config) {
      const value = this.parseConfigValue(config.value, config.type);
      this.configCache.set(key, value);
      return value as T;
    }

    // Fallback para variável de ambiente
    const envValue = process.env[key];
    if (envValue !== undefined) {
      const parsedValue = this.parseEnvValue(envValue, defaultValue);
      this.configCache.set(key, parsedValue);
      return parsedValue as T;
    }

    // Retornar valor padrão
    if (defaultValue !== undefined) {
      this.configCache.set(key, defaultValue);
      return defaultValue;
    }

    throw new Error(`Configuração '${key}' não encontrada`);
  }

  // Definir configuração (com histórico)
  async set(key: string, value: any, changedBy?: string, reason?: string): Promise<void> {
    const existingConfig = await this.prisma.systemConfig.findUnique({
      where: { key }
    });

    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    const type = this.inferConfigType(value);

    if (existingConfig) {
      // Salvar histórico antes de atualizar
      await this.prisma.configHistory.create({
        data: {
          configKey: key,
          oldValue: existingConfig.value,
          newValue: stringValue,
          changedBy,
          reason,
        }
      });

      // Atualizar configuração
      await this.prisma.systemConfig.update({
        where: { key },
        data: {
          value: stringValue,
          type,
          updatedBy: changedBy,
        }
      });
    } else {
      // Criar nova configuração
      await this.prisma.systemConfig.create({
        data: {
          key,
          value: stringValue,
          type,
          category: 'custom',
          description: `Configuração criada dinamicamente`,
          createdBy: changedBy,
          updatedBy: changedBy,
        }
      });
    }

    // Atualizar cache
    this.configCache.set(key, value);
    this.logger.log(`Configuração '${key}' atualizada`);
  }

  // Recarregar cache
  async reloadCache(): Promise<void> {
    this.configCache.clear();
    await this.loadConfigsToCache();
    this.lastCacheUpdate = new Date();
    this.logger.log('Cache de configurações recarregado');
  }

  // Obter todas as configurações por categoria
  async getByCategory(category: string): Promise<ConfigItem[]> {
    const configs = await this.prisma.systemConfig.findMany({
      where: { category, isActive: true },
      orderBy: { key: 'asc' }
    });

    return configs.map(config => ({
      key: config.key,
      value: this.parseConfigValue(config.value, config.type),
      type: config.type,
      description: config.description,
      category: config.category,
    }));
  }

  // Obter histórico de uma configuração
  async getConfigHistory(key: string, limit: number = 10) {
    return await this.prisma.configHistory.findMany({
      where: { configKey: key },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  // Métodos específicos para diferentes tipos de configuração
  async getAllowedIPs(): Promise<string[]> {
    const ips = await this.prisma.allowedIP.findMany({
      where: { isActive: true }
    });

    return ips.map(ip => ip.ipAddress);
  }

  async addAllowedIP(ipAddress: string, description?: string, createdBy?: string): Promise<void> {
    await this.prisma.allowedIP.upsert({
      where: { ipAddress },
      update: { isActive: true, description, updatedAt: new Date() },
      create: { ipAddress, description, createdBy }
    });

    this.logger.log(`IP ${ipAddress} adicionado à whitelist`);
  }

  async removeAllowedIP(ipAddress: string): Promise<void> {
    await this.prisma.allowedIP.update({
      where: { ipAddress },
      data: { isActive: false }
    });

    this.logger.log(`IP ${ipAddress} removido da whitelist`);
  }

  async getBlockedDomains(): Promise<string[]> {
    const domains = await this.prisma.blockedDomain.findMany({
      where: { isActive: true }
    });

    return domains.map(domain => domain.domain);
  }

  async addBlockedDomain(domain: string, reason?: string, blockedBy?: string): Promise<void> {
    await this.prisma.blockedDomain.upsert({
      where: { domain },
      update: { isActive: true, reason, updatedAt: new Date() },
      create: { domain, reason, blockedBy }
    });

    this.logger.log(`Domínio ${domain} bloqueado`);
  }

  // Método privado para carregar configurações no cache
  private async loadConfigsToCache(): Promise<void> {
    const configs = await this.prisma.systemConfig.findMany({
      where: { isActive: true }
    });

    this.logger.debug("🎲 loadConfigsToCache ", configs)

    for (const config of configs) {
      const value = this.parseConfigValue(config.value, config.type);
      this.configCache.set(config.key, value);
    }
  }

  // Inicializar configurações padrão
  private async initializeDefaultConfigs(): Promise<void> {
    const defaultConfigs = [
      {
        key: 'RATE_LIMIT_TTL',
        value: '60',
        type: SystemConfigType.NUMBER,
        description: 'TTL do rate limiting em segundos',
        category: 'security'
      },
      {
        key: 'RATE_LIMIT_REQUESTS',
        value: '10',
        type: SystemConfigType.NUMBER,
        description: 'Número máximo de requests por TTL',
        category: 'security'
      },
      {
        key: 'EMAIL_RETRY_ATTEMPTS',
        value: '3',
        type: SystemConfigType.NUMBER,
        description: 'Número máximo de tentativas de envio',
        category: 'email'
      },
      {
        key: 'EMAIL_RETRY_DELAY',
        value: '2000',
        type: SystemConfigType.NUMBER,
        description: 'Delay base para retry em milliseconds',
        category: 'email'
      },
      {
        key: 'CACHE_TTL',
        value: '300',
        type: SystemConfigType.NUMBER,
        description: 'TTL do cache em segundos',
        category: 'performance'
      },
      {
        key: 'BACKUP_ENABLED',
        value: 'true',
        type: SystemConfigType.BOOLEAN,
        description: 'Habilitar backup automático',
        category: 'backup'
      },
      {
        key: 'BACKUP_RETENTION_DAYS',
        value: '30',
        type: SystemConfigType.NUMBER,
        description: 'Dias para manter backups',
        category: 'backup'
      },
      {
        key: 'WEBHOOK_TIMEOUT',
        value: '5000',
        type: SystemConfigType.NUMBER,
        description: 'Timeout para webhooks em milliseconds',
        category: 'webhook'
      },
      {
        key: 'LOG_RETENTION_DAYS',
        value: '90',
        type: SystemConfigType.NUMBER,
        description: 'Dias para manter logs de email',
        category: 'logs'
      }
    ];

    for (const config of defaultConfigs) {
      const existing = await this.prisma.systemConfig.findUnique({
        where: { key: config.key }
      });

      if (!existing) {
        await this.prisma.systemConfig.create({
          data: config
        });
      }
    }
  }

  private parseConfigValue(value: string, type: SystemConfigType): any {
    switch (type) {
      case SystemConfigType.BOOLEAN:
        return value.toLowerCase() === 'true';
      case SystemConfigType.NUMBER:
        return Number(value);
      case SystemConfigType.JSON:
        return JSON.parse(value);
      case SystemConfigType.ARRAY:
        return value.split(',').map(item => item.trim());
      default:
        return value;
    }
  }

  private parseEnvValue(envValue: string, defaultValue: any): any {
    if (typeof defaultValue === 'boolean') {
      return envValue.toLowerCase() === 'true';
    }
    if (typeof defaultValue === 'number') {
      return Number(envValue);
    }
    if (Array.isArray(defaultValue)) {
      return envValue.split(',').map(item => item.trim());
    }
    return envValue;
  }

  private inferConfigType(value: any): SystemConfigType {
    if (typeof value === 'boolean') return SystemConfigType.BOOLEAN;
    if (typeof value === 'number') return SystemConfigType.NUMBER;
    if (Array.isArray(value)) return SystemConfigType.ARRAY;
    if (typeof value === 'object') return SystemConfigType.JSON;
    return SystemConfigType.STRING;
  }
}