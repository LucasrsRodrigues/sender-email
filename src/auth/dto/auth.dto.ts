import { IsString, IsEmail, IsEnum, IsOptional, IsBoolean, IsDateString, MinLength } from 'class-validator';
import { UserRole } from '../../prisma/generated/prisma';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;
}

export class LoginDto {
  @IsString()
  username: string; // Pode ser username ou email

  @IsString()
  password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

export class GenerateApiKeyDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsDateString()
  expiresAt?: Date;
}