import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as Handlebars from 'handlebars';
import { ConfigService } from '@nestjs/config';

export interface CreateTemplateDto {
  name: string;
  subject: string;
  content: string;
  description?: string;
  variables?: any;
  createdBy?: string;
}

export interface UpdateTemplateDto {
  subject?: string;
  content?: string;
  description?: string;
  variables?: any;
  updatedBy?: string;
  reason?: string;
}

@Injectable()
export class TemplateDbService {
  private readonly logger = new Logger(TemplateDbService.name);
  private compiledTemplates = new Map<string, HandlebarsTemplateDelegate>();

  constructor(
    private prisma: PrismaService,
    private configService: ConfigService
  ) {
    this.registerHelpers();
  }

  // Renderizar template do banco de dados
  async renderTemplate(templateName: string, variables: Record<string, any>): Promise<{ subject: string; content: string }> {
    const template = await this.getCompiledTemplate(templateName);

    if (!template) {
      throw new NotFoundException(`Template '${templateName}' não encontrado`);
    }

    const dbTemplate = await this.prisma.emailTemplate.findFirst({
      where: { name: templateName, isActive: true }
    });

    if (!dbTemplate) {
      throw new NotFoundException(`Template '${templateName}' não está ativo`);
    }

    // Compilar subject e content
    const subjectTemplate = Handlebars.compile(dbTemplate.subject);
    const contentTemplate = template;

    return {
      subject: subjectTemplate(variables),
      content: contentTemplate(variables),
    };
  }

  // Criar novo template
  async createTemplate(dto: CreateTemplateDto): Promise<string> {
    // Verificar se já existe
    const existing = await this.prisma.emailTemplate.findUnique({
      where: { name: dto.name }
    });

    if (existing) {
      throw new Error(`Template '${dto.name}' já existe`);
    }

    // Validar sintaxe Handlebars
    try {
      Handlebars.compile(dto.content);
      Handlebars.compile(dto.subject);
    } catch (error) {
      throw new Error(`Erro na sintaxe do template: ${error.message}`);
    }

    const template = await this.prisma.emailTemplate.create({
      data: {
        name: dto.name,
        subject: dto.subject,
        content: dto.content,
        description: dto.description,
        variables: dto.variables,
        createdBy: dto.createdBy,
        updatedBy: dto.createdBy,
      }
    });

    // Limpar cache
    this.compiledTemplates.delete(dto.name);

    this.logger.log(`Template '${dto.name}' criado com sucesso`);
    return template.id;
  }

  // Atualizar template existente
  async updateTemplate(name: string, dto: UpdateTemplateDto): Promise<void> {
    const existing = await this.prisma.emailTemplate.findUnique({
      where: { name }
    });

    if (!existing) {
      throw new NotFoundException(`Template '${name}' não encontrado`);
    }

    // Validar sintaxe se fornecida
    if (dto.content) {
      try {
        Handlebars.compile(dto.content);
      } catch (error) {
        throw new Error(`Erro na sintaxe do content: ${error.message}`);
      }
    }

    if (dto.subject) {
      try {
        Handlebars.compile(dto.subject);
      } catch (error) {
        throw new Error(`Erro na sintaxe do subject: ${error.message}`);
      }
    }

    // Salvar histórico
    await this.prisma.templateHistory.create({
      data: {
        templateId: existing.id,
        name: existing.name,
        subject: existing.subject,
        content: existing.content,
        version: existing.version,
        changedBy: dto.updatedBy,
        reason: dto.reason,
      }
    });

    // Atualizar template
    await this.prisma.emailTemplate.update({
      where: { name },
      data: {
        subject: dto.subject || existing.subject,
        content: dto.content || existing.content,
        description: dto.description || existing.description,
        variables: dto.variables || existing.variables,
        version: { increment: 1 },
        updatedBy: dto.updatedBy,
      }
    });

    // Limpar cache
    this.compiledTemplates.delete(name);

    this.logger.log(`Template '${name}' atualizado para versão ${existing.version + 1}`);
  }

  // Listar templates disponíveis
  async getAvailableTemplates(): Promise<Array<{
    name: string;
    subject: string;
    description?: string;
    version: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
  }>> {
    const templates = await this.prisma.emailTemplate.findMany({
      select: {
        name: true,
        subject: true,
        description: true,
        version: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        variables: true,
      },
      orderBy: { name: 'asc' }
    });

    return templates;
  }

  // Obter template específico
  async getTemplate(name: string): Promise<any> {
    const template = await this.prisma.emailTemplate.findUnique({
      where: { name }
    });

    if (!template) {
      throw new NotFoundException(`Template '${name}' não encontrado`);
    }

    return template;
  }

  // Histórico de um template
  async getTemplateHistory(name: string, limit: number = 10): Promise<any[]> {
    const template = await this.prisma.emailTemplate.findUnique({
      where: { name }
    });

    if (!template) {
      throw new NotFoundException(`Template '${name}' não encontrado`);
    }

    return await this.prisma.templateHistory.findMany({
      where: { templateId: template.id },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });
  }

  // Ativar/desativar template
  async toggleTemplate(name: string, isActive: boolean, updatedBy?: string): Promise<void> {
    await this.prisma.emailTemplate.update({
      where: { name },
      data: { isActive, updatedBy }
    });

    // Limpar cache se desativado
    if (!isActive) {
      this.compiledTemplates.delete(name);
    }

    this.logger.log(`Template '${name}' ${isActive ? 'ativado' : 'desativado'}`);
  }

