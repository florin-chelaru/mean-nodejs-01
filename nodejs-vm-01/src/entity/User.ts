import {Entity, Column, ObjectIdColumn} from "typeorm";
import {ObjectID} from "mongodb";

@Entity({name: "users"})
export default class User {
  @ObjectIdColumn()
  id?: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
