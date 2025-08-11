import { Injectable, NotFoundException } from '@nestjs/common';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';
import * as Handlebars from 'handlebars';

@Injectable()
export class TemplateService {
  private templatesPath = join(process.cwd(), 'src', 'email', 'templates');
  private compiledTemplates = new Map<string, HandlebarsTemplateDelegate>();

  constructor() {
    // Registrar helpers do Handlebars
    this.registerHelpers();
  }

  async renderTemplate(templateName: string, variables: Record<string, any>): Promise<string> {
    const template = this.getCompiledTemplate(templateName);
    return template(variables);
  }

  private getCompiledTemplate(templateName: string): HandlebarsTemplateDelegate {
    // Verificar se o template já está compilado em cache
    if (this.compiledTemplates.has(templateName)) {
      return this.compiledTemplates.get(templateName);
    }

    // Tentar carregar template com diferentes extensões
    const extensions = ['.hbs', '.html'];
    let templatePath: string;
    let foundExtension: string;

    for (const ext of extensions) {
      const testPath = join(this.templatesPath, `${templateName}${ext}`);
      if (existsSync(testPath)) {
        templatePath = testPath;
        foundExtension = ext;
        break;
      }
    }

    if (!templatePath) {
      throw new NotFoundException(
        `Template '${templateName}' não encontrado. ` +
        `Suporte para extensões: ${extensions.join(', ')}`
      );
    }

    try {
      const templateContent = readFileSync(templatePath, 'utf-8');
      const compiled = Handlebars.compile(templateContent);

      // Armazenar em cache
      this.compiledTemplates.set(templateName, compiled);

      console.log(`✅ Template '${templateName}${foundExtension}' compilado com sucesso`);

      return compiled;
    } catch (error) {
      throw new Error(`Erro ao compilar template '${templateName}': ${error.message}`);
    }
  }

  private registerHelpers() {
    // Helper para formatação de data
    Handlebars.registerHelper('formatDate', (date: Date, format: string) => {
      if (!date) return '';

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
  }

  // Método para limpar cache (útil em desenvolvimento)
  clearCache() {
    this.compiledTemplates.clear();
  }

  // Método para listar templates disponíveis
  getAvailableTemplates(): string[] {
    const fs = require('fs');

    if (!existsSync(this.templatesPath)) {
      return [];
    }

    const supportedExtensions = ['.hbs', '.html'];

    return fs
      .readdirSync(this.templatesPath)
      .filter(file => supportedExtensions.some(ext => file.endsWith(ext)))
      .map(file => {
        // Remove a extensão do nome do arquivo
        for (const ext of supportedExtensions) {
          if (file.endsWith(ext)) {
            return file.replace(ext, '');
          }
        }
        return file;
      });
  }
}