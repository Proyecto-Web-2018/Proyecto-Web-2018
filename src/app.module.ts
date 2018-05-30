import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario/usuario.entity';
import { SerieListEntity } from './Serie/serieList.entity';

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
      SerieListEntity
    ])

  ],
  controllers: [AppController, UsuarioController],
  providers: [AppService, UsuarioService],
})
export class AppModule {}
