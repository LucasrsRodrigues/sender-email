import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UserRole } from 'prisma/generated/prisma';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

interface CreateApiKeyDto {
  name: string;
  expiresAt?: string;
  userId?: string; // Para admin criar API key para outro usuário
}

interface UpdateApiKeyDto {
  name?: string;
  isActive?: boolean;
  expiresAt?: string;
}

@Controller('admin/api-keys')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles(UserRole.ADMIN, UserRole.SUPER_ADMIN)
export class AdminApiKeysController {
  constructor(private authService: AuthService) { }

  // Listar todas as API Keys (admin)
  @Get()
  async getAllApiKeys(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
    @Query('userId') userId?: string,
    @Query('search') search?: string,
  ) {
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    // Implementar lógica para buscar todas as API Keys
    // Se userId for fornecido, filtrar por usuário específico
    const apiKeys = await this.authService.getAllApiKeys({
      skip,
      take: limitNum,
      userId,
      search,
    });

    const total = await this.authService.countApiKeys({ userId, search });

    return {
      status: 'success',
      data: {
        apiKeys,
        pagination: {
          page: pageNum,
          limit: limitNum,
          total,
          totalPages: Math.ceil(total / limitNum),
        },
      },
    };
  }

  // Criar nova API Key (admin pode criar para qualquer usuário)
  @Post()
  async createApiKey(
    @Body() createApiKeyDto: CreateApiKeyDto,
    @CurrentUser() user: any
  ) {
    const { name, expiresAt, userId } = createApiKeyDto;

    let parsedExpiresAt: Date | undefined;

    if (expiresAt) {
      const maybeDate = new Date(expiresAt);
      if (!isNaN(maybeDate.getTime())) {
        parsedExpiresAt = maybeDate;
      }
    }

    const apiKey = await this.authService.generateApiKey(
      userId ?? user.userId,
      name,
      parsedExpiresAt, // Será undefined se for inválido
    );

    return {
      status: 'success',
      message: 'API Key criada com sucesso',
      data: { apiKey },
    };
  }


  // Estatísticas das API Keys
  @Get('stats')
  async getApiKeyStats(@Query('period') period = 'week') {
    const stats = await this.authService.getApiKeyStats(period);

    return {
      status: 'success',
      data: stats,
    };
  }

  // Obter API Key específica
  @Get(':id')
  async getApiKey(@Param('id') id: string) {
    const apiKey = await this.authService.getApiKeyById(id);

    return {
      status: 'success',
      data: { apiKey },
    };
  }


  // Atualizar API Key
  @Put(':id')
  async updateApiKey(
    @Param('id') id: string,
    @Body() updateApiKeyDto: UpdateApiKeyDto,
  ) {
    const apiKey = await this.authService.updateApiKey(id, updateApiKeyDto);

    return {
      status: 'success',
      message: 'API Key atualizada com sucesso',
      data: { apiKey },
    };
  }

  // Deletar API Key
  @Delete(':id')
  async deleteApiKey(@Param('id') id: string) {
    await this.authService.revokeApiKeyById(id);

    return {
      status: 'success',
      message: 'API Key deletada com sucesso',
    };
  }

  // Regenerar API Key
  @Post(':id/regenerate')
  async regenerateApiKey(@Param('id') id: string) {
    const apiKey = await this.authService.regenerateApiKey(id);

    return {
      status: 'success',
      message: 'API Key regenerada com sucesso',
      data: { apiKey },
    };
  }



  // Uso de uma API Key específica
  @Get(':id/usage')
  async getApiKeyUsage(
    @Param('id') id: string,
    @Query('period') period = 'week',
  ) {
    const usage = await this.authService.getApiKeyUsage(id, period);

    return {
      status: 'success',
      data: usage,
    };
  }
}