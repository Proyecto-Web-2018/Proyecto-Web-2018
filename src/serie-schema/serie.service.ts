import { Injectable } from '@nestjs/common';

@Injectable()
export class SerieService {

  series: Serie []= [];

  crearSerie(capitulo: Serie): Serie {
    this.series.push(capitulo);
    return capitulo;
  }

  mostrarSeries(): Serie[]{
    return this.series;
  }

}

export interface Serie {
  idSerie: number;
  tituloSerie: string;
}