import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AutorizacionService} from './autorizacion.service';
import {LoginComponent} from './login/login.component';
import {RegistroComponent} from './registro/registro.component';
import {ReproductorComponent} from './reproductor/reproductor.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {PeliculasComponent} from './peliculas/peliculas.component';
import {SeriesComponent} from './series/series.component';
import {GenerosComponent} from './generos/generos.component';
import {ListaCapitulosComponent} from './lista-capitulos/lista-capitulos.component';

export const RUTAS: Routes = [

  {
    path: 'home',
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
    children: [
      {
        path: 'pelicula/:pelicula/:id',
        component: ReproductorComponent
      },
      {
        path: 'capitulo/:capitulo/:id',
        component: ReproductorComponent
      }
    ]
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'series',
    component: SeriesComponent
  },
  {
    path: 'generos/:id',
    component: GenerosComponent
  },
  {
    path: 'serie/:id',
    component: ListaCapitulosComponent
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  }
];
