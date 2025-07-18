import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ConfigService } from './config.service';
import { WhitelistGuard } from '../common/guards/whitelist.guard';

class UpdateConfigDto {
  value: any;
  changedBy?: string;
  reason?: string;
}

class AddIPDto {
  ipAddress: string;
  description?: string;
  createdBy?: string;
}

class AddBlockedDomainDto {
  domain: string;
  reason?: string;
  blockedBy?: string;
}

@Controller('admin/config')
@UseGuards(WhitelistGuard)
export class ConfigController {
  constructor(private readonly configService: ConfigService) { }

  // Configurações por categoria
  @Get('category/:category')
  async getConfigsByCategory(@Param('category') category: string) {
    const configs = await this.configService.getByCategory(category);

    return {
      status: 'success',
      data: {
        category,
        configs,
        count: configs.length,
      },
    };
  }

  // Todas as categorias disponíveis
  @Get('categories')
  async getCategories() {
    const categories = [
      { name: 'security', description: 'Configurações de segurança' },
      { name: 'email', description: 'Configurações de e-mail' },
      { name: 'performance', description: 'Configurações de performance' },
      { name: 'backup', description: 'Configurações de backup' },
      { name: 'webhook', description: 'Configurações de webhook' },
      { name: 'logs', description: 'Configurações de logs' },
      { name: 'custom', description: 'Configurações customizadas' },
    ];

    return {
      status: 'success',
      data: { categories },
    };
  }

  // Atualizar configuração
  @Put(':key')
  async updateConfig(@Param('key') key: string, @Body() dto: UpdateConfigDto) {
    await this.configService.set(key, dto.value, dto.changedBy, dto.reason);

    return {
      status: 'success',
      message: `Configuração '${key}' atualizada com sucesso`,
    };
  }

  // Histórico de uma configuração
  @Get(':key/history')
  async getConfigHistory(@Param('key') key: string, @Query('limit') limit?: string) {
    const history = await this.configService.getConfigHistory(
      key,
      limit ? parseInt(limit) : 10
    );

    return {
      status: 'success',
      data: {
        key,
        history,
        count: history.length,
      },
    };
  }

  // Recarregar cache
  @Post('reload-cache')
  async reloadCache() {
    await this.configService.reloadCache();

    return {
      status: 'success',
      message: 'Cache de configurações recarregado',
    };
  }

  // === Gerenciamento de IPs Permitidos ===

  @Get('allowed-ips')
  async getAllowedIPs() {
    const ips = await this.configService.getAllowedIPs();

    return {
      status: 'success',
      data: { ips, count: ips.length },
    };
  }

  @Post('allowed-ips')
  async addAllowedIP(@Body() dto: AddIPDto) {
    await this.configService.addAllowedIP(dto.ipAddress, dto.description, dto.createdBy);

    return {
      status: 'success',
      message: `IP ${dto.ipAddress} adicionado à whitelist`,
    };
  }

  @Delete('allowed-ips/:ip')
  async removeAllowedIP(@Param('ip') ip: string) {
    await this.configService.removeAllowedIP(ip);

    return {
      status: 'success',
      message: `IP ${ip} removido da whitelist`,
    };
  }

  // === Gerenciamento de Domínios Bloqueados ===

  @Get('blocked-domains')
  async getBlockedDomains() {
    const domains = await this.configService.getBlockedDomains();

    return {
      status: 'success',
      data: { domains, count: domains.length },
    };
  }

  @Post('blocked-domains')
  async addBlockedDomain(@Body() dto: AddBlockedDomainDto) {
    await this.configService.addBlockedDomain(dto.domain, dto.reason, dto.blockedBy);

    return {
      status: 'success',
      message: `Domínio ${dto.domain} bloqueado`,
    };
  }

  @Delete('blocked-domains/:domain')
  async removeBlockedDomain(@Param('domain') domain: string) {
    // Implementar remoção de domínio bloqueado
    return {
      status: 'success',
      message: `Domínio ${domain} desbloqueado`,
    };
  }

  // === Configurações rápidas ===

  @Get('quick-settings')
  async getQuickSettings() {
    const settings = await Promise.all([
      this.configService.get('RATE_LIMIT_REQUESTS', 10),
      this.configService.get('EMAIL_RETRY_ATTEMPTS', 3),
      this.configService.get('CACHE_TTL', 300),
      this.configService.get('BACKUP_ENABLED', true),
    ]);

    return {
      status: 'success',
      data: {
        rateLimitRequests: settings[0],
        emailRetryAttempts: settings[1],
        cacheTTL: settings[2],
        backupEnabled: settings[3],
      },
    };
  }

  @Post('quick-settings')
  async updateQuickSettings(@Body() settings: any) {
    const updates = [
      { key: 'RATE_LIMIT_REQUESTS', value: settings.rateLimitRequests },
      { key: 'EMAIL_RETRY_ATTEMPTS', value: settings.emailRetryAttempts },
      { key: 'CACHE_TTL', value: settings.cacheTTL },
      { key: 'BACKUP_ENABLED', value: settings.backupEnabled },
    ];

    for (const update of updates) {
      if (update.value !== undefined) {
        await this.configService.set(update.key, update.value, settings.changedBy);
      }
    }

    return {
      status: 'success',
      message: 'Configurações rápidas atualizadas',
    };
  }
}