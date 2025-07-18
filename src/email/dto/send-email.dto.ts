import { IsEmail, IsString, IsOptional, IsObject, IsEnum } from 'class-validator';

export enum EmailPriority {
  LOW = 'low',
  NORMAL = 'normal',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export class SendEmailDto {
  @IsEmail()
  to: string;

  @IsString()
  subject: string;

  @IsString()
  template: string;

  @IsOptional()
  @IsObject()
  variables?: Record<string, any>;

  @IsOptional()
  @IsEnum(EmailPriority)
  priority?: EmailPriority = EmailPriority.NORMAL;

  @IsOptional()
  @IsString()
  from?: string;
}

export interface EmailJobData {
  to: string;
  subject: string;
  template: string;
  variables?: Record<string, any>;
  from?: string;
  logId: string;
}