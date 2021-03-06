import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PeliculaEntity } from '../pelicula/pelicula.entity';
import { SerieEntity } from '../serie/serie.entity';

@Entity('web_genero')
export class GeneroEntity{
  @PrimaryGeneratedColumn()
  idGenero: number;

  @Column()
  nombreGenero: string;

  @Column()
  descripcionGenero: string;

  @ManyToMany(type => PeliculaEntity, PeliculaEntity => PeliculaEntity.generos)
  @JoinTable()
  peliculas: PeliculaEntity[];

  @ManyToMany(type => SerieEntity, SerieEntity => SerieEntity.generos)
  @JoinTable()
  series: SerieEntity[];
}