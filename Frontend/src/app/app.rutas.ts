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
import {ListaCapitulosComponent} from "./series/lista-capitulos/lista-capitulos.component";

export const RUTAS: Routes = [

  {
    path: 'home',
    component: HomeComponent
    //canActivate: [AutorizacionService],
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
    path: 'reproducir/:id',
    component: ReproductorComponent
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
    path: 'generos',
    component: GenerosComponent
  },
  {
    path: 'capitulos',
    component: ListaCapitulosComponent
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  }
];
