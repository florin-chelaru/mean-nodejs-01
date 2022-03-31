import {Request, Response} from "express";
import {getManager} from "typeorm";
import Meetup from "../entity/Meetup";

export async function createMeetupAction(request: Request, response: Response) {
  const meetup: Meetup = request.body;
  delete meetup.id;
  // console.log(meetup);
  const meetupRepository = getManager().getMongoRepository(Meetup);
  await meetupRepository.insertOne(meetup);
  const meetups = await meetupRepository.find();
  // response.send(meetups);
  response.status(200).send();
}
