import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_lista_pelicula')
export class PeliculaListEntity {
  @PrimaryGeneratedColumn()
  idListaPelicula: number;

  @Column()
  nombreListaPelicula: string;
}