import { Injectable } from '@nestjs/common';

@Injectable()
export class UsuarioService {

  usuarios: Usuario[] = [];

  crearUsuario(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }

  mostrarUsuarios(): Usuario[]{
    return this.usuarios;
  }

}

export interface Usuario {
  idUsuario: number;
  nombre: string;
  password: string;
  correo: string;
}