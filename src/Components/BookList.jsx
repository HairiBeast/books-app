import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
// import { searchTerm } from "./SearchBar";

const BookList = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

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
      <section
        onClick={() =>
          setUrl(`https://example-data.draftbit.com/books?q=${query}`)
        }
      >
        <input
          label="Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Search</button>
      </section>
      <div className="book-list">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <div>
              <h4>{book.title}</h4>
            </div>
            <div className="container">
              <img
                src={book.image_url}
                alt="front cover"
                onClick={() => navigate(`/books/${book.id}`)}
              />
              <div className="middle">
                <div className="text">Details</div>
              </div>
            </div>
            <div>
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
      </div>
    </>
  );
};

export default BookList;
