import { HttpService, Injectable } from '@nestjs/common';
import { IChecklistForm } from './dto/checklist.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';
import { UsabilityEvaluationRequest } from './usability-evaluation-request.entity';
import {
  EAccEvalRequestStatus,
  IAccEvalSyncAnswer,
  IChecklistSync,
} from './dto/checklist-sync.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsabilityEvaluationRequestService {
  private readonly serviceEndpoint: string;
  constructor(
    private config: ConfigService,
    private http: HttpService,
    @InjectRepository(UsabilityEvaluationRequest)
    private readonly usabilityEvaluationRequestRepository: Repository<UsabilityEvaluationRequest>
  ) {
    this.serviceEndpoint = this.config.get<string>('CHECKLIST_SERVICE_URL');
  }

  requestChecklistsFromService(): Observable<AxiosResponse<IChecklistForm[]>> {
    return this.http.get<IChecklistForm[]>(`${this.serviceEndpoint}/`);
  }

  async findAll(): Promise<UsabilityEvaluationRequest[]> {
    return this.usabilityEvaluationRequestRepository.find();
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
    const aer = await this.usabilityEvaluationRequestRepository.findOne({
      where: { ChecklistUuid: req.checklistUuid },
    });
    if (!aer) {
      const usabilityEvaluationRequest = new UsabilityEvaluationRequest();
      usabilityEvaluationRequest.UserId = req.userId;
      usabilityEvaluationRequest.ChecklistUuid = req.checklistUuid;
      usabilityEvaluationRequest.Processed = false;
      usabilityEvaluationRequest.CreatedAt = req.createdAt;
      await this.usabilityEvaluationRequestRepository.save(
        usabilityEvaluationRequest
      );
      answer.status = EAccEvalRequestStatus.SUCCESS;
    }
    return answer;
  }
}
