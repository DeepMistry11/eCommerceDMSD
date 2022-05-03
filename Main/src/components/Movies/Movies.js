import React, { useEffect, useState } from "react";
import "./Movies.css";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Movies(props) {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("user"));
  const [productName, setProductName] = useState([]);
  const [changeIconOnClick, changeIconOnClickFun] = useState();
  const product = productName;

  useEffect(() => {
    Axios.get(`http://localhost:3001/${props.type}`).then((response) => {
      setProductName(response.data);
      console.log(response.data);
    });
  }, [props.type]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      history.push("/login");
    }
  }, [localStorage]);

  console.log("this is the culprit", productName);

  const [addProduct, setAddProduct] = useState(false);
  const handleChangeActive = (pid, price) => {
    changeIconOnClickFun(pid);
    console.log("handle change============================", pid);
    console.log("handle change===========================prices=", price);
    Axios.post("http://localhost:3001/api/addToCart", {
      BID: "11",
      CID: JSON.stringify(userData.CID),
      // PID: JSON.stringify(productName.PID),
      PID: pid,
      Quantity: "1",
      PriceSold: price,
      // PriceSold: JSON.stringify(productName.PPrice),
    }).then((response) => {
      console.log("this is added product details", response);
    });

    setAddProduct((previousProduct) => {
      return !previousProduct;
    });
  };

  return (
    <div className="movies__container">
      <div className="movies__section">
        <div className="movies__content">
          {productName.map((val, index) => {
            console.log("inside map............", val.PID);
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
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h6 style={{ color: "white" }}>{userData.FNAME}</h6>
                    <h6 style={{ color: "whitesmoke" }} key={index}>
                      {val.PName}
                    </h6>
                    <Link
                      // onClick={setProductName}
                      // to="/cart"
                      className="cart__btn"
                    >
                      {/* {addProduct ? (
                        <i
                          class="bi bi-check-lg"
                          onClick={() =>
                            handleChangeActive(val.PID, val.PPrice)
                          }
                        ></i>
                      ) : ( */}
                      <i
                         class={changeIconOnClick === val.PID ? "bi bi-check-lg" : "bi bi-cart3"}
                        onClick={() => handleChangeActive(val.PID, val.PPrice)}
                      ></i>
                      {/* )} */}
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
