import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Carros{
  @PrimaryGeneratedColumn()
  id:number
  @Column("varchar",{length:50})
  name:string
}