import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_lista_serie')
export class SerieListEntity {
  @PrimaryGeneratedColumn()
  idListaSerie: number;

  @Column()
  nombreListaSerie: string;
}