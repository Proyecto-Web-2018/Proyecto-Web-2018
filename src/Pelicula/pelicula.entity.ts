import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SerieListEntity } from '../serie/serie-list.entity';
import { PeliculaListEntity } from './peliculaList.entity';
import { GeneroEntity } from '../otras/genero.entity';
import { ActorEntity } from '../otras/actor.entity';

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

  @ManyToMany(type => PeliculaListEntity, PeliculaListEntity => PeliculaListEntity.peliculas)
  peliculaList: PeliculaListEntity[];

  @ManyToMany(type => GeneroEntity, GeneroEntity => GeneroEntity.peliculas)
  generos: GeneroEntity[];

  @ManyToMany(type => ActorEntity, ActorEntity => ActorEntity.peliculas)
  actores: ActorEntity[];
}