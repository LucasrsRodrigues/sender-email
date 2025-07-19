import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto, LoginDto, UpdateUserDto } from './dto/auth.dto';
import { UserRole } from '../../prisma/generated/prisma';
import { randomBytes } from 'node:crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  // Registrar novo usuário
  async register(createUserDto: CreateUserDto) {
    const { username, email, password, role = UserRole.USER } = createUserDto;

    // Verificar se usuário já existe
    const existingUser = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email }]
      },
    });

    if (existingUser) {
      throw new ConflictException('Usuário ou e-mail já existe');
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 12);

    // Criar usuário
    const user = await this.prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role,
        isActive: true,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    // Gerar tokens
    const tokens = await this.generateTokens(user);

    return {
      user,
      ...tokens,
    };
  }

  // Login
  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;

    // Buscar usuário
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email: username }],
        isActive: true,
      },
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    // Atualizar último login
    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    // Gerar tokens
    const tokens = await this.generateTokens(user);

    return {
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        isActive: user.isActive,
        lastLogin: new Date(),
      },
      ...tokens,
    };
  }

  // Refresh token
  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      });

      const user = await this.prisma.user.findUnique({
        where: { id: payload.sub },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          isActive: true,
        },
      });

      if (!user || !user.isActive) {
        throw new UnauthorizedException('Usuário inválido');
      }

      return this.generateTokens(user);
    } catch (error) {
      throw new UnauthorizedException('Refresh token inválido');
    }
  }

  // Gerar API Key
  async generateApiKey(userId: string, name: string, expiresAt?: Date) {
    const key = `sk_${randomBytes(32).toString('hex')}`;
    const hashedKey = await bcrypt.hash(key, 10);

    const apiKey = await this.prisma.apiKey.create({
      data: {
        userId,
        name,
        hashedKey,
        keyPreview: `sk_...${key.slice(-8)}`,
        expiresAt,
        isActive: true,
      },
    });

    return {
      id: apiKey.id,
      key, // Retorna a chave apenas uma vez
      name: apiKey.name,
      keyPreview: apiKey.keyPreview,
      expiresAt: apiKey.expiresAt,
      createdAt: apiKey.createdAt,
    };
  }

  // Validar API Key
  async validateApiKey(key: string) {
    if (!key.startsWith('sk_')) {
      return null;
    }

    const apiKeys = await this.prisma.apiKey.findMany({
      where: {
        isActive: true,
        OR: [
          { expiresAt: null },
          { expiresAt: { gt: new Date() } },
        ],
      },
      include: { user: true },
    });

    for (const apiKey of apiKeys) {
      if (await bcrypt.compare(key, apiKey.hashedKey)) {
        // Atualizar último uso
        await this.prisma.apiKey.update({
          where: { id: apiKey.id },
          data: {
            lastUsed: new Date(),
            usageCount: { increment: 1 },
          },
        });

        return apiKey.user;
      }
    }

    return null;
  }

  // Validar usuário (para LocalStrategy)
  async validateUser(username: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ username }, { email: username }],
        isActive: true,
      },
    });

    if (user && await bcrypt.compare(password, user.password)) {
      const { password: _, ...result } = user;
      return result;
    }
    return null;
  }

  // Obter usuário pelo ID
  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        lastLogin: true,
      },
    });
  }

  // Atualizar usuário
  async updateUser(id: string, updateUserDto: UpdateUserDto) {
    const data: any = { ...updateUserDto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 12);
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        updatedAt: true,
      },
    });
  }

  // Listar API Keys do usuário
  async getUserApiKeys(userId: string) {
    return this.prisma.apiKey.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        keyPreview: true,
        isActive: true,
        expiresAt: true,
        lastUsed: true,
        usageCount: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  // Revogar API Key
  async revokeApiKey(userId: string, apiKeyId: string) {
    await this.prisma.apiKey.updateMany({
      where: {
        id: apiKeyId,
        userId,
      },
      data: { isActive: false },
    });
  }


  /**
   * Buscar todas as API Keys do sistema (apenas admin)
   */
  async getAllApiKeys(filters: {
    skip?: number;
    take?: number;
    userId?: string;
    search?: string;
    isActive?: boolean;
  }) {
    const { skip = 0, take = 10, userId, search, isActive } = filters;

    const where: any = {};

    // Filtrar por usuário específico
    if (userId) {
      where.userId = userId;
    }

    // Filtrar por status ativo
    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    // Busca por nome da API key
    if (search) {
      where.name = {
        contains: search,
        mode: 'insensitive',
      };
    }

    // Filtrar apenas chaves não expiradas (opcional)
    where.OR = [
      { expiresAt: null }, // Sem data de expiração
      { expiresAt: { gt: new Date() } }, // Não expiradas
    ];

    const apiKeys = await this.prisma.apiKey.findMany({
      where,
      skip,
      take,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            role: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Remover informações sensíveis
    return apiKeys.map(key => ({
      ...key,
      keyHash: undefined, // Não retornar o hash
      key: `${key.hashedKey.substring(0, 8)}...`, // Mostrar apenas início
    }));
  }

  /**
   * Contar API Keys com filtros
   */
  async countApiKeys(filters: {
    userId?: string;
    search?: string;
    isActive?: boolean;
  }) {
    const { userId, search, isActive } = filters;

    const where: any = {};

    if (userId) {
      where.userId = userId;
    }

    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    if (search) {
      where.name = {
        contains: search,
        mode: 'insensitive',
      };
    }

    where.OR = [
      { expiresAt: null },
      { expiresAt: { gt: new Date() } },
    ];

    return await this.prisma.apiKey.count({ where });
  }

  /**
   * Buscar API Key específica por ID (admin)
   */
  async getApiKeyById(id: string) {
    const apiKey = await this.prisma.apiKey.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            role: true,
          },
        },
      },
    });

    if (!apiKey) {
      throw new Error('API Key não encontrada');
    }

    // Não retornar o hash completo
    return {
      ...apiKey,
      keyHash: undefined,
      key: `${apiKey.hashedKey.substring(0, 8)}...`,
    };
  }

  /**
   * Atualizar API Key (admin)
   */
  async updateApiKey(id: string, data: {
    name?: string;
    isActive?: boolean;
    expiresAt?: string;
  }) {
    const apiKey = await this.prisma.apiKey.findUnique({
      where: { id },
    });

    if (!apiKey) {
      throw new Error('API Key não encontrada');
    }

    const updateData: any = {};

    if (data.name) {
      updateData.name = data.name;
    }

    if (data.isActive !== undefined) {
      updateData.isActive = data.isActive;
    }

    if (data.expiresAt) {
      updateData.expiresAt = new Date(data.expiresAt);
    }

    const updatedKey = await this.prisma.apiKey.update({
      where: { id },
      data: updateData,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return {
      ...updatedKey,
      keyHash: undefined,
      key: `${updatedKey.hashedKey.substring(0, 8)}...`,
    };
  }

  /**
   * Revogar/Deletar API Key por ID (admin)
   */
  async revokeApiKeyById(id: string) {
    const apiKey = await this.prisma.apiKey.findUnique({
      where: { id },
    });

    if (!apiKey) {
      throw new Error('API Key não encontrada');
    }

    await this.prisma.apiKey.delete({
      where: { id },
    });

    return { message: 'API Key deletada com sucesso' };
  }

  /**
   * Regenerar API Key (admin)
   */
  async regenerateApiKey(id: string) {
    const existingKey = await this.prisma.apiKey.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!existingKey) {
      throw new Error('API Key não encontrada');
    }

    // Gerar nova chave
    const newKey = `sk_${randomBytes(32).toString('hex')}`;
    const keyHash = await bcrypt.hash(newKey, 10);

    // Atualizar no banco
    const updatedApiKey = await this.prisma.apiKey.update({
      where: { id },
      data: {
        hashedKey: keyHash,
        lastUsed: null,
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
            role: true,
          },
        },
      },
    });

    return {
      apiKey: {
        ...updatedApiKey,
        keyHash: undefined,
        key: `${keyHash.substring(0, 8)}...`,
      },
      fullKey: newKey,
    };
  }

  /**
   * Estatísticas das API Keys
   */
  async getApiKeyStats(period: string = 'week') {
    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'day':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    }

    const [totalKeys, activeKeys, expiredKeys] = await Promise.all([
      this.prisma.apiKey.count(),
      this.prisma.apiKey.count({
        where: {
          isActive: true,
          OR: [
            { expiresAt: null },
            { expiresAt: { gt: now } },
          ],
        },
      }),
      this.prisma.apiKey.count({
        where: {
          expiresAt: { lte: now },
        },
      }),
    ]);

    const keyUsageStats = await this.prisma.apiKey.findMany({
      where: {
        lastUsed: {
          gte: startDate,
        },
      },
      select: {
        id: true,
        name: true,
        lastUsed: true,
      },
      orderBy: {
        lastUsed: 'desc',
      },
      take: 10,
    });

    // Se você tiver uma tabela de logs de requisições, pode fazer algo assim:
    // const totalRequests = await this.prisma.apiRequestLog.count({
    //   where: {
    //     createdAt: { gte: startDate },
    //   },
    // });

    return {
      period,
      startDate: startDate.toISOString(),
      endDate: now.toISOString(),
      totalKeys,
      activeKeys,
      expiredKeys,
      totalRequests: 0, // TODO: Implementar quando tiver tabela de logs
      keyUsageStats: keyUsageStats.map(key => ({
        keyId: key.id,
        name: key.name,
        requests: 0, // TODO: Implementar contagem real
        lastUsed: key.lastUsed?.toISOString(),
      })),
      dailyUsage: [], // TODO: Implementar quando tiver dados históricos
    };
  }

  /**
   * Uso de uma API Key específica
   */
  async getApiKeyUsage(id: string, period: string = 'week') {
    const apiKey = await this.prisma.apiKey.findUnique({
      where: { id },
    });

    if (!apiKey) {
      throw new Error('API Key não encontrada');
    }

    const now = new Date();
    let startDate: Date;

    switch (period) {
      case 'day':
        startDate = new Date(now.getTime() - 24 * 60 * 60 * 1000);
        break;
      case 'week':
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        break;
      default:
        startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    }

    // Se você tiver uma tabela de logs de API requests:
    // const requests = await this.prisma.apiRequestLog.findMany({
    //   where: {
    //     apiKeyId: id,
    //     createdAt: { gte: startDate },
    //   },
    // });

    // Por enquanto, retornar estrutura básica
    return {
      keyId: id,
      period,
      totalRequests: 0, // TODO: Implementar contagem real
      dailyUsage: [], // TODO: Implementar dados diários
      topEndpoints: [], // TODO: Implementar endpoints mais usados
    };
  }

  /**
   * Criar API Key para outro usuário (admin)
   */
  async generateApiKeyForUser(
    targetUserId: string,
    name: string,
    expiresAt?: string,
  ) {
    // Verificar se o usuário existe
    const user = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const parsedExpiresAt = new Date(expiresAt)

    // Usar a função existente, mas com o userId específico
    return await this.generateApiKey(targetUserId, name, parsedExpiresAt);
  }

  // Gerar tokens JWT
  private async generateTokens(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role
    };

    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET || 'refresh-secret',
      expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || '30d',
    });

    return {
      accessToken,
      refreshToken,
      expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    };
  }
}