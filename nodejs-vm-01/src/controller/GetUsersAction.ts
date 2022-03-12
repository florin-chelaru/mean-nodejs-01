import {Request, Response} from "express";
import {getManager} from "typeorm";
import {User} from "../entity/User";

/**
 * Loads all users from the database.
 */
export async function getUsersAction(request: Request, response: Response) {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();
    response.send(users);
}
