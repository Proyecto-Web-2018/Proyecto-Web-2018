import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('web_temporada')
export class TemporadaEntity {
  @PrimaryGeneratedColumn()
  idTemporada: number;

  @Column()
  numCapitulos: number;
}