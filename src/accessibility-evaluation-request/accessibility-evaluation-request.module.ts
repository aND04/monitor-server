import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessibilityEvaluationRequest } from './accessibility-evaluation-request.entity';
import { AccessibilityEvaluationRequestService } from './accessibility-evaluation-request.service';
import { AccessibilityEvaluationRequestController } from './accessibility-evaluation-request.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([AccessibilityEvaluationRequest]),
  ],
  providers: [AccessibilityEvaluationRequestService],
  controllers: [AccessibilityEvaluationRequestController],
})
export class AccessibilityEvaluationRequestModule {}
