import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { selectMovies } from "../../features/Movie/movieSlice";
// import { useSelector } from "react-redux";
import "./Movies.css";
import Axios from "axios";

function Movies(props) {
  const [productName, setProductName] = useState([]);

  // const prop = props.type;

  // const URL = "http://localhost:3001/${props.type}"

  useEffect(() => {
    Axios.get(`http://localhost:3001/${props.type}`).then((response) => {
      setProductName(response.data);
      console.log(response.data);
    });
  }, []);

  // const movies = useSelector(selectMovies);
  // console.log("movies:", movies);

  return (
    <div className="movies__container">
      <div className="movies__section">
        <div className="movies__content">
          {productName.map((val, index) => {
            return (
              <div className="movies__wrap">
                <h4 key={index}>{val.PName}</h4>
                {/* <img src="https://m.media-amazon.com/images/M/MV5BYWRhZjUyZTktZjcyMi00MjRhLWI0ZjQtNjkxYjlmYjg4N2M0XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg" /> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
