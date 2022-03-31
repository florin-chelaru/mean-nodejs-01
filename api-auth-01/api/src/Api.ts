import express, {NextFunction, Request, Response} from "express";
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
          console.log(JSON.stringify(jwtPayload));
          return done(null, jwtPayload);
        }
      )
    );

    const server = https.createServer({
      key: fs.readFileSync('certs/api.bunny.com.key'),
      cert: fs.readFileSync('certs/api.bunny.com.cer'),
      // sudo vi /etc/environment
      // set CERT_PASSPHRASE to something
      // source /etc/passphrase
      passphrase: process.env.CERT_PASSPHRASE
    }, app);

    const actions: IAction[] = [new LoginAction(), new LogoutAction()];
    const actionsWithAuth: IAction[] = [new BooksAction()];
    actions.forEach(action => app[action.method](action.path, action.apply));
    actionsWithAuth.forEach(
      action => app[action.method](
        action.path,
        passport.authenticate('jwt', {session: false}),
        action.apply));

    server.listen(port, () => {
      console.log(`Caesar is listening.`);
    });
  }
}