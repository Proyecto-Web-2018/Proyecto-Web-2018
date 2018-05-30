import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { GeneroEntity } from '../otras/genero.entity';
import { SerieListEntity } from './serie-list.entity';
import { TemporadaEntity } from './temporada.entity';

@Entity('web_serie')
export class SerieEntity {
  @PrimaryGeneratedColumn()
  idSerie: number;

  @Column()
  tituloSerie: string;

  @ManyToMany(type => SerieListEntity, SerieListEntity => SerieListEntity.series)
  serieList: SerieListEntity[];

  @ManyToMany(type => GeneroEntity, GeneroEntity => GeneroEntity.series)
  generos: SerieListEntity[];

  @OneToMany(type => TemporadaEntity, TemporadaEntity => TemporadaEntity.serie)
  temporadas: TemporadaEntity[];
}