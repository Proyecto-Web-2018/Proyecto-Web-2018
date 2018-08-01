import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-peliculas-recientes',
  templateUrl: './peliculas-recientes.component.html',
  styleUrls: ['./peliculas-recientes.component.css']
})
export class PeliculasRecientesComponent implements OnInit {

  arregloPeliculas = [];

  arregloImagenes = [];

  constructor(private _router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getPeliculas()

  }

  redirect(){
    const rutaReproductor= ['reproducir'];
    this._router.navigate(rutaReproductor)
  }

  getPeliculas(){

    this.httpClient.get(`http://localhost:1337/cuatroPeliculas`).subscribe((data: any[]) => {
        this.arregloPeliculas = data;
        console.log(this.arregloPeliculas)
        const arreglo = [];
        this.arregloPeliculas.forEach(function (item) {
          arreglo.push(item.imagen);
          console.log(item.imagen)
        })
        this.arregloImagenes = arreglo
      }
    );


  }
}
