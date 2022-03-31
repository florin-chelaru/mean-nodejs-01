import {NextFunction, Request, Response} from "express";
import IAction from "./IAction";

export default class LogoutAction implements IAction {
  readonly method = 'get';
  readonly path = '/logout';

  apply(req: Request, res: Response, next: NextFunction) {
    res.clearCookie('jwt');
    res.status(200).send();
  }
}