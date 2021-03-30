import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('AccessibilityEvaluationRequest')
export class AccessibilityEvaluationRequest {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  AccessibilityEvaluationRequestId: number;

  @Column({
    type: 'int',
  })
  UserId: number;

  @Column({
    type: 'varchar',
    length: 24,
    nullable: false,
    unique: true,
  }) // 605f5a316d61f71fe47c66f2
  ChecklistUuid: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  Processed: boolean;
}
