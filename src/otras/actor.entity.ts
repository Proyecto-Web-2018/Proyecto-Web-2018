import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PeliculaEntity } from '../Pelicula/pelicula.entity';
import { CapituloEntity } from '../Serie/capitulo.entity';
@Entity('web_actor')
export class ActorEntity {
  @PrimaryGeneratedColumn()
  idActor: number;

  @Column()
  nombreActor: string;

  @Column()
  descripcionActor: string;

  @ManyToMany(type => PeliculaEntity, PeliculaEntity => PeliculaEntity.actores)
  @JoinTable()
  peliculas: PeliculaEntity[];

  @ManyToMany(type => CapituloEntity, CapituloEntity => CapituloEntity.actores)
  @JoinTable()
  capitulos: CapituloEntity[];
}