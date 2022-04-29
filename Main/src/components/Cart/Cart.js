import React from "react";
import "./cart.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { QuantityPicker } from "react-qty-picker";

function Cart() {
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
          <div className="prof__mail">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell cart__details">
              <div class="sc-fNHLbd enGimF cart__product">
                <img src="https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703" />
                {/* <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p> */}
              </div>
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  <b>Apple Macbook Pro</b>
                </p>
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Type: askjgas
                </p>
              </div>
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  <b>Price</b>
                </p>
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  $1099
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
                  $1099
                </p>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell cart__details">
              <div class="sc-fNHLbd enGimF cart__product">
                <img src="https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8aea820-28a0-11eb-9f89-5ddd62987703" />
                {/* <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  deepmistry753@gmail.com
                </p> */}
              </div>
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  <b>Apple Macbook Pro</b>
                </p>
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  Type: askjgas
                </p>
              </div>
              <div class="sc-fNHLbd enGimF">
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  <b>Price</b>
                </p>
                <p class="body-copy margin--0 body-copy--heavy truncate text-color--primary">
                  $1099
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
                  $1099
                </p>
              </div>
            </div>
          </div>
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
                  $1300
                </div>
              </div>
            </div>
          </div>
          <div className="prof__pass">
            <div class="sc-ciodno sc-ccbnFN cxDKXM sc-hSmEHG cChrsE cell">
              <div class="sc-fNHLbd enGimF">
                <button className="checkout__btn">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
