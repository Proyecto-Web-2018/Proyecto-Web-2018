import { Injectable } from '@nestjs/common';

@Injectable()
export class PeliculaService {

  peliculas: Pelicula []= [];

  crearPelicula(capitulo: Pelicula): Pelicula {
    this.peliculas.push(capitulo);
    return capitulo;
  }

  mostrarPeliculas(): Pelicula[]{
    return this.peliculas;
  }

}

export interface Pelicula {
  idPelicula: number;
  tituloPelicula: string;
  duracionPelicula: string;
  linkPelicula: string;
}