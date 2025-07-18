import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
import { EmailProcessor } from './email.processor';
import { TemplateService } from './template.service';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'email',
      defaultJobOptions: {
        removeOnComplete: 100,
        removeOnFail: 50,
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailProcessor, TemplateService],
})
export class EmailModule { }