import React from "react";
import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function FavouritesPage(props) {
  const favouritesCtx = useContext(FavouritesContext);

  let content;

  if (favouritesCtx.totalFavourites === 0) {
    content = <p>You have no favourites.</p>;
  } else {
    content = <MeetupList meetups={favouritesCtx.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
}
