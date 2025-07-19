import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TemplateController } from './template.controller';
import { QueueManagementController } from './queue-management.controller';
import { AdminController } from './admin.controller';
import { TemplateDbService } from '../email/template-db.service';
import { BullMQHealthService } from '../health/bullmq-health.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  controllers: [TemplateController, QueueManagementController, AdminController],
  providers: [TemplateDbService, BullMQHealthService],
  exports: [TemplateDbService, BullMQHealthService],
})
export class AdminModule { }