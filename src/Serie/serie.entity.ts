import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_serie')
export class SerieEntity {
  @PrimaryGeneratedColumn()
  idSerie: number;
  @Column()
  tituloSerie: string;

}