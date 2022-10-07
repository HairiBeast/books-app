import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("favourites are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div className="book" key={book.id}>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div>
              <img src={book.image_url} alt="front cover" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book.id)}>
                  Remove from favourites
                </button>
              ) : (
                <button onClick={() => addToFavorites(book)}>
                  Add to favourites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any favourite books yet!</h1>
      )}
    </div>
  );
};

export default Favorites;
