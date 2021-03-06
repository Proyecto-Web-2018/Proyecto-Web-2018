import { Injectable } from '@nestjs/common';

@Injectable()
export class CapituloService {

  capitulos: Capitulo []= [];

  crearCapitulo(capitulo: Capitulo): Capitulo {
    this.capitulos.push(capitulo);
    return capitulo;
  }

  mostrarCapitulos(): Capitulo[]{
    return this.capitulos;
  }

}

export interface Capitulo {
  idCapitulo: number;
  tituloCapitulo: string;
  duracionCapitulo: string;
  linkCapitulo: string;
}