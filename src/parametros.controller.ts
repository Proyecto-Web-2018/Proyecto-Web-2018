import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class ParametrosController {

  @Post('crearUsuario')
  crearUsuario(@Body(new)){}

}