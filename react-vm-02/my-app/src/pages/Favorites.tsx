import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const favoritesInfo = useContext(FavoritesContext);
  return (<section>
    <h1>Favorite meetups</h1>
    {favoritesInfo.favorites.length === 0 ? <p>No faves</p> : <MeetupList meetups={favoritesInfo.favorites}/>}
  </section>);
};

export default FavoritesPage;
