import { Controller, Get, UseGuards } from '@nestjs/common';
import { AccessibilityEvaluationRequestService } from './accessibility-evaluation-request.service';
import { AuthGuard } from '@nestjs/passport';
import { IChecklistForm } from './dto/checklist.interface';
import { map } from 'rxjs/operators';

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
}
