import {Link} from "react-router-dom";
import {useContext} from "react";

import classes from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoritesInfo = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React meetups</div>
      <nav>
        <ul>
          <li><Link to='/'>All meetups</Link></li>
          <li>
            <Link to='/favorites'>
              Faves
              <span className={classes.badge}>{favoritesInfo.favorites.length}</span>
            </Link>
          </li>
          <li><Link to='/new-meetup'>New meetup</Link></li>
        </ul>
      </nav>
    </header>);
};

export default MainNavigation;