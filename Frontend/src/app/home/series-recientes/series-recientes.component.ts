import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-series-recientes',
  templateUrl: './series-recientes.component.html',
  styleUrls: ['./series-recientes.component.css']
})
export class SeriesRecientesComponent implements OnInit {

  constructor(private _router: Router) { }

  /*redirect(){
    const rutaReproductor= ['reproducir'];
    this._router.navigate(rutaReproductor)
  }*/

  ngOnInit() {
  }

}
