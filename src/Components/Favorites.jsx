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
    <div className="book-list">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div className="book" key={book.id}>
            <figure>
              <img
                className="book-image"
                src={book.image_url}
                alt="front cover"
              />
              <figcaption>
                <h3>{book.title}</h3>
              </figcaption>
            </figure>
            <p>{book?.Quote1}</p>
            <div className="buttons">
              {favoritesChecker(book.id) ? (
                <button
                  className="favorites-button"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove from favourites
                </button>
              ) : (
                <button
                  className="favorites-button"
                  onClick={() => addToFavorites(book)}
                >
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
