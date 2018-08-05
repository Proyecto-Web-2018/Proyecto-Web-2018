import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  username = Cookies.getJSON('cookieWeb').username;
  arregloGeneros: any;

  constructor(private _credenciales: CredencialesService,
              private _router: Router,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.getGeneros();
  }

  getGeneros() {

    this.httpClient.get(`http://localhost:1337/Genero`).subscribe((data: any[]) => {
        this.arregloGeneros = data;
      }
    );


  }

  redirectPeliculas(){
    this._router.navigate(['peliculas'])
  }

  redirectGenero(id){
    this._router.navigate(['/generos', id])
  }

  redirectSeries(){
    this._router.navigate(['series'])
  }

  validarCookie() {
    const json = Cookies.getJSON('cookieWeb');
    if (json.estado === 'true') {
      // console.log(Cookies.get('marcelo'))
      this._credenciales.cookies();
      const rutaHomeUsuario = ['home'];
      this._router.navigate(rutaHomeUsuario);

    } else {
      console.log('error');
    }
  }

}
