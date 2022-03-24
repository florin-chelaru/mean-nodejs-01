import React, {RefObject} from "react";
import {useRef} from "react";

import classes from './NewMeetupForm.module.css';

import Card from "../ui/Card";
import Meetup from "../../models/Meetup";

interface MeetupProps {
  onAddMeetup: ((meetup: Meetup) => void);
}

const NewMeetupForm = (props: MeetupProps) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const addressInputRef = useRef<HTMLInputElement>(null);
  const descriptionTextareaRef = useRef<HTMLTextAreaElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current?.value || '';
    const enteredImage = imageInputRef.current?.value || '';
    const enteredAddress = addressInputRef.current?.value || '';
    const enteredDescription = descriptionTextareaRef.current?.value || '';

    const meetup = new Meetup(undefined, enteredTitle, enteredImage, enteredAddress, enteredDescription);
    props.onAddMeetup(meetup);
  };
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' required id='title' ref={titleInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='image'>Image URL</label>
        <input type='url' required id='image' ref={imageInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='address'>Address</label>
        <input type='text' required id='address' ref={addressInputRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Description</label>
        <textarea required id='description' rows={5} ref={descriptionTextareaRef}/>
      </div>
      <div className={classes.actions}>
        <button>Add meetup</button>
      </div>
    </form>
  </Card>
    ;
}

export default NewMeetupForm;
