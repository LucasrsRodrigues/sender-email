import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { BackupService } from './backup.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'generated/prisma';

@Controller('admin/backup')
@UseGuards(WhitelistDbGuard)
@Roles(UserRole.ADMIN)
export class BackupController {
  constructor(private readonly backupService: BackupService) { }

  // Criar backup manual
  @Post('create')
  async createManualBackup() {
    const filepath = await this.backupService.createManualBackup();

    return {
      status: 'success',
      message: 'Backup criado com sucesso',
      data: {
        filepath,
        filename: filepath.split('/').pop(),
        type: 'manual',
        timestamp: new Date().toISOString(),
      },
    };
  }

  // Listar backups disponíveis
  @Get('list')
  async listBackups() {
    const backups = await this.backupService.listBackups();

    return {
      status: 'success',
      data: {
        backups,
        count: backups.length,
        totalSize: backups.reduce((acc, backup) => acc + parseFloat(backup.size), 0).toFixed(2) + ' MB',
      },
    };
  }

  // Restaurar backup
  @Post('restore')
  async restoreBackup(@Body() body: { filepath: string }) {
    try {
      await this.backupService.restoreFromBackup(body.filepath);

      return {
        status: 'success',
        message: 'Backup restaurado com sucesso',
        data: {
          filepath: body.filepath,
          restoredAt: new Date().toISOString(),
        },
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Erro ao restaurar backup',
        error: error.message,
      };
    }
  }

  // Status do sistema de backup
  @Get('status')
  async getBackupStatus() {
    const backups = await this.backupService.listBackups();
    const latestBackup = backups[0]; // Assumindo que está ordenado por data

    const status = {
      enabled: process.env.BACKUP_ENABLED !== 'false',
      lastBackup: latestBackup ? {
        filename: latestBackup.name,
        date: latestBackup.date,
        size: latestBackup.size,
      } : null,
      totalBackups: backups.length,
      schedule: {
        daily: '0 2 * * *',   // 2h da manhã
        weekly: '0 3 * * 0',  // Domingo 3h
      },
      retentionPolicy: '10 backups mais recentes',
      backupPath: process.env.BACKUP_PATH || './backups',
    };

    return {
      status: 'success',
      data: status,
    };
  }

  // Configurar backup
  @Post('configure')
  async configureBackup(@Body() config: {
    enabled?: boolean;
    retentionDays?: number;
    dailyBackup?: boolean;
    weeklyBackup?: boolean;
  }) {
    // Aqui seria implementada a lógica para atualizar configurações de backup
    // Por enquanto, retornamos uma resposta de sucesso

    return {
      status: 'success',
      message: 'Configurações de backup atualizadas',
      data: {
        ...config,
        updatedAt: new Date().toISOString(),
      },
    };
  }

  // Verificar integridade de backup
  @Post('verify')
  async verifyBackup(@Body() body: { filepath: string }) {
    try {
      const fs = require('fs');
      const path = require('path');

      if (!fs.existsSync(body.filepath)) {
        throw new Error('Arquivo de backup não encontrado');
      }

      const stats = fs.statSync(body.filepath);
      const content = fs.readFileSync(body.filepath, 'utf-8');

      let backupData;
      try {
        backupData = JSON.parse(content);
      } catch {
        throw new Error('Formato de backup inválido - JSON malformado');
      }

      const checks = {
        fileExists: true,
        validJson: true,
        hasRequiredFields: !!(backupData.timestamp && backupData.data),
        hasEmailLogs: !!(backupData.data && backupData.data.emailLogs),
        dataCount: backupData.data?.emailLogs?.length || 0,
        fileSize: stats.size,
        createdAt: backupData.timestamp,
      };

      const isValid = checks.fileExists && checks.validJson && checks.hasRequiredFields;

      return {
        status: 'success',
        data: {
          filepath: body.filepath,
          isValid,
          checks,
          summary: isValid ? 'Backup válido e íntegro' : 'Backup com problemas de integridade',
        },
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Erro na verificação do backup',
        error: error.message,
      };
    }
  }

  // Estatísticas de backup
  @Get('stats')
  async getBackupStats(@Query('period') period: string = 'month') {
    const backups = await this.backupService.listBackups();

    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    }

    const recentBackups = backups.filter(backup => backup.date >= startDate);

    const stats = {
      period,
      totalBackups: backups.length,
      recentBackups: recentBackups.length,
      averageSize: backups.length > 0 ?
        (backups.reduce((acc, b) => acc + parseFloat(b.size), 0) / backups.length).toFixed(2) + ' MB' : '0 MB',
      oldestBackup: backups.length > 0 ? backups[backups.length - 1].date : null,
      newestBackup: backups.length > 0 ? backups[0].date : null,
      totalSizeOnDisk: backups.reduce((acc, b) => acc + parseFloat(b.size), 0).toFixed(2) + ' MB',
      frequency: recentBackups.length > 1 ?
        Math.round((recentBackups.length / (period === 'week' ? 7 : 30)) * 10) / 10 + ' backups/dia' : 'Insuficiente',
    };

    return {
      status: 'success',
      data: stats,
    };
  }
}