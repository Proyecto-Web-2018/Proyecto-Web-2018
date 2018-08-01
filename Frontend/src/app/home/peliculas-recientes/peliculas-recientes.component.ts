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

  peliculas=[
    {
      uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/1200px-Breaking_Bad_logo.svg.png",

    },
    {
      uri:"https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png",
    },
    {
      uri:"https://i0.wp.com/freakelitex.com/wp-content/uploads/2017/11/maxresdefault-8.jpg?fit=1920%2C1080",
    },
    {
      uri:"http://www.proyectorfantasma.com.ar/wp-content/uploads/2014/06/VUELVE-BREAKING-BAD-810x456.jpeg",
    },
  ];



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
