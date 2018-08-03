import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor( private _router: Router) { }


  arregloGeneros=[
    {
      img:"https://images.amcnetworks.com/ifc.com/wp-content/uploads/2011/10/expendables-10052011.jpg",
      genero:"Acción",
   },
    {
      img:"http://digitalspyuk.cdnds.net/15/31/1280x640/landscape-the-shining.jpg",
      genero:"Terror",
    },
    {
      img:"https://i.ytimg.com/vi/IEuZCv7GlPw/maxresdefault.jpg",
      genero:"Sci - Fi",
    },
    {
      img:"https://previews.123rf.com/images/shotsstudio/shotsstudio1106/shotsstudio110600181/9881720-friends-sitting-on-couch-laughing-at-comedy-movie.jpg",
      genero:"Comedia",
    },
  ];

  redirect(){
    const rutaReproductor= ['peliculas'];
    this._router.navigate(rutaReproductor)
  }

  ngOnInit() {
  }

}
