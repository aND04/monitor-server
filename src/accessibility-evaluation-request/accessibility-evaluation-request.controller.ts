import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AccessibilityEvaluationRequestService } from './accessibility-evaluation-request.service';
import { AuthGuard } from '@nestjs/passport';
import { IChecklistForm } from './dto/checklist.interface';
import { map } from 'rxjs/operators';
import {
  IAccEvalSyncAnswer,
  IChecklistSync,
} from './dto/checklist-sync.interface';

@Controller('accessibility-evaluation-request')
export class AccessibilityEvaluationRequestController {
  constructor(
    private readonly accessibilityEvaluationRequestService: AccessibilityEvaluationRequestService
  ) {}

  // @UseGuards(AuthGuard('jwt-admin'))
  @Get('')
  async requestChecklistsFromService(): Promise<Array<IChecklistForm>> {
    return this.accessibilityEvaluationRequestService
      .requestChecklistsFromService()
      .pipe(map((ans) => ans.data))
      .toPromise();
  }

  @Get('/:id')
  async getChecklistById(
    @Param('id') checklistId: string
  ): Promise<IChecklistForm> {
    return this.accessibilityEvaluationRequestService
      .getChecklistFromServiceById(checklistId)
      .pipe(map((ans) => ans.data))
      .toPromise();
  }

  @Post('/sync')
  async syncWithChecklistManager(
    @Body() req: IChecklistSync
  ): Promise<IAccEvalSyncAnswer> {
    return await this.accessibilityEvaluationRequestService.sync(req);
  }
}
