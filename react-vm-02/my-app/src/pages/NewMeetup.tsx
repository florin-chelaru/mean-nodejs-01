import {useNavigate} from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Meetup from "../models/Meetup";

const NewMeetupPage = () => {
  const navigate = useNavigate();
  const addMeetupHandler = async (meetup: Meetup) => {
    await fetch(
      'http://192.168.64.10:3000/meetup',
      {
        method: 'POST',
        body: JSON.stringify(meetup),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    navigate('/');
  };
  return (
    <section>
      <h1>Create meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
};

export default NewMeetupPage;
