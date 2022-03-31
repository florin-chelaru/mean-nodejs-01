import {NextFunction, Request, Response} from "express";

export default interface IAction {
  readonly method: string;
  readonly path: string;
  apply(req: Request, res: Response, next: NextFunction): void;
}