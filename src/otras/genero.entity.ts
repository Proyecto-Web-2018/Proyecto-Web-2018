import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_genero')
export class GeneroEntity{
  @PrimaryGeneratedColumn()
  idGenero: number;

  @Column()
  nombreGenero: string;

  @Column
  descripcionGenero: string:
}