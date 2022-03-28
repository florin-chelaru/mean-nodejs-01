import express from 'express';
import cors from 'cors';
import { Request, Response } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import { AppRoutes } from "./routes";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection().then(async connection => {

    console.log(connection);

    // create express app
    const port = 3000;
    const app = express();
    app.use(express.json());
    app.use(cors());
    app.set('json spaces', 0);

    // register all application routes
    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    // run app
    app.listen(port);

    console.log(`Express application is up and running on port ${port}`);

}).catch(error => console.log("TypeORM connection error: ", error));

