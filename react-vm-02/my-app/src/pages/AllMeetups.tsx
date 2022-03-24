import Meetup from "../models/Meetup";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  new Meetup(
    'm1',
    'This is a first meetup',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    'Meetupstreet 5, 12345 Meetup City',
    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
  ),
  new Meetup(
    'm2',
    'This is a second meetup',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    'Meetupstreet 5, 12345 Meetup City',
    'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!'
  )
];

const AllMeetupsPage = () =>
  <section>
    <h1>All meetups</h1>
    <MeetupList meetups={DUMMY_DATA} />
  </section>
;

export default AllMeetupsPage;
