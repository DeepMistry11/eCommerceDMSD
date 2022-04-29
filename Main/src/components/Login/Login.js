import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";

function Login() {
  const [userNameLog, setUserNameLog] = useState("");
  const [userPassLog, setUserPassLog] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: userNameLog,
      password: userPassLog,
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
                <h3 class="padding--bottom-6 text-color--primary">
                  Log in with your email
                </h3>
                <fieldset class="sc-dVhcbM eiZupP">
                  <legend class="sc-fAjcbJ eIfxFy">email</legend>
                  <span style={{ position: "relative", display: "block" }}>
                    <input
                      class="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                      placeholder="Email"
                      onChange={(e) => {
                        setUserNameLog(e.target.value);
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
                      onChange={(e) => {
                        setUserPassLog(e.target.value);
                      }}
                    ></input>
                    <div class="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                  </span>
                </fieldset>
                <div>
                  <button
                    aria-label="Agree and continue"
                    class="sc-cvbbAY lbiuih button button--primary login__submit__btn"
                    onClick={login}
                  >
                    CONTINUE
                  </button>
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

export default Login;
