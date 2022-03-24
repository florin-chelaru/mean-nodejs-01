import {useState, useEffect} from "react";

import Meetup from "../models/Meetup";
import MeetupList from "../components/meetups/MeetupList";

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadedMeetups, setLoadedMeetups] = useState<Meetup[]>([]);

  const getMeetups = async () => {
    const response = await fetch('http://192.168.64.10:3000/meetups');
    const meetups: Meetup[] = await response.json();
    return meetups;
  }

  useEffect(() => {
      setIsLoading(true);
      getMeetups().then((meetups) => {
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
    },
    // only execute when the below dependencies change. and since there's no dependency, it only executes once.
    []);

  if (isLoading) {
    return <section>
      <p>Loading...</p>
    </section>;
  }

  return (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups}/>
    </section>
  );
};

export default AllMeetupsPage;
