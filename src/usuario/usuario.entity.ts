import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SerieListEntity } from '../serie/serie-list.entity';
import { PeliculaListEntity } from '../pelicula/peliculaList.entity';

@Entity('web_usuario')
export class UsuarioEntity{
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  nombreUsuario: string;

  @Column()
  password: string;

  @Column()
  correo: string;

  @OneToMany(type => SerieListEntity, SerieListEntity => SerieListEntity.usuario)
  serieList: SerieListEntity[];

  @OneToMany(type => PeliculaListEntity, PeliculaListEntity => PeliculaListEntity.usuario)
  peliculaList: PeliculaListEntity[];

}