import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <section className="hero">
      <h1>Library App</h1>
      <article>
        <p>
          Search for a range of books using DraftBit's API which responds with
          the front-cover of a book and a selected quote.
        </p>
        <Link to="/favorites">Favorites</Link>
      </article>
    </section>
  );
};

export default Navbar;
