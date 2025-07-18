import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../prisma/prisma.service';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);
  private readonly backupPath = process.env.BACKUP_PATH || './backups';

  constructor(
    private prisma: PrismaService,
    @InjectQueue('email') private emailQueue: Queue,
  ) {
    // Criar pasta de backup se não existir
    if (!fs.existsSync(this.backupPath)) {
      fs.mkdirSync(this.backupPath, { recursive: true });
    }
  }

  // Backup diário às 2h da manhã
  @Cron('0 2 * * *')
  async dailyBackup() {
    try {
      await this.createBackup('daily');
      this.logger.log('Backup diário criado com sucesso');
    } catch (error) {
      this.logger.error(`Erro no backup diário: ${error.message}`);
    }
  }

  // Backup semanal aos domingos às 3h
  @Cron('0 3 * * 0')
  async weeklyBackup() {
    try {
      await this.createBackup('weekly');
      await this.cleanOldBackups();
      this.logger.log('Backup semanal criado com sucesso');
    } catch (error) {
      this.logger.error(`Erro no backup semanal: ${error.message}`);
    }
  }

  async createBackup(type: 'daily' | 'weekly' | 'manual'): Promise<string> {
    const timestamp = new Date().toISOString().replace(/:/g, '-').split('.')[0];
    const filename = `email-service-${type}-${timestamp}.json`;
    const filepath = path.join(this.backupPath, filename);

    // Buscar dados dos últimos 30 dias
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - 30);

    const [emailLogs, queueJobs] = await Promise.all([
      this.prisma.emailLog.findMany({
        where: {
          createdAt: { gte: cutoffDate }
        },
        orderBy: { createdAt: 'desc' }
      }),
      this.getQueueJobsForBackup()
    ]);

    const backupData = {
      timestamp: new Date().toISOString(),
      type,
      version: '1.0',
      data: {
        emailLogs,
        queueJobs,
        statistics: await this.getBackupStatistics()
      }
    };

    fs.writeFileSync(filepath, JSON.stringify(backupData, null, 2));

    this.logger.log(`Backup criado: ${filename} (${this.getFileSize(filepath)})`);

    return filepath;
  }

  async restoreFromBackup(filepath: string): Promise<void> {
    if (!fs.existsSync(filepath)) {
      throw new Error('Arquivo de backup não encontrado');
    }

    const backupData = JSON.parse(fs.readFileSync(filepath, 'utf-8'));

    if (!backupData.data || !backupData.data.emailLogs) {
      throw new Error('Formato de backup inválido');
    }

    this.logger.log(`Iniciando restauração do backup: ${path.basename(filepath)}`);

    // Restaurar logs de e-mail (apenas os que não existem)
    for (const emailLog of backupData.data.emailLogs) {
      const exists = await this.prisma.emailLog.findUnique({
        where: { id: emailLog.id }
      });

      if (!exists) {
        await this.prisma.emailLog.create({
          data: {
            ...emailLog,
            createdAt: new Date(emailLog.createdAt),
            updatedAt: new Date(emailLog.updatedAt),
            sentAt: emailLog.sentAt ? new Date(emailLog.sentAt) : null,
          }
        });
      }
    }

    this.logger.log('Restauração concluída com sucesso');
  }

  private async getQueueJobsForBackup() {
    try {
      const [waiting, active, completed, failed] = await Promise.all([
        this.emailQueue.getWaiting(),
        this.emailQueue.getActive(),
        this.emailQueue.getCompleted(),
        this.emailQueue.getFailed(),
      ]);

      return {
        waiting: waiting.map(job => ({ id: job.id, data: job.data })),
        active: active.map(job => ({ id: job.id, data: job.data })),
        completed: completed.slice(0, 100).map(job => ({ id: job.id, data: job.data })),
        failed: failed.slice(0, 50).map(job => ({ id: job.id, data: job.data, failedReason: job.failedReason })),
      };
    } catch (error) {
      this.logger.warn(`Erro ao obter jobs da fila para backup: ${error.message}`);
      return {};
    }
  }

  private async getBackupStatistics() {
    const [total, sent, failed, pending] = await Promise.all([
      this.prisma.emailLog.count(),
      this.prisma.emailLog.count({ where: { status: 'SENT' } }),
      this.prisma.emailLog.count({ where: { status: 'FAILED' } }),
      this.prisma.emailLog.count({ where: { status: { in: ['PENDING', 'RETRYING'] } } }),
    ]);

    return { total, sent, failed, pending };
  }

  private async cleanOldBackups() {
    try {
      const files = fs.readdirSync(this.backupPath);
      const backupFiles = files.filter(file => file.startsWith('email-service-'));

      // Manter apenas os últimos 10 backups
      if (backupFiles.length > 10) {
        const sortedFiles = backupFiles
          .map(file => ({
            name: file,
            path: path.join(this.backupPath, file),
            mtime: fs.statSync(path.join(this.backupPath, file)).mtime
          }))
          .sort((a, b) => b.mtime.getTime() - a.mtime.getTime());

        const filesToDelete = sortedFiles.slice(10);

        for (const file of filesToDelete) {
          fs.unlinkSync(file.path);
          this.logger.log(`Backup antigo removido: ${file.name}`);
        }
      }
    } catch (error) {
      this.logger.error(`Erro ao limpar backups antigos: ${error.message}`);
    }
  }

  private getFileSize(filepath: string): string {
    const stats = fs.statSync(filepath);
    const bytes = stats.size;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];

    if (bytes === 0) return '0 Bytes';

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  }

  // Métodos públicos para backup manual
  async createManualBackup(): Promise<string> {
    return await this.createBackup('manual');
  }

  async listBackups(): Promise<Array<{ name: string; size: string; date: Date }>> {
    const files = fs.readdirSync(this.backupPath);
    const backupFiles = files.filter(file => file.startsWith('email-service-'));

    return backupFiles.map(file => {
      const filepath = path.join(this.backupPath, file);
      const stats = fs.statSync(filepath);

      return {
        name: file,
        size: this.getFileSize(filepath),
        date: stats.mtime
      };
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
  }
}