import { HttpService, Injectable } from '@nestjs/common';
import { IChecklistForm } from './dto/checklist.interface';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AccessibilityEvaluationRequestService {
  private readonly serviceEndpoint: string;
  constructor(private config: ConfigService, private http: HttpService) {
    this.serviceEndpoint = this.config.get<string>('CHECKLIST_SERVICE_URL');
  }
  requestChecklistsFromService(): Observable<AxiosResponse<IChecklistForm[]>> {
    return this.http.get<IChecklistForm[]>(`${this.serviceEndpoint}/`);
  }
}
