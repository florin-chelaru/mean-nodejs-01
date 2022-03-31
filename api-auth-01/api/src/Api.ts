import express, {NextFunction, Request, Response} from "express";
import ip from "ip";

export default class Api {
  start(port: number): void {
    const app = express();

    app.use(express.json());
    app.set('json spaces', 0);

    app.get('/login', this.login);
    app.get('/logout', this.logout);
    app.get('/books', this.books);

    app.listen(port, () => {
      console.log(`Express is listening at http://${ip.address()}:${port}`);
    });
  }

  private login(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({'login': 'login'});
  }

  private logout(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({'logout': 'logout'});
  }

  private books(req: Request, res: Response, next: NextFunction): void {
    res.status(200).send({'books': 'books'});
  }
}