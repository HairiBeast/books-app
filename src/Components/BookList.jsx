import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useAppContext } from "./context/appContext";
// import { useNavigate } from "react-router-dom";
// import { searchTerm } from "./SearchBar";

const BookList = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  // const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  const [query, setQuery] = useState("");
  const [url, setUrl] = useState(
    `https://example-data.draftbit.com/books?_limit=50`
  );
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [url]);

  return (
    <>
      {/* ===== Search Bar ===== */}
      <div className="wrap">
        <section
          className="search"
          onClick={() =>
            setUrl(`https://example-data.draftbit.com/books?q=${query}`)
          }
        >
          <input
            className="search-term"
            label="Name"
            placeholder="Search for a book"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button">Search</button>
        </section>
      </div>
      {/* ===== End of Search Bar ===== */}
      <section className="book-list" id="book-list">
        {books.map((book) => (
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
            {/* <div className="rating-div">
              <h3>Rating : {book.rating}</h3>
            </div> */}
            <div className="quote-div">
              <p>{book.Quote1}</p>
            </div>
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
        ))}
      </section>
    </>
  );
};

export default BookList;
