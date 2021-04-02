import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UsabilityEvaluationRequest')
export class UsabilityEvaluationRequest {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  UsabilityEvaluationRequestId: number;

  @Column({
    type: 'int',
  })
  UserId: number;

  @Column({
    type: 'varchar',
    length: 24,
    nullable: false,
    unique: true,
  })
  ChecklistUuid: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  Processed: boolean;

  @Column({
    type: 'int',
  })
  FunctionalAspectsScore: number;

  @Column({
    type: 'int',
  })
  ContentScore: number;

  @Column({
    type: 'int',
  })
  TransactionScore: number;

  @Column({
    type: 'datetime',
    nullable: false,
  })
  CreatedAt: Date;
}
