import { UserRole } from 'prisma/generated/prisma';

/**
 * Interface do usuário autenticado (dados do JWT payload)
 */
export interface AuthenticatedUser {
  userId: string;
  username: string;
  role: UserRole;
}

/**
 * Interface completa do usuário (do banco de dados)
 */
export interface UserEntity {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  lastLogin: Date | null;
}

/**
 * Dados públicos do usuário (sem informações sensíveis)
 */
export interface UserPublicData {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  isActive: boolean;
  lastLogin: Date | null;
}