import {NextFunction, Request, Response} from "express";
import IAction from "./IAction";
import HttpStatus from 'http-status-codes';
import fs from "fs";
import jwt from "jsonwebtoken";
import Api from "../Api";

export default class LoginAction implements IAction {
  readonly method = 'post';
  readonly path = '/login';

  apply(req: Request, res: Response, next: NextFunction) {
    const user = req.body;
    if (user.email !== 'florinc@bunny.com' || user.password !== '1234') {
      res.status(HttpStatus.FORBIDDEN).send();
      return;
    }

    const token = jwt.sign(user, Api.JWT_SECRET, {expiresIn: '1h'});

    res.cookie('jwt', token, {
      domain: 'bunny.com',
      httpOnly: true,
      secure: true
    });

    res.status(HttpStatus.OK).send();
  }
}
