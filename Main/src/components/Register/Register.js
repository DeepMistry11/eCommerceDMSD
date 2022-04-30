import React, { useState } from "react";
import Axios from "axios";
import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userLname, setUserLname] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");

  const registerUser = () => {
    Axios.post("http://localhost:3001/register", {
      fname: userName,
      lname: userLname,
      address: userAdd,
      phone: userPhone,
      email: userEmail,
      password: userPass,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="login__container">
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
            <div class="onboarding-wrapper">
              <form id="dssLogin" name="dssLogin">
                <h3
                  class="padding--bottom-6 text-color--primary"
                  style={{ marginBottom: "20px" }}
                >
                  Register
                </h3>
                <fieldset
                  class="sc-dVhcbM eiZupP"
                  style={{ width: "48%", marginRight: "4%" }}
                >
                  <legend class="sc-fAjcbJ eIfxFy">First Name</legend>
                  <span style={{ position: "relative", display: "block" }}>
                    <input
                      class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                      placeholder="First Name"
                      type="text"
                      onChange={(e) => {
                        setUserName(e.target.value);
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
                      placeholder="Last Name"
                      type="text"
                      onChange={(e) => {
                        setUserLname(e.target.value);
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
                      placeholder="Address"
                      type="text"
                      onChange={(e) => {
                        setUserAdd(e.target.value);
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
                      placeholder="Email"
                      type="text"
                      onChange={(e) => {
                        setUserEmail(e.target.value);
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
                      placeholder="Phone"
                      type="text"
                      onChange={(e) => {
                        setUserPhone(e.target.value);
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
                      placeholder="Password"
                      type="password"
                      onChange={(e) => {
                        setUserPass(e.target.value);
                      }}
                    ></input>
                    <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                  </span>
                </fieldset>
                <div>
                  <button
                    aria-label="Agree and continue"
                    class="sc-cvbbAY lbiuih button button--primary login__submit__btn"
                    onClick={registerUser}
                  >
                    Signup
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ marginTop: "10px", marginRight: "5px" }}>
                    Already a customer?
                  </h6>{" "}
                  <Link to="/login">Login</Link>
                </div>
                {/* <div style={{ marginTop: "24px" }}>
                  <p
                    class="text-button text-color--secondary padding--right-1"
                    style={{ display: "inline-block" }}
                  ></p>
                  <button
                    aria-label="Sign up"
                    class="link link--tertiary link--tertiary__hul body-copy padding--0"
                    style={{ display: "inline-block" }}
                  >
                    Sign up
                  </button>
                </div> */}
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

export default Register;
