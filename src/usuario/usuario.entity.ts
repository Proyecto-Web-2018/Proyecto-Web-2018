import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_usuario')
export class UsuarioEntity{
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  nombreUsuario: string;

  @Column()
  password: string;

  @Column()
  correo: string;


}