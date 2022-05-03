import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./transaction.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Transaction() {
  const history = useHistory();
  const userData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      history.push("/login");
    }
  }, [localStorage]);

  const [userCnum, setUserCnum] = useState("");
  const [userSnum, setUserSnum] = useState("");
  const [userOname, setUserOname] = useState("");
  const [userCtype, setUserCtype] = useState("");
  const [userBadd, setUserBadd] = useState("");
  const [userExdate, setUserExdate] = useState("");
  const [userStoredC, setUserStoredC] = useState("");
  const [userSname, setUserSname] = useState("");
  const [userRname, setUserRname] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userSnumb, setUserSnumb] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userZip, setUserZip] = useState("");
  const [userState, setUserState] = useState("");
  const [userCountry, setUserCountry] = useState("");
  //   const [userAdd, setUserAdd] = useState("");
  //   const [userPhone, setUserPhone] = useState("");
  //   const [userPass, setUserPass] = useState("");

  const userCard = () => {
    Axios.post("http://localhost:3001/card", {
      cnum: userCnum,
      snum: userSnum,
      oname: userOname,
      ctype: userCtype,
      badd: userBadd,
      exdate: userExdate,
      storedc: userData.CID,
    }).then((response) => {
      console.log(response);
    });
  };

  const userAdd = () => {
    Axios.post("http://localhost:3001/address", {
      cid: userData.CID,
      sname: userSname,
      rname: userRname,
      street: userStreet,
      snumber: userSnumb,
      city: userCity,
      zip: userZip,
      state: userState,
      country: userCountry,
    }).then((response) => {
      console.log(response);
    });
  };

  const userOrders = () => {
    Axios.post("http://localhost:3001/orders", {
      cnum: userCnum,
      cid: userData.CID,
      sname: userSname,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="">
      {/* <div class="onboarding">
        <div class="sc-gmeYpB jFrWSa">
          <div class="sc-RcBXQ imCLwS">
            <div
              class="sc-cHGsZl gSVDmn"
              aria-label="logo"
              title="logo"
              style={{ width: "100%", height: "100%", margin: "10px" }}
            >
              <div class="logo container--hw-full"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div id="webAppScene">
        <div id="app_scene_content">
          {/* <div class="sc-dHmInP hezKTx"></div> */}
          <main class="onboarding" id="onboarding_index" style={{ top: "0px" }}>
            <div
              class="onboarding-wrapper"
              style={{
                maxWidth: "75%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <form
                id="dssLogin"
                name="dssLogin"
                style={{ marginRight: "70px" }}
              >
                <div>
                  <h3
                    class="padding--bottom-6 text-color--primary"
                    style={{ marginBottom: "20px" }}
                  >
                    Add Shipping Address
                  </h3>
                  <fieldset
                    class="sc-dVhcbM eiZupP"
                    style={{ width: "48%", marginRight: "4%" }}
                  >
                    <legend class="sc-fAjcbJ eIfxFy">Address Name</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Address Name"
                        type="text"
                        onChange={(e) => {
                          setUserSname(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP" style={{ width: "48%" }}>
                    <legend class="sc-fAjcbJ eIfxFy">Recepient Name</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Recepient Name"
                        type="text"
                        onChange={(e) => {
                          setUserRname(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">Street</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Street"
                        type="text"
                        onChange={(e) => {
                          setUserStreet(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset
                    class="sc-dVhcbM eiZupP"
                    style={{ width: "48%", marginRight: "4%" }}
                  >
                    <legend class="sc-fAjcbJ eIfxFy">Street Number</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Street Number"
                        type="text"
                        onChange={(e) => {
                          setUserSnumb(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP" style={{ width: "48%" }}>
                    <legend class="sc-fAjcbJ eIfxFy">Zip</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Zip"
                        type="text"
                        onChange={(e) => {
                          setUserZip(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">City</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="City"
                        onChange={(e) => {
                          setUserCity(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">State</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="State"
                        onChange={(e) => {
                          setUserState(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">Country</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Country"
                        onChange={(e) => {
                          setUserCountry(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                </div>
                <div>
                  <h3
                    class="padding--bottom-6 text-color--primary"
                    style={{ marginBottom: "20px" }}
                  >
                    Add Card Details
                  </h3>
                  <fieldset
                    class="sc-dVhcbM eiZupP"
                    style={{ width: "48%", marginRight: "4%" }}
                  >
                    <legend class="sc-fAjcbJ eIfxFy">Credit Card Number</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Credit card number"
                        type="text"
                        onChange={(e) => {
                          setUserCnum(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP" style={{ width: "48%" }}>
                    <legend class="sc-fAjcbJ eIfxFy">Last Name</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Security number"
                        type="text"
                        onChange={(e) => {
                          setUserSnum(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">Address</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Owner Name"
                        type="text"
                        onChange={(e) => {
                          setUserOname(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset
                    class="sc-dVhcbM eiZupP"
                    style={{ width: "48%", marginRight: "4%" }}
                  >
                    <legend class="sc-fAjcbJ eIfxFy">Email</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Credit card type"
                        type="text"
                        onChange={(e) => {
                          setUserCtype(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP" style={{ width: "48%" }}>
                    <legend class="sc-fAjcbJ eIfxFy">Phone</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Billing address"
                        type="text"
                        onChange={(e) => {
                          setUserBadd(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">Password</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="Expiry Date"
                        onChange={(e) => {
                          setUserExdate(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                  <fieldset class="sc-dVhcbM eiZupP">
                    <legend class="sc-fAjcbJ eIfxFy">Password</legend>
                    <span style={{ position: "relative", display: "block" }}>
                      <input
                        class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                        placeholder="stored Card ID"
                        type=""
                        onChange={(e) => {
                          setUserStoredC(e.target.value);
                        }}
                      ></input>
                      <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                    </span>
                  </fieldset>
                </div>

                <div>
                  <button
                    aria-label="Agree and continue"
                    class="sc-cvbbAY lbiuih button button--primary login__submit__btn"
                    onClick={() => {
                      userCard();
                      userAdd();
                      userOrders();
                      history.push("/");
                    }}
                  >
                    Complete Payment
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>

      {/* <div className="CTA">
        <img className="CTA__logo1" src="/images/cta-logo-one.svg" alt="logo" />
        <a className="signup__button">GET ALL THESE</a>
        <div className="login__description">
          <p>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
        </div>
        <img className="CTA__logo2" src="/images/cta-logo-two.png" alt="logo" />
      </div> */}
    </div>
  );
}

export default Transaction;
