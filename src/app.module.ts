import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { SerieListEntity } from './serie/serie-list.entity';
import { PeliculaEntity } from './pelicula/pelicula.entity';
import { PeliculaListEntity } from './pelicula/pelicula-list.entity';
import { GeneroEntity } from './otras/genero.entity';
import { ActorEntity } from './otras/actor.entity';
import { CapituloEntity } from './serie/capitulo.entity';
import { SerieEntity } from './serie/serie.entity';
import { EstadoSerieEntity } from './serie/estado-serie.entity';
import { TemporadaEntity } from './serie/temporada.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'web2018.mysql.database.azure.com',
      port: 3306,
      username: 'web2018@web2018',
      password: 'Edward10*',
      database: 'web2018',
      entities: [
        __dirname +
        '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
      ssl: false,
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
      TemporadaEntity,
    ]),

  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
