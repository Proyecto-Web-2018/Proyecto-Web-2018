import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

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
  datosHijos = [];
  capitulos: any;
  temporadas: any;

  constructor(public sanitizer: DomSanitizer,
              private _router: Router,
              private httpClient: HttpClient,
              private httpClient2: HttpClient,
              private _activatedRoute: ActivatedRoute) {

    this._activatedRoute.params.subscribe(params => {
      this.obtenerDatos(params['id']);
    });
  }

  redirect(id) {
    const rutaReproductor = ['/reproducir', 'capitulo', 'c', id];
    this._router.navigate(rutaReproductor);
  }

  ngOnInit() {
  }

  obtenerDatos(id) {
    this.httpClient.get(`http://localhost:1337/Serie/${id}`).subscribe((data: any[]) => {

        // datos de la serie
        this.seriesDetalle = data;
        this.imagen = this.seriesDetalle.imagen;
        this.nombre = this.seriesDetalle.nombre;
        this.sinopsis = this.seriesDetalle.sinopsis;
      }
    );

    // get http a las temporadas con el id de la serie
    this.httpClient2.get(`http://localhost:1337/Temporada?serie=${id}`).subscribe((data2: any[]) => {
        this.temporadas = data2;
        console.log('temporadas', this.temporadas);
        console.log(this.temporadas[0].capitulos);
      }
    );

  }
}
