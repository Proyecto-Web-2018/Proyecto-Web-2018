import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-series-recientes',
  templateUrl: './series-recientes.component.html',
  styleUrls: ['./series-recientes.component.css']
})
export class SeriesRecientesComponent implements OnInit {

  arregloPeliculas = [];
  pelicula: any;
  arregloImagenes = [];
  arregloIds = [];

  constructor(private _router: Router, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getPeliculas();
  }

  redirect(numero: number) {

    const id = this.arregloIds[numero];
    const rutaReproductor = ['/serie', id];
    this._router.navigate(rutaReproductor);
  }

  getPeliculas() {

    this.httpClient.get(`http://localhost:1337/cuatroSeries`).subscribe((data: any[]) => {
        this.arregloPeliculas = data;
        console.log(this.arregloPeliculas);
        const arreglo = [];
        const arregloide = [];
        this.arregloPeliculas.forEach(function (item) {
          arreglo.push(item.imagen);
          arregloide.push(item.id);
          // console.log(item.imagen)
        });
        this.arregloImagenes = arreglo;
        this.arregloIds = arregloide;
      }
    );


  }

}
