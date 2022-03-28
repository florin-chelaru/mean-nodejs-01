import {createContext, Dispatch, SetStateAction, useState} from "react";
import Meetup from "../models/Meetup";
import meetup from "../models/Meetup";

class FavoritesInfo {
  favorites: Meetup[];
  setUserFavorites: Dispatch<SetStateAction<Meetup[]>>;

  addFavorite(meetup: Meetup): void {
    this.setUserFavorites(
      (prevUserFavorites: Meetup[]) => prevUserFavorites.concat(meetup)
    );
  }

  removeFavorite(meetup: Meetup): void {
    this.setUserFavorites(
      (prevUserFavorites: Meetup[]) => prevUserFavorites.filter(f => f.id !== meetup.id)
    );
  }

  itemIsFavorite(meetup: Meetup): boolean {
    return this.favorites.some(f => f.id === meetup.id);
  }

  constructor(favorites?: Meetup[], setUserFavorites?: Dispatch<SetStateAction<Meetup[]>>) {
    this.favorites = favorites || [];
    this.setUserFavorites = setUserFavorites || (() => {
    });
  }
}

const FavoritesContext = createContext(new FavoritesInfo());

export const FavoritesContextProvider = ({children}: any) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);
  const info = new FavoritesInfo(userFavorites, setUserFavorites);

  return <FavoritesContext.Provider value={info}>
    {children}
  </FavoritesContext.Provider>;
};

export default FavoritesContext;