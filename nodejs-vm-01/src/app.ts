import express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";

const app = express();
const port = 3000;

app.set('json spaces', 0);

createConnection().then(async connection => {
    // here you can start to work with your entities
    console.log(`Connection to mongodb is successful`);

    let user = new User();
    user.name = "George Chelaru";
    user.email = "george.chelaru@gmail.com";

    await connection.manager.save(user);
    console.log("User has been saved");

    let users = await connection.manager.find(User);
    console.log("All users from the db: ", users);
}).catch(error => console.log(error));

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.json({ a: "foo", b: 1});
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

