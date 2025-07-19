import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  providers: [MetricsService],
  controllers: [MetricsController],
  exports: [MetricsService],
})
export class MetricsModule { }