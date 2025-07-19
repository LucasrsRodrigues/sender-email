import { Controller, Get, Post, Put, Delete, Body, Param, Query, UseGuards } from '@nestjs/common';
import { TemplateDbService, CreateTemplateDto, UpdateTemplateDto } from '../email/template-db.service';
import { WhitelistDbGuard } from 'src/common/guards/whitelist-db-.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from '../../prisma/generated/prisma';

@Controller('admin/templates')
@UseGuards(WhitelistDbGuard, JwtAuthGuard)
@Roles(UserRole.ADMIN)
export class TemplateController {
  constructor(private readonly templateService: TemplateDbService) { }

  // Listar todos os templates
  @Get()
  async getTemplates() {
    const templates = await this.templateService.getAvailableTemplates();

    return {
      status: 'success',
      data: { templates, count: templates.length },
    };
  }

  // Obter template específico
  @Get(':name')
  async getTemplate(@Param('name') name: string) {
    const template = await this.templateService.getTemplate(name);

    return {
      status: 'success',
      data: { template },
    };
  }

  // Criar novo template
  @Post()
  async createTemplate(@Body() dto: CreateTemplateDto) {
    const id = await this.templateService.createTemplate(dto);

    return {
      status: 'success',
      message: `Template '${dto.name}' criado com sucesso`,
      data: { id },
    };
  }

  // Atualizar template
  @Put(':name')
  async updateTemplate(@Param('name') name: string, @Body() dto: UpdateTemplateDto) {
    await this.templateService.updateTemplate(name, dto);

    return {
      status: 'success',
      message: `Template '${name}' atualizado com sucesso`,
    };
  }

  // Preview de template
  @Post(':name/preview')
  async previewTemplate(
    @Param('name') name: string,
    @Body() variables: Record<string, any>
  ) {
    const preview = await this.templateService.previewTemplate(name, variables);

    return {
      status: 'success',
      data: { preview },
    };
  }

  // Histórico do template
  @Get(':name/history')
  async getTemplateHistory(
    @Param('name') name: string,
    @Query('limit') limit?: string
  ) {
    const history = await this.templateService.getTemplateHistory(
      name,
      limit ? parseInt(limit) : 10
    );

    return {
      status: 'success',
      data: { name, history, count: history.length },
    };
  }

  // Ativar/desativar template
  @Put(':name/toggle')
  async toggleTemplate(
    @Param('name') name: string,
    @Body() body: { isActive: boolean; updatedBy?: string }
  ) {
    await this.templateService.toggleTemplate(name, body.isActive, body.updatedBy);

    return {
      status: 'success',
      message: `Template '${name}' ${body.isActive ? 'ativado' : 'desativado'}`,
    };
  }

  // Duplicar template
  @Post(':name/duplicate')
  async duplicateTemplate(
    @Param('name') name: string,
    @Body() body: { newName: string; createdBy?: string }
  ) {
    const id = await this.templateService.duplicateTemplate(name, body.newName, body.createdBy);

    return {
      status: 'success',
      message: `Template '${name}' duplicado como '${body.newName}'`,
      data: { id },
    };
  }

  // Limpar cache
  @Post('clear-cache')
  async clearCache() {
    this.templateService.clearCache();

    return {
      status: 'success',
      message: 'Cache de templates limpo',
    };
  }

  // Importar template de arquivo
  // @Post('import')
  // async importTemplate(@Body() body: {
  //   name: string;
  //   filePath: string;
  //   createdBy?: string;
  // }) {
  //   // Implementar importação de template de arquivo .hbs/.html
  //   return {
  //     status: 'success',
  //     message: `Template '${body.name}' importado com sucesso`,
  //   };
  // }

  // Exportar template
  @Get(':name/export')
  async exportTemplate(@Param('name') name: string) {
    const template = await this.templateService.getTemplate(name);

    // Retornar como arquivo para download
    return {
      status: 'success',
      data: {
        filename: `${name}.hbs`,
        content: template.content,
        subject: template.subject,
        metadata: {
          description: template.description,
          version: template.version,
          variables: template.variables,
        },
      },
    };
  }

  // Importar template de arquivo
  @Post('import')
  async importTemplate(@Body() body: {
    name: string;
    subject: string;
    content: string;
    description?: string;
    createdBy?: string;
  }) {
    const id = await this.templateService.createTemplate(body);

    return {
      status: 'success',
      message: `Template '${body.name}' importado com sucesso`,
      data: { id },
    };
  }

  // Validar template
  @Post(':name/validate')
  async validateTemplate(
    @Param('name') name: string,
    @Body() variables: Record<string, any>
  ) {
    try {
      const preview = await this.templateService.previewTemplate(name, variables);

      return {
        status: 'success',
        message: 'Template válido',
        data: { preview },
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Template inválido',
        error: error.message,
      };
    }
  }
}