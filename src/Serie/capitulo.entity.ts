import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_capitulo')
export class CapituloEntity {
  @PrimaryGeneratedColumn()
  idCapitulo: number;

  @Column()
  tituloCapitulo: string;

  @Column()
  duracionCapitulo: string;

  @Column()
  linCapitulo: string;
}