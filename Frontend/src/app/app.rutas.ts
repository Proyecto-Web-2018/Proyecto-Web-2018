import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AutorizacionService} from './autorizacion.service';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {ReproductorComponent} from './reproductor/reproductor.component';
import {NotFoundComponent} from './not-found/not-found.component';

export const RUTAS: Routes = [

  {
    path: 'usuario/:id/home',
    component: HomeComponent,
    canActivate: [AutorizacionService],
  },
  {
    path: 'error',
    component: NotFoundComponent
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reproducir',
    component: ReproductorComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  }
];
