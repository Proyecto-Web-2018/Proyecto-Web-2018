import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-lista-capitulos',
  templateUrl: './lista-capitulos.component.html',
  styleUrls: ['./lista-capitulos.component.css']
})
export class ListaCapitulosComponent implements OnInit {

  constructor(public sanitizer: DomSanitizer, private _router: Router) { }

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

}
