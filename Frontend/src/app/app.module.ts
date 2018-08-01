import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RUTAS} from './app.rutas';
import {RouterModule} from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { SearchMenuComponent } from './search-menu/search-menu.component';
import { ReproductorComponent } from './reproductor/reproductor.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { GenerosComponent } from './generos/generos.component';
import { PeliculasRecientesComponent } from './home/peliculas-recientes/peliculas-recientes.component';
import { SeriesRecientesComponent } from './home/series-recientes/series-recientes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistroComponent,
    SearchMenuComponent,
    ReproductorComponent,
    NotFoundComponent,
    PeliculasComponent,
    SeriesComponent,
    GenerosComponent,
    PeliculasRecientesComponent,
    SeriesRecientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(

      RUTAS, {useHash: true}

    ),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
