import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Meetup from "../models/Meetup";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetup: Meetup) => {
    console.log(meetup);
  };
  return (
    <section>
      <h1>Create meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  );
};

export default NewMeetupPage;
