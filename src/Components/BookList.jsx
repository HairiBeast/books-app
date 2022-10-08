import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, [API_URL]);

  return (
    <>
      <div className="search-bar">
        <input className="search-input" />
      </div>
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
