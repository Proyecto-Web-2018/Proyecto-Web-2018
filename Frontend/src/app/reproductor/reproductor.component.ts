import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {

  url;
  titulo;
  duracion;
  actores;
  genero;
  raiting;
  sinopsis;

  peliculaDetalle: any;

  peliculas = [];

  constructor(public sanitizer: DomSanitizer,
              private _activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) {
    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });
  }

  ngOnInit() {
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/Peliculas/${id}`).subscribe((data: any[]) => {
        this.peliculaDetalle = data;
        console.log(this.peliculaDetalle);
        this.url = this.peliculaDetalle.link;
        this.titulo = this.peliculaDetalle.nombre;
        this.duracion = this.peliculaDetalle.duracion;
        this.genero = this.peliculaDetalle.genero;
        this.raiting = this.peliculaDetalle.rating;
        this.sinopsis = this.peliculaDetalle.sinopsis;
      }
    );

  }

}
