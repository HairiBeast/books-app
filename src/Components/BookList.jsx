import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

const BookList = () => {
  const API_URL = process.env.REACT_APP_API_URL;
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div className="book-list"></div>;
};

export default BookList;
