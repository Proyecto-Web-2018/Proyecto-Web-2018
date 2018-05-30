import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('web_estado_serie')
export class EstadoSerieEntity {
  @PrimaryGeneratedColumn()
  idEstadoSerie: number;

  @Column()
  tiempoEstado: number;

}