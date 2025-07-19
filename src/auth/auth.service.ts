import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { randomBytes } from 'crypto';
import { CreateUserDto, LoginDto, UpdateUserDto } from './dto/auth.dto';
import { UserRole } from '@prisma/client';

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