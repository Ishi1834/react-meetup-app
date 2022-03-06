import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourites-context";

export default function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps</Link>
          </li>
          <li>
            <Link to="/new-meetups">New MeetUps</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites{" "}
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
