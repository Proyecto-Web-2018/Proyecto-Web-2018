import {Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";

export const RUTAS: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];
