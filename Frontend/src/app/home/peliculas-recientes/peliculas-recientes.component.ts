import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../../servicios/data.service';

@Component({
  selector: 'app-peliculas-recientes',
  templateUrl: './peliculas-recientes.component.html',
  styleUrls: ['./peliculas-recientes.component.css']
})
export class PeliculasRecientesComponent implements OnInit {

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
    const rutaReproductor = ['/reproducir', 'pelicula', id];
    this._router.navigate(rutaReproductor);
    console.log(id);
  }

  getPeliculas() {

    this.httpClient.get(`http://localhost:1337/cuatroPeliculas`).subscribe((data: any[]) => {
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
