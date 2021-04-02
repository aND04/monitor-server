export interface IChecklistForm {
  form: IForm;
  createdAt: Date;
  updatedAt: Date;
}

interface IForm {
  websiteDesignation: string;
  websiteAddress: string;
  entity: string;
  date: Date;
  lastGenIdImg: number;
  lastGenIdResources: number;
  checklist: IChecklist;
}

interface IChecklist {
  type: EChecklistType;
  items: Array<ICheckboxItem>;
}

export enum EChecklistType {
  FUNCTIONAL_ASPECTS,
  CONTENT,
  TRANSACTION,
}

interface ICheckboxItem {
  checkbox: ECheckboxAnswer;
  note: string;
  resources: Array<IResource>;
  image: Array<IImage>;
}

export enum ECheckboxAnswer {
  NA,
  S,
  N,
}

interface IResource {
  url: string;
  identifier: string;
}

interface IImage {
  photoName: string;
  base64: string;
  identifier: number;
}
