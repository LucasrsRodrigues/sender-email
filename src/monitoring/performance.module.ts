import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { ScheduleModule } from '@nestjs/schedule';
import { PerformanceService } from './performance.service';
import { PerformanceController } from './performance.controller';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.registerQueue({
      name: 'email',
    }),
  ],
  providers: [PerformanceService],
  controllers: [PerformanceController],
  exports: [PerformanceService],
})
export class MonitoringModule { }