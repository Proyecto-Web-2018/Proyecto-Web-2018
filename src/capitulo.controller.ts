import { Body, Controller, Post } from '@nestjs/common';
import { CapituloService } from './serie-schema/capitulo.service';
import { CapituloPipe } from './pipes/capitulo.pipe';
import { CAPITULO_SCHEMA } from './serie-schema/captitulo.schema';

@Controller('usuario')
export class UsuarioController {

  constructor(private _capituloService: CapituloService){}

  @Post('crearUsuario')
  crearUsuario(@Body(new CapituloPipe(CAPITULO_SCHEMA)) nuevoCapitulo){

    const usuarioCreado = this._capituloService.crearCapitulo(nuevoCapitulo);
    return nuevoCapitulo;

  }

}