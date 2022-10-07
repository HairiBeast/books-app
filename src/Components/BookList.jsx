import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { useAppContext } from "./context/appContext";

const BookList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [books, setBooks] = useState([]);

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className="book-list">
      {books.map((book) => (
        <div className="book" key={book.id}>
          <div>
            <h4>{book.title}</h4>
          </div>
          <div>
            <img src={book.image_url} alt="front cover" />
          </div>
          <div>
            <button>Add to favourites</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
