import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TemplateController } from './template.controller';
import { QueueManagementController } from './queue-management.controller';
import { AdminController } from './admin.controller';
import { TemplateDbService } from '../email/template-db.service';
import { BullMQHealthService } from '../health/bullmq-health.service';
import { AdminApiKeysController } from './admin-api-key.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
    AuthModule
  ],
  controllers: [TemplateController, QueueManagementController, AdminController, AdminApiKeysController],
  providers: [TemplateDbService, BullMQHealthService],
  exports: [TemplateDbService, BullMQHealthService],
})
export class AdminModule { }