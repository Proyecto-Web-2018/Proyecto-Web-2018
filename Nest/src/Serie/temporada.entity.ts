import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SerieEntity } from './serie.entity';
import { CapituloEntity } from './capitulo.entity';


@Entity('web_temporada')
export class TemporadaEntity {
  @PrimaryGeneratedColumn()
  idTemporada: number;

  @Column()
  numCapitulos: number;

  @ManyToOne(type => SerieEntity, SerieEntity => SerieEntity.temporadas)
  serie: SerieEntity;

  @OneToMany(type => CapituloEntity, CapituloEntity=> CapituloEntity.temporada)
  capitulos: CapituloEntity[];
}