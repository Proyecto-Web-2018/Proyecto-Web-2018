import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './pipes/usuario.pipe';
import { USUARIO_SCHEMA } from './usuario/usuario.schema';

@Controller('usuario')
export class UsuarioController {

  constructor(private _usuarioService: UsuarioService){}

  @Post('crearUsuario')
  crearUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) nuevoUsaurio){

    const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsaurio);
    return nuevoUsaurio;

  }

}