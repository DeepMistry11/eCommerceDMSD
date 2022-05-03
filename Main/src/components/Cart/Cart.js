import React, { useState, useEffect } from "react";
import "./cart.css";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import Dropdown from "react-bootstrap/Dropdown";
import { QuantityPicker } from "react-qty-picker";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Cart(props) {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      history.push("/login");
    }
  }, [localStorage]);

  const [productName, setProductName] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/displayCart`).then((response) => {
      setProductName(response.data);
      console.log("this is response ######", response.data);
    });
  }, [props.type]);

  const darta = [
    {
      max: 1,
    },
  ];
  return (
    <div className="account__setting">
      <h2 class="margin--bottom-4 text-color--primary cart__head">My Cart</h2>
      <div className="account__div__cart">
        <div className="prof__section jDcTkg cart__main">
          {productName.map((val, index) => {
            return (
              <>
                <div className="prof__mail">
                  <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell cart__details">
                    <div class="sc-fNHLbd enGimF cart__product">
                      <img src="https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703" />
                    </div>
                    <div class="sc-fNHLbd enGimF">
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        <b>{val.PName}</b>
                      </p>
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        Type: {val.PType}
                      </p>
                    </div>
                    <div class="sc-fNHLbd enGimF">
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        <b>Price</b>
                      </p>
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        ${val.PriceSold}
                      </p>
                    </div>
                    <div class="sc-fNHLbd enGimF">
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary quantity__text">
                        <b>Quantity</b>
                      </p>
                      <div>
                        <div className="App">
                          <QuantityPicker />
                        </div>
                      </div>
                    </div>
                    <div class="sc-fNHLbd enGimF">
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        <b>Total</b>
                      </p>
                      <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                        ${val.PriceSold}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className="prof__section jDcTkg cart__summary">
          <div className="prof__head">
            <p class="body-copy margin--0 truncate text-color--section-header">
              Cart Summary
            </p>
          </div>
          <div className="prof__mail">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF flexed">
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Shipping Cost
                </div>
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  $120
                </div>
              </div>
              <div></div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF flexed">
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Discount
                </div>
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  - $50
                </div>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF flexed">
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Estimated Total
                </div>
                <div class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  {/* ${val.PriceSold} */}
                </div>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <Link to="/transactions" className="checkout__btn">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
