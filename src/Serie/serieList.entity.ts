import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { SerieEntity } from './serie.entity';
import { EstadoSerieEntity } from './estadoSerie.entity';

@Entity('web_lista_serie')
export class SerieListEntity {
  @PrimaryGeneratedColumn()
  idListaSerie: number;

  @Column()
  nombreListaSerie: string;

  @ManyToOne(type => UsuarioEntity, UsuarioEntity => UsuarioEntity.serieList)
  usuario: UsuarioEntity;

  @ManyToMany(type => SerieEntity, SerieEntity => SerieEntity.serieList)
  @JoinTable()
  series: SerieEntity[];

  @OneToOne(type => EstadoSerieEntity, EstadoSerieEntity => EstadoSerieEntity.serieList)
  estado: EstadoSerieEntity;

}