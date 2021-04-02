import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsabilityEvaluationRequest } from './usability-evaluation-request.entity';
import { UsabilityEvaluationRequestService } from './usability-evaluation-request.service';
import { UsabilityEvaluationRequestController } from './usability-evaluation-request.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([UsabilityEvaluationRequest]),
  ],
  providers: [UsabilityEvaluationRequestService],
  controllers: [UsabilityEvaluationRequestController],
})
export class UsabilityEvaluationRequestModule {}
