import classes from './MeetupList.module.css'

import Meetup from '../../models/Meetup';
import MeetupItem from './MeetupItem';

interface MeetupListProps {
  meetups: Meetup[];
}

const MeetupList = (props: MeetupListProps) =>
  <ul className={classes.list}>
    {props.meetups.map(meetup => <MeetupItem meetup={meetup} key={meetup.id}/>)}
  </ul>
;

export default MeetupList;