import { HttpService, Injectable } from '@nestjs/common';
import { IChecklistForm } from './dto/checklist.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { AccessibilityEvaluationRequest } from './accessibility-evaluation-request.entity';
import {
  EAccEvalRequestStatus,
  IAccEvalSyncAnswer,
  IChecklistSync,
} from './dto/checklist-sync.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AccessibilityEvaluationRequestService {
  private readonly serviceEndpoint: string;
  constructor(
    private config: ConfigService,
    private http: HttpService,
    @InjectRepository(AccessibilityEvaluationRequest)
    private readonly accessibilityEvaluationRequestRepository: Repository<AccessibilityEvaluationRequest>
  ) {
    this.serviceEndpoint = this.config.get<string>('CHECKLIST_SERVICE_URL');
  }
  requestChecklistsFromService(): Observable<AxiosResponse<IChecklistForm[]>> {
    return this.http.get<IChecklistForm[]>(`${this.serviceEndpoint}/`);
  }

  getChecklistFromServiceById(
    checklistId: string
  ): Observable<AxiosResponse<IChecklistForm>> {
    return this.http.get<IChecklistForm>(
      `${this.serviceEndpoint}/${checklistId}`
    );
  }

  async sync(req: IChecklistSync): Promise<IAccEvalSyncAnswer> {
    const answer = <IAccEvalSyncAnswer>{ sync: true };
    const aer = await this.accessibilityEvaluationRequestRepository.findOne({
      where: { ChecklistUuid: req.checklistUuid },
    });
    if (!!aer) {
      if (aer.Processed) {
        answer.status = EAccEvalRequestStatus.ALREADY_SYNC;
      }
    } else {
      const accessibilityEvaluationRequest = new AccessibilityEvaluationRequest();
      accessibilityEvaluationRequest.UserId = req.userId;
      accessibilityEvaluationRequest.ChecklistUuid = req.checklistUuid;
      accessibilityEvaluationRequest.Processed = true;
      await this.accessibilityEvaluationRequestRepository.save(
        accessibilityEvaluationRequest
      );
      answer.status = EAccEvalRequestStatus.SUCCESS;
    }
    return answer;
  }
}
