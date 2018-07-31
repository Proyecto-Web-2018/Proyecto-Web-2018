import { Component, OnInit } from '@angular/core';
import * as Cookies from 'js-cookie';
import {CredencialesService} from '../credenciales.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _credenciales: CredencialesService, private _router: Router) { }

  ngOnInit() {
    //this.validarCookie();
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
