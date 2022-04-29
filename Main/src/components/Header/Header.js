import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="nav">
      <Link to="/">
        <img alt="xyz" className="logo" src="/images/logo.svg" />
      </Link>
      <div className="nav__menu">
        <a>
          <img alt="xyz" src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <img alt="xyz" src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <img alt="xyz" src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img alt="xyz" src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img alt="xyz" src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <img alt="xyz" src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </div>
      <div className="user__image">
        <img src="/images/profile.jpg" />
      </div>
    </div>
  );
}

export default Header;
