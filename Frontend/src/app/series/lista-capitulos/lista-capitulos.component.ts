import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-lista-capitulos',
  templateUrl: './lista-capitulos.component.html',
  styleUrls: ['./lista-capitulos.component.css']
})
export class ListaCapitulosComponent implements OnInit {

  imagen;
  nombre;
  sinopsis;
  seriesDetalle: any;
  datosHijos: any;


  constructor(public sanitizer: DomSanitizer,
              private _router: Router,
              private httpClient: HttpClient,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });

  }

  listaTemporadas=[
    {
      titulo:"Temporada 1",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAXfJNM1zPL4RnNq3lXa90Qiuc27bt3oHnppqRrSiqyXmmHPz3w",
      capitulos:["Capitulo 1","cap 2","cap 3", "cap 4", "cap 5", "cap 6"]
    },
    {
      titulo:"Temporada 2",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMoBtiXiH3Xwiz9ehl-LD9U4dUwV2yhT51yw0phSaxIYhWGR_muw",
      capitulos:["Capitulo 1","cap 2","cap 3", "cap 4", "cap 5", "cap 6","cap 7", "cap 8", "cap 9"]
    },
    {
      titulo:"Temporada 3",
      img:"https://i.ytimg.com/vi/v6Xo0Z-E7Ns/maxresdefault.jpg",
      capitulos:["Capitulo 1","cap 2","cap 3", "cap 4", "cap 5", "cap 6"]
    },

  ];
  redirect(){
    const rutaReproductor= ['reproducir'];
    this._router.navigate(rutaReproductor)
  }

  ngOnInit() {
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/Serie/${id}`).subscribe((data: any[]) => {
        this.seriesDetalle = data;
        this.datosHijos = this.seriesDetalle.temporadas;
        console.log(this.datosHijos)
        this.imagen = this.seriesDetalle.imagen
      this.nombre = this.seriesDetalle.nombre
      this.sinopsis = this.seriesDetalle.sinopsis


      }
    );

  }

}
