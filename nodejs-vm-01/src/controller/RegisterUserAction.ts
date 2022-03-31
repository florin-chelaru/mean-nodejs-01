import {Request, Response} from "express";
import {getManager} from "typeorm";
import User from "../entity/User";

export async function createUserAction(request: Request, response: Response) {
  const user: User = request.body;
  const userRepository = getManager().getMongoRepository(User);
  const result = await userRepository.insertOne(user);
  const insertedUser = await userRepository.findOne(result.insertedId);
  response.status(200).send(insertedUser);
}
