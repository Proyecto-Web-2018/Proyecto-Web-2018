import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_pelicula')
export class PeliculaEntity {
  @PrimaryGeneratedColumn()
  idPelicula: number;

  @Column()
  tituloPelicula: string;

  @Column()
  duracionPelicula: string;

  @Column()
  linkPelicula: string;
}