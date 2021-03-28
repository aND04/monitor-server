export class Evaluation {
  id: number;
  title: string;
  score: number;
  errors: any;
  tot: any;
  A: number;
  AA: number;
  AAA: number;
  evaluationDate: Date;

  constructor(
    id: number,
    title: string,
    score: number,
    errors: any,
    tot: any,
    A: number,
    AA: number,
    AAA: number,
    evaluationDate: Date
  ) {
    this.id = id;
    this.title = title;
    this.score = parseFloat(score.toFixed(1));
    this.errors = JSON.parse(Buffer.from(errors, "base64").toString());
    this.tot = JSON.parse(Buffer.from(tot, "base64").toString());
    this.A = A;
    this.AA = AA;
    this.AAA = AAA;
    this.evaluationDate = evaluationDate;
  }
}
