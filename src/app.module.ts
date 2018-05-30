import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { SerieListEntity } from './Serie/serieList.entity';
import { PeliculaEntity } from './Pelicula/pelicula.entity';
import { PeliculaListEntity } from './Pelicula/peliculaList.entity';
import { GeneroEntity } from './otras/genero.entity';
import { ActorEntity } from './otras/actor.entity';
import { CapituloEntity } from './Serie/capitulo.entity';
import { SerieEntity } from './Serie/serie.entity';
import { EstadoSerieEntity } from './Serie/estadoSerie.entity';
import { TemporadaEntity } from './Serie/temporada.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'web2018',
      entities: [
        __dirname +
        '/../**/*.entity{.ts,.js}'
      ],
      synchronize: true,
      ssl: false
    }),
    TypeOrmModule.forFeature([
      UsuarioEntity,
      SerieListEntity,
      PeliculaEntity,
      PeliculaListEntity,
      GeneroEntity,
      ActorEntity,
      CapituloEntity,
      SerieEntity,
      EstadoSerieEntity,
      TemporadaEntity
    ])

  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
