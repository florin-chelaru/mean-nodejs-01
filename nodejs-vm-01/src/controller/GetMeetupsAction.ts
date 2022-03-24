import {Request, Response} from "express";
import {getManager} from "typeorm";
import Meetup from "../entity/Meetup";

export async function getMeetupsAction(request: Request, response: Response) {
  const meetupRepository = getManager().getRepository(Meetup);
  const meetups = await meetupRepository.find();
  response.send(meetups);
}
