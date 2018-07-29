import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AutorizacionService} from './autorizacion.service';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';

export const RUTAS: Routes = [

  {
    path: 'usuario/:id/home',
    component: HomeComponent,
    canActivate: [AutorizacionService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
