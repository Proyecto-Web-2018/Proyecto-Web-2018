import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SerieListEntity } from './serie-list.entity';
import { CapituloEntity } from './capitulo.entity';

@Entity('web_estado_serie')
export class EstadoSerieEntity {
  @PrimaryGeneratedColumn()
  idEstadoSerie: number;

  @Column()
  tiempoEstado: number;

  @OneToOne(type => SerieListEntity, SerieListEntity => SerieListEntity.estado)
  @JoinColumn()
  serieList: SerieListEntity;

  @OneToOne(type => CapituloEntity, CapituloEntity => CapituloEntity.estado)
  capitulo: CapituloEntity;
}