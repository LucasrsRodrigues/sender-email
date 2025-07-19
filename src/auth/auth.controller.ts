import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { CreateUserDto, LoginDto, UpdateUserDto, GenerateApiKeyDto } from './dto/auth.dto';
import { UserRole } from '../../prisma/generated/prisma';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  // Registrar usuário
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    const result = await this.authService.register(createUserDto);

    return {
      status: 'success',
      message: 'Usuário criado com sucesso',
      data: result,
    };
  }

  // Login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);

    return {
      status: 'success',
      message: 'Login realizado com sucesso',
      data: result,
    };
  }

  // Refresh token
  @Post('refresh')
  async refresh(@Body('refreshToken') refreshToken: string) {
    const result = await this.authService.refreshToken(refreshToken);

    return {
      status: 'success',
      message: 'Token renovado com sucesso',
      data: result,
    };
  }

  // Perfil do usuário
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.authService.getUserById(req.user.userId);

    return {
      status: 'success',
      data: { user },
    };
  }

  // Atualizar perfil
  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.authService.updateUser(req.user.userId, updateUserDto);

    return {
      status: 'success',
      message: 'Perfil atualizado com sucesso',
      data: { user },
    };
  }

  // // Gerar API Key
  // @UseGuards(JwtAuthGuard)
  // @Post('api-keys')
  // async generateApiKey(@Request() req, @Body() generateApiKeyDto: GenerateApiKeyDto) {
  //   const apiKey = await this.authService.generateApiKey(
  //     req.user.userId,
  //     generateApiKeyDto.name,
  //     generateApiKeyDto.expiresAt,
  //   );

  //   return {
  //     status: 'success',
  //     message: 'API Key gerada com sucesso. Guarde-a em local seguro!',
  //     data: { apiKey },
  //   };
  // }

  // // Listar API Keys
  // @UseGuards(JwtAuthGuard)
  // @Get('api-keys')
  // async getApiKeys(@Request() req) {
  //   const apiKeys = await this.authService.getUserApiKeys(req.user.userId);

  //   return {
  //     status: 'success',
  //     data: { apiKeys, count: apiKeys.length },
  //   };
  // }

  // // Revogar API Key
  // @UseGuards(JwtAuthGuard)
  // @Delete('api-keys/:id')
  // async revokeApiKey(@Request() req, @Param('id') apiKeyId: string) {
  //   await this.authService.revokeApiKey(req.user.userId, apiKeyId);

  //   return {
  //     status: 'success',
  //     message: 'API Key revogada com sucesso',
  //   };
  // }

  // Listar usuários (apenas admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Get('users')
  async getUsers(@Query('page') page = '1', @Query('limit') limit = '10') {
    // Implementar paginação de usuários
    return {
      status: 'success',
      message: 'Lista de usuários (implementar)',
    };
  }

  // Promover usuário a admin
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Put('users/:id/promote')
  async promoteUser(@Param('id') userId: string) {
    const user = await this.authService.updateUser(userId, { role: UserRole.ADMIN });

    return {
      status: 'success',
      message: 'Usuário promovido a administrador',
      data: { user },
    };
  }

  // Desativar usuário
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(UserRole.ADMIN)
  @Put('users/:id/deactivate')
  async deactivateUser(@Param('id') userId: string) {
    const user = await this.authService.updateUser(userId, { isActive: false });

    return {
      status: 'success',
      message: 'Usuário desativado',
      data: { user },
    };
  }
}