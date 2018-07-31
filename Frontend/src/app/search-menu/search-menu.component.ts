import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {

  //username = Cookies.getJSON('cookieWeb').username;

  constructor(private _credenciales: CredencialesService, private _router: Router) { }

  ngOnInit() {
  }

  validarCookie() {
    const json = Cookies.getJSON('cookieWeb');
    if (json.estado === 'true') {
      // console.log(Cookies.get('marcelo'))
      this._credenciales.cookies();
      const rutaHomeUsuario = ['/usuario', json.id, 'home'];
      this._router.navigate(rutaHomeUsuario);

    } else {
      console.log('error');
    }
  }

}
