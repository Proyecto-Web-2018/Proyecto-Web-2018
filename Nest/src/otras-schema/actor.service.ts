import { Injectable } from '@nestjs/common';

@Injectable()
export class ActorService {

  actores: Actor []= [];

  crearCapitulo(capitulo: Actor): Actor {
    this.actores.push(capitulo);
    return capitulo;
  }

  mostrarCapitulos(): Actor[]{
    return this.actores;
  }

}

export interface Actor {
  idActor: number;
  nombreActor: string;
  descripcionActor: string;
}