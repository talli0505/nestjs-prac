// 테이블을 만들기 위해 사용
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  username : string;

  @Column()
  password : string;
}