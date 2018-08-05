import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  arregloPeliculas = [];

  constructor( private _router: Router,
               private httpClient: HttpClient) { }

  redirect(id) {
    const rutaReproductor = ['/reproducir', 'pelicula', 'p', id];
    this._router.navigate(rutaReproductor);
  }

  ngOnInit() {
    this.getPeliculas();
  }

  getPeliculas() {

    this.httpClient.get(`http://localhost:1337/Peliculas`).subscribe((data: any[]) => {
        this.arregloPeliculas = data;
      }
    );


  }

}
