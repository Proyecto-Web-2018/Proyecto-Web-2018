import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { PeliculaEntity } from './pelicula.entity';

@Entity('web_lista_pelicula')
export class PeliculaListEntity {
  @PrimaryGeneratedColumn()
  idListaPelicula: number;

  @Column()
  nombreListaPelicula: string;

  @ManyToOne(type => UsuarioEntity, UsuarioEntity => UsuarioEntity.peliculaList)
  usuario: UsuarioEntity;


  @ManyToMany(type => PeliculaEntity, PeliculaEntity => PeliculaEntity.peliculaList)
  @JoinTable()
  peliculas: PeliculaEntity[];
}