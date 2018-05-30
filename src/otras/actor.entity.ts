import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('web_actor')
export class ActorEntity {
  @PrimaryGeneratedColumn()
  idActor: number;

  @Column()
  nombreActor: string:

  @Column()
  descripcionActor(): string;
}