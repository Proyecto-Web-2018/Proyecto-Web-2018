import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombre;
  apellido;
  username;
  email;
  password;
  passwordConfirmation;

  constructor(private httpClient: HttpClient, private _router: Router) { }

  ngOnInit() {
  }

  // Funcion ingresarUsuario(), valida las contraseñas y registra el usuario en el servidor

  ingresarUsuario(formulario) {

    const valorActualPassword = formulario.controls.password.value;

    const valorActualPasswordConfirmation = formulario.controls.passwordConfirmation.value;

    if (valorActualPassword === valorActualPasswordConfirmation) {

      this.httpClient.post(`http://localhost:1337/Usuario`, {
        nombre: this.nombre,
        apellido: this.apellido,
        username: this.username,
        password: this.password,
        email: this.email
      }).subscribe(res => {
          // console.log(res);
        },
        err => {
          console.log('Error occured');
        });

      const rutaLogin = ['/login'];
      this._router.navigate(rutaLogin);

    } else {
      alert('Los passwords no son iguales');
      this.password = undefined;
      this.passwordConfirmation = undefined;
    }

  }

}
