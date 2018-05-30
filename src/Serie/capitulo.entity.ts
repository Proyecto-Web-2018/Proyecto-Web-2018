import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoSerieEntity } from './estado-serie.entity';
import { SerieEntity } from './serie.entity';
import { TemporadaEntity } from './temporada.entity';
import { PeliculaEntity } from '../pelicula/pelicula.entity';
import { ActorEntity } from '../otras/actor.entity';

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

  @OneToOne(type => EstadoSerieEntity, EstadoSerieEntity => EstadoSerieEntity.capitulo)
  @JoinColumn()
  estado: EstadoSerieEntity;

  @ManyToOne(type => TemporadaEntity, TemporadaEntity => TemporadaEntity.capitulos)
  temporada: TemporadaEntity;

  @ManyToMany(type => ActorEntity, ActorEntity => ActorEntity.capitulos)
  actores: ActorEntity[];

}