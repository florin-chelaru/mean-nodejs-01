import express from "express";
import https from 'https';
import fs from "fs";
import IAction from "./actions/IAction";
import LoginAction from "./actions/Login";
import LogoutAction from "./actions/Logout";
import passport from "passport";
import JWTStrategy from "passport-jwt";
import BooksAction from "./actions/Books";
import cookies from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";
import GoogleSignInAction from "./actions/GoogleSignIn";


export default class Api {
  // generated using:
  // openssl genrsa -out private.pem 2048
  // openssl rsa -in private.pem -pubout -out public.pem
  // see: https://gist.github.com/ygotthilf/baa58da5c3dd1f69fae9
  static readonly JWT_SECRET = fs.readFileSync('jwt/private.pem');

  start(port: number): void {
    const app = express();

    app.use(express.json());
    app.set('json spaces', 0);

    app.use(cookies());

    const corsOptions = {
      origin: ['https://bunny.com:3000', /\.bunny\.com:3000$/],
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
      credentials: true,
      allowedHeaders: ['Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With']
    };

    // This is the strategy setup for JWT so that we can use tokens instead of sessions.
    passport.use(
      new JWTStrategy.Strategy(
        {
          jwtFromRequest: (req) => {
            let token = null;
            if (req && req.cookies) {
              token = req.cookies.jwt;
            }
            return token;
          },
          secretOrKey: Api.JWT_SECRET,
        },
        (jwtPayload, done) => {
          if (!jwtPayload) {
            return done('No token found...');
          }
          return done(null, jwtPayload);
        }
      )
    );

    const server = https.createServer({
      key: fs.readFileSync('certs/bunny.com+1-key.pem'),
      cert: fs.readFileSync('certs/bunny.com+1.pem'),
    }, app);

    const actions: IAction[] = [
      new LoginAction(),
      new LogoutAction(),
      new GoogleSignInAction(),
    ];
    const actionsWithAuth: IAction[] = [
      new BooksAction()
    ];

    // http://johnzhang.io/options-request-in-express
    app.options('/*', cors(corsOptions)); // include before other routes
    actions.forEach(action => app[action.method](action.path, cors(corsOptions), action.apply));
    actionsWithAuth.forEach(
      action => app[action.method](
        action.path,
        cors(corsOptions),
        passport.authenticate('jwt', {session: false}),
        action.apply));

    server.listen(port, () => {
      console.log(`Caesar is listening.`);
    });
  }
}