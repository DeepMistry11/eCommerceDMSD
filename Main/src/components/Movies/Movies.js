import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { selectMovies } from "../../features/Movie/movieSlice";
// import { useSelector } from "react-redux";
import "./Movies.css";
import Axios from "axios";
import { Link } from "react-router-dom";

function Movies(props) {
  const [productName, setProductName] = useState([]);

  const initial = <i class="bi bi-cart3"></i>;
  const clicked = <i class="bi bi-check-lg"></i>;

  const [addProduct, setAddProduct] = useState(false);
  const handleChangeActive = () => {
    setAddProduct((previousProduct) => {
      return !previousProduct;
    });
  };

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
              <>
                <div>
                  <div
                    className="movies__wrap"
                    style={{ marginBottom: "10px" }}
                  >
                    <img src="https://m.media-amazon.com/images/M/MV5BYWRhZjUyZTktZjcyMi00MjRhLWI0ZjQtNjkxYjlmYjg4N2M0XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg" />
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 style={{ color: "whitesmoke" }} key={index}>
                      {val.PName}
                    </h6>
                    <Link
                      // onClick={setProductName}
                      // to="/cart"
                      className="cart__btn"
                    >
                      {addProduct ? (
                        <i
                          class="bi bi-check-lg"
                          onClick={() => handleChangeActive()}
                        ></i>
                      ) : (
                        <i
                          class="bi bi-cart3"
                          onClick={() => handleChangeActive()}
                        ></i>
                      )}
                      {/* <i class="bi bi-cart3"></i>
                      <i class="bi bi-check-lg"></i> */}
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
