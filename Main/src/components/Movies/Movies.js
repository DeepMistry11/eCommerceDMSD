import React from "react";
import { Link } from "react-router-dom";
import { selectMovies } from "../../features/Movie/movieSlice";
import { useSelector } from "react-redux";
import "./Movies.css";

function Movies(props) {
  const movies = useSelector(selectMovies);
  console.log("movies:", movies);

  return (
    <div className="movies__container">
      <div className="movies__section">
        <div className="movies__content">
          <div className="movies__wrap">
            <img src="https://m.media-amazon.com/images/M/MV5BYWRhZjUyZTktZjcyMi00MjRhLWI0ZjQtNjkxYjlmYjg4N2M0XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg" />
          </div>
          <h3 className="movie__fonts">name</h3>
          <h3 className="movie__fonts">type</h3>
          <h3 className="movie__fonts">price</h3>
          <div className="movies__wrap">
            <img src="https://cdn.mos.cms.futurecdn.net/DEpYy8jSdvD9dkvVDSPNoD.jpg" />
          </div>
          <div className="movies__wrap">
            <img src="https://www.indiewire.com/wp-content/uploads/2021/03/falcoln-winter-soldier.png?w=780" />
          </div>
          <div className="movies__wrap">
            <img src="/images/zootopia.jpg" />
          </div>
          <div className="movies__wrap">
            <img src="/images/one.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
