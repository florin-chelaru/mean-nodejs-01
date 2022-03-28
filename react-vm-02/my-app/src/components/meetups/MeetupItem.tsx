import {useContext} from "react";

import classes from './MeetupItem.module.css';
import Meetup from "../../models/Meetup";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

interface MeetupProps {
  meetup: Meetup
}

const MeetupItem = (props: MeetupProps) => {
  const favoritesInfo = useContext(FavoritesContext);
  const itemIsFavorite = favoritesInfo.itemIsFavorite(props.meetup);
  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesInfo.removeFavorite(props.meetup);
    } else {
      favoritesInfo.addFavorite(props.meetup);
    }
  };
  return (<li className={classes.item}>
    <Card>
      <div className={classes.image}>
        <img src={props.meetup.image} alt={props.meetup.title}/>
      </div>
      <div className={classes.content}>
        <h3>{props.meetup.title}</h3>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteStatusHandler}>
          {itemIsFavorite ? 'Remove from faves' : 'Add to faves'}
        </button>
      </div>
    </Card>
  </li>);
};

export default MeetupItem;