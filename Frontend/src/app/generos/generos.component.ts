import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  arregloPeliculas: any;
  arregloSeries: any;
  genero: any;
  nombre = '';

  constructor( private _activatedRoute: ActivatedRoute, private _router: Router, private httpClient: HttpClient) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });

  }

  ngOnInit() {
  }

  obtenerDatos(id) {

      this.httpClient.get(`http://localhost:1337/Genero/${id}`).subscribe((data: any[]) => {
          this.genero = data;
          this.nombre = this.genero.nombre
          this.arregloPeliculas = this.genero.peliculas;
          this.arregloSeries = this.genero.series;
        }
      );
  }

  redirect(id) {
    const rutaReproductor = ['/reproducir', 'pelicula', 'p', id];
    this._router.navigate(rutaReproductor);
  }

  redirectSerie(id) {
    const rutaReproductor = ['/serie', id];
    this._router.navigate(rutaReproductor);
  }

}
