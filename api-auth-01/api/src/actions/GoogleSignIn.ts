import IAction from "./IAction";
import {NextFunction, Request, Response} from "express";

import {OAuth2Client} from 'google-auth-library';
import HttpStatus from "http-status-codes";
import jwt from "jsonwebtoken";
import Api from "../Api";

export default class GoogleSignInAction implements IAction {
  readonly method = 'post';
  readonly path = '/google';

  private static readonly CLIENT_ID = '1057836076662-ehncq8hs6n3jvaulecvvlejafgcfj04v.apps.googleusercontent.com';

  private static async verify(token: string): Promise<{ email: string }> {
    const client = new OAuth2Client(GoogleSignInAction.CLIENT_ID)
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GoogleSignInAction.CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return {email: payload.email};
  }

  async apply(req: Request, res: Response, next: NextFunction) {
    const {credential} = req.body;
    let error: string;
    const user = await GoogleSignInAction.verify(credential).catch(e => error = e);
    if (error) {
      console.log(error);
      res.status(HttpStatus.FORBIDDEN).send();
      return;
    }

    const token = jwt.sign(user, Api.JWT_SECRET, {expiresIn: '1h'});

    res.cookie('jwt', token, {
      domain: 'bunny.com',
      httpOnly: true,
      secure: true
    });

    res.status(HttpStatus.OK).send(user);
  }
};