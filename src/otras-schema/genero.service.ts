import { Injectable } from '@nestjs/common';

@Injectable()
export class GeneroService {

  generos: Genero []= [];

  crearGenero(capitulo: Genero): Genero {
    this.generos.push(capitulo);
    return capitulo;
  }

  mostrarGenero(): Genero[]{
    return this.generos;
  }

}

export interface Genero {
  idGenero: number;
  nombreGenero: string;
  descripcionGenero: string;
}