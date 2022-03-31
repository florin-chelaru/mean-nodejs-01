import {Request, Response} from "express";
import {getManager} from "typeorm";
import User from "../entity/User";
import HttpStatus from 'http-status-codes';

export async function loginUserAction(request: Request, response: Response) {
  // inspired from: https://github.com/scalablescripts/auth-backend/blob/1a342ae404fe4a3fb6c3b416f6395e75218e1f16/app/Http/Controllers/AuthController.php
  const {email, password} = request.body;
  const userRepository = getManager().getMongoRepository(User);
  const user = await userRepository.findOne({email, password});
  if (!user) {
    response.status(HttpStatus.FORBIDDEN).send();
  }
  const jwt = JSON.stringify(user.id); // this is not how it's done! need a real jwt!
  response.cookie('jwt', jwt, {maxAge: 1000 * 60 * 60 * 24}); // one day in milliseconds
  response.status(HttpStatus.OK).send(user);
}
