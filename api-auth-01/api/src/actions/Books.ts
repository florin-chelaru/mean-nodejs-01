import {NextFunction, Request, RequestHandler, Response} from "express";
import IAction from "./IAction";

export default class BooksAction implements IAction {
  readonly method = 'get';
  readonly path = '/books';
  apply(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({'books': 'books'});
  }
}