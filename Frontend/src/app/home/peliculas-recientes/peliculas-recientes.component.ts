import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-peliculas-recientes',
  templateUrl: './peliculas-recientes.component.html',
  styleUrls: ['./peliculas-recientes.component.css']
})
export class PeliculasRecientesComponent implements OnInit {

  constructor(private _router: Router) { }

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
  }
  redirect(){
    const rutaReproductor= ['reproducir'];
    this._router.navigate(rutaReproductor)
  }
}
