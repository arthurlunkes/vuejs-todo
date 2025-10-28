import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column({ length: 100, nullable: false })
  title: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column('boolean', { default: false, nullable: false })
  done: boolean;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
  createdAt: Date;

  @Column('timestamp', {
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP', nullable: false })
  deletedAt: Date;
}