  // Preview de template
  async previewTemplate(name: string, variables: Record<string, any>): Promise<{ subject: string; content: string }> {
    try {
      return await this.renderTemplate(name, variables);
    } catch (error) {
      throw new Error(`Erro no preview do template: ${error.message}`);
    }
  }

  // Duplicar template
  async duplicateTemplate(sourceName: string, newName: string, createdBy?: string): Promise<string> {
    const source = await this.getTemplate(sourceName);

    return await this.createTemplate({
      name: newName,
      subject: source.subject,
      content: source.content,
      description: `Cópia de '${sourceName}' - ${source.description || ''}`,
      variables: source.variables,
      createdBy,
    });
  }

  private async getCompiledTemplate(templateName: string): Promise<HandlebarsTemplateDelegate | null> {
    // Verificar cache primeiro
    if (this.compiledTemplates.has(templateName)) {
      return this.compiledTemplates.get(templateName);
    }

    // Buscar no banco
    const template = await this.prisma.emailTemplate.findFirst({
      where: { name: templateName, isActive: true }
    });

    if (!template) {
      return null;
    }

    try {
      const compiled = Handlebars.compile(template.content);
      this.compiledTemplates.set(templateName, compiled);
      return compiled;
    } catch (error) {
      this.logger.error(`Erro ao compilar template '${templateName}': ${error.message}`);
      throw new Error(`Erro ao compilar template: ${error.message}`);
    }
  }

  private registerHelpers() {
    // Helper para formatação de data
    Handlebars.registerHelper('formatDate', (date: Date, format: string) => {
      if (!date) {
        return '';
      }

      const options: Intl.DateTimeFormatOptions = {};

      switch (format) {
        case 'short':
          options.dateStyle = 'short';
          break;
        case 'long':
          options.dateStyle = 'long';
          break;
        case 'datetime':
          options.dateStyle = 'short';
          options.timeStyle = 'short';
          break;
        default:
          options.dateStyle = 'medium';
      }

      return new Intl.DateTimeFormat('pt-BR', options).format(new Date(date));
    });

    // Helper para formatação de moeda
    Handlebars.registerHelper('currency', (value: number) => {
      if (typeof value !== 'number') return value;

      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    });

    // Helper condicional
    Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    });

    // Helper para uppercase
    Handlebars.registerHelper('uppercase', (str: string) => {
      return str ? str.toUpperCase() : '';
    });

    // Helper para lowercase
    Handlebars.registerHelper('lowercase', (str: string) => {
      return str ? str.toLowerCase() : '';
    });

    Handlebars.registerHelper('appUrl', (path?: string) => {
      // Buscar URL base da aplicação das configurações ou variável de ambiente
      const baseUrl = process.env.APP_URL || process.env.BASE_URL || 'http://localhost:3000';

      // Remove trailing slash da base URL
      const cleanBaseUrl = baseUrl.replace(/\/$/, '');

      // Se não há path, retorna apenas a base URL
      if (!path) {
        return cleanBaseUrl;
      }

      // Remove leading slash do path se existir
      const cleanPath = path.replace(/^\//, '');

      // Retorna URL completa
      return `${cleanBaseUrl}/${cleanPath}`;
    });

    // Helper adicional para URLs dinâmicas com parâmetros
    Handlebars.registerHelper('buildUrl', (path: string, params?: Record<string, any>) => {
      const baseUrl = process.env.APP_URL || process.env.BASE_URL || 'http://localhost:3000';
      const cleanBaseUrl = baseUrl.replace(/\/$/, '');
      const cleanPath = path.replace(/^\//, '');

      let url = `${cleanBaseUrl}/${cleanPath}`;

      // Adicionar parâmetros de query se fornecidos
      if (params && Object.keys(params).length > 0) {
        const queryString = new URLSearchParams(params).toString();
        url += `?${queryString}`;
      }

      return url;
    });

    Handlebars.registerHelper('appUrl', (path?: string) => {
      // Tenta buscar da configuração do banco, com fallback para ENV
      const getBaseUrl = async () => {
        try {
          const configuredUrl = await this.configService.get<string>('APP_URL');
          return configuredUrl || process.env.APP_URL || process.env.BASE_URL || 'http://localhost:3000';
        } catch {
          return process.env.APP_URL || process.env.BASE_URL || 'http://localhost:3000';
        }
      };

      // Para uso síncrono, use ENV como fallback
      const baseUrl = process.env.APP_URL || process.env.BASE_URL || 'http://localhost:3000';
      const cleanBaseUrl = baseUrl.replace(/\/$/, '');

      if (!path) {
        return cleanBaseUrl;
      }

      const cleanPath = path.replace(/^\//, '');
      return `${cleanBaseUrl}/${cleanPath}`;
    });

    // Helper para URLs complexas
    Handlebars.registerHelper('resetUrl', (token: string) => {
      const baseUrl = process.env.APP_URL || 'http://localhost:3000';
      return `${baseUrl.replace(/\/$/, '')}/reset-password?token=${token}`;
    });

    Handlebars.registerHelper('activationUrl', (userId: string, token: string) => {
      const baseUrl = process.env.APP_URL || 'http://localhost:3000';
      return `${baseUrl.replace(/\/$/, '')}/activate?userId=${userId}&token=${token}`;
    });

    Handlebars.registerHelper('unsubscribeUrl', (email: string) => {
      const baseUrl = process.env.APP_URL || 'http://localhost:3000';
      return `${baseUrl.replace(/\/$/, '')}/unsubscribe?email=${encodeURIComponent(email)}`;
    });

  }

  // Limpar cache
  clearCache(): void {
    this.compiledTemplates.clear();
    this.logger.log('Cache de templates limpo');
  }
}