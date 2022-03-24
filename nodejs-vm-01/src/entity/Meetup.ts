import { Entity, Column, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({name: "meetups"})
class Meetup {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  image: string;

  @Column()
  title: string;

  @Column()
  address: string;

  @Column()
  description: string;
}

export default Meetup;
