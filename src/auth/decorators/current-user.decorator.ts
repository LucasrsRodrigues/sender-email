import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AuthenticatedUser } from '../types/user.types';
import { UserRole } from '../../prisma/generated/prisma';

export const CurrentUser = createParamDecorator(
  (data: keyof AuthenticatedUser | undefined, ctx: ExecutionContext): AuthenticatedUser | string | UserRole => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as AuthenticatedUser;

    if (!user) {
      throw new Error('Usuário não encontrado na requisição. Certifique-se de usar JwtAuthGuard.');
    }

    return data ? user[data] : user;
  },
);