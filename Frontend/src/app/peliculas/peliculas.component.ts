import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  arregloPeliculas = [];
  contadorDoce = 0;

  constructor( private _router: Router,
               private httpClient: HttpClient,
               private httpClient2: HttpClient) { }

  redirect(id) {
    const rutaReproductor = ['/reproducir', 'pelicula', 'p', id];
    this._router.navigate(rutaReproductor);
  }

  ngOnInit() {
    this.ocultarBotones();
    this.getPeliculas();
  }

  getPeliculas() {

    this.httpClient.get(`http://localhost:1337/Peliculas`).subscribe((data: any[]) => {
      const peliculasAux = data;

      if (peliculasAux.length > 8) {

        this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.contadorDoce}`)
          .subscribe((data2: any[]) => {
              this.arregloPeliculas = data2;
            }
          );
        const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById('peliculaSiguiente');
        botonPeliculaSiguiente.style.display = 'block';

      } else {
        this.arregloPeliculas = data;
      }
      }
    );
  }

  ocultarBotones() {
    const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById('peliculaSiguiente');
    botonPeliculaSiguiente.style.display = 'none';

    const botonPeliculaAnterior = <HTMLFormElement>document.getElementById('peliculaAnterior');
    botonPeliculaAnterior.style.display = 'none';
  }

  mostrarMas(botonSiguiente, botonAnterior) {

    this.contadorDoce += 8;

    this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.contadorDoce}`).subscribe((data: any[]) => {
        this.arregloPeliculas = data;

        if (this.arregloPeliculas.length < 8) {
          const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById(botonSiguiente);
          botonPeliculaSiguiente.style.display = 'none';
        }
      }
    );

    const botonPeliculaAnterior = <HTMLFormElement>document.getElementById(botonAnterior);
    botonPeliculaAnterior.style.display = 'block';

  }

  mostrarAnteriores(botonAnterior, botonSiguiente) {

    this.contadorDoce -= 8;

    if (this.contadorDoce === 0) {
      const botonPeliculaAnterior = <HTMLFormElement>document.getElementById(botonAnterior);
      botonPeliculaAnterior.style.display = 'none';
    }

    this.httpClient2.get(`http://localhost:1337/buscarPeliculas/${this.contadorDoce}`).subscribe((data: any[]) => {
        this.arregloPeliculas = data;
      }
    );
    const botonPeliculaSiguiente = <HTMLFormElement>document.getElementById(botonSiguiente);
    botonPeliculaSiguiente.style.display = 'block';
  }

}
