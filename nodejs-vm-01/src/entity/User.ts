import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({name: "users"})
export class User {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    email: string;
}
