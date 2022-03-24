import {Link} from "react-router-dom";

import classes from './MainNavigation.module.css';

const MainNavigation = () =>
  <header className={classes.header}>
    <div className={classes.logo}>React meetups</div>
    <nav>
      <ul>
        <li><Link to='/'>All meetups</Link></li>
        <li><Link to='/favorites'>Faves</Link></li>
        <li><Link to='/new-meetup'>New meetup</Link></li>
      </ul>
    </nav>
  </header>
;

export default MainNavigation;