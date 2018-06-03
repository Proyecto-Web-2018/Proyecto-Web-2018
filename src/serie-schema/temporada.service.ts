import { Injectable } from '@nestjs/common';

@Injectable()
export class TemporadaService {

  temporadas: Temporada []= [];

  crearTemporada(capitulo: Temporada): Temporada {
    this.temporadas.push(capitulo);
    return capitulo;
  }

  comstrarTemporada(): Temporada[]{
    return this.temporadas;
  }

}

export interface Temporada {
  idTemporada: number;
  numCapitulos: number;
}