import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule {}
