import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
