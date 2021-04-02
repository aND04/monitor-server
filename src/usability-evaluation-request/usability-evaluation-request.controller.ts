import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UsabilityEvaluationRequestService } from './usability-evaluation-request.service';
import { AuthGuard } from '@nestjs/passport';
import { IChecklistForm } from './dto/checklist.interface';
import { map } from 'rxjs/operators';
import {
  IAccEvalSyncAnswer,
  IChecklistSync,
} from './dto/checklist-sync.interface';
import { UsabilityEvaluationRequest } from './usability-evaluation-request.entity';

@Controller('usability-evaluation-request')
export class UsabilityEvaluationRequestController {
  constructor(
    private readonly usabilityEvaluationRequestService: UsabilityEvaluationRequestService
  ) {}

  // @UseGuards(AuthGuard('jwt-admin'))
  @Get('/checklist-manager')
  async requestChecklistsFromService(): Promise<Array<IChecklistForm>> {
    return this.usabilityEvaluationRequestService
      .requestChecklistsFromService()
      .pipe(map((ans) => ans.data))
      .toPromise();
  }

  @Get()
  async findAll(): Promise<UsabilityEvaluationRequest[]> {
    return this.usabilityEvaluationRequestService.findAll();
  }

  @Get('/:id')
  async getChecklistById(
    @Param('id') checklistId: string
  ): Promise<IChecklistForm> {
    return this.usabilityEvaluationRequestService
      .getChecklistFromServiceById(checklistId)
      .pipe(map((ans) => ans.data))
      .toPromise();
  }

  @Post('/sync')
  async syncWithChecklistManager(
    @Body() req: IChecklistSync
  ): Promise<IAccEvalSyncAnswer> {
    return await this.usabilityEvaluationRequestService.sync(req);
  }
}
