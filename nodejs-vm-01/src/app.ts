import express from 'express';
import cors from 'cors';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {AppRoutes} from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

  // console.log(connection);

  // create express app
  const port = 3000;
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.set('json spaces', 0);

  const corsOptions = {
    origin: 'http://192.168.64.11:3000',
    // origin: 'http://192.168.64.11:3000/login',
    // optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    // methods: '*',
    credentials: true,
    allowedHeaders: ['Content-Type']
  }

  // register all application routes
  AppRoutes.forEach(route => {
    app[route.method](route.path, cors(corsOptions), (request, response, next) => {
      route.action(request, response)
      .then(() => next)
      .catch(err => next(err));
    });
  });

  // run app
  app.listen(port);

  console.log(`Express application is up and running on port ${port}`);

}).catch(error => console.log("TypeORM connection error: ", error));

