import { Injectable } from '@angular/core';
import {CredencialesService} from "./credenciales.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  constructor(private _credencialesService: CredencialesService,
              private _router: Router,) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)
    :
    Observable<boolean> |
    Promise<boolean> |
    boolean {

    const permisos = this._credencialesService.estaLogeado;
    if (permisos) {
      return permisos;
    } else {
      // redirigerle al login
      const url = ['login'];
      this._router.navigate(url);
      return permisos;
    }
  }
}
