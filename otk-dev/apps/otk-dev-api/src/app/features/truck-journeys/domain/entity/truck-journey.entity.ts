import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {ITruckJourney} from "@otk-dev/shared";

@Entity({name: 'truck-journey'})
export class TruckJourneyEntity implements ITruckJourney {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({type: 'varchar', nullable: true})
  title?: string;

  @Column({type: 'varchar', nullable: true})
  description?: string;

  @Column({type: 'text', nullable: true})
  departedOn?: Date;

  @Column({type: 'text', nullable: true})
  arrivedOn?: Date;

  @Column({type: 'varchar', nullable: true})
  createdBy?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
