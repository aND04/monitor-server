export interface IChecklistSync {
  userId: number;
  checklistUuid: string;
  processed: boolean;
}

export enum EAccEvalRequestStatus {
  SUCCESS,
  ALREADY_SYNC,
  CHECKLIST_DOES_NOT_EXIST,
  OTHER_ERROR,
}

export interface IAccEvalSyncAnswer {
  sync: boolean;
  status: EAccEvalRequestStatus;
}
