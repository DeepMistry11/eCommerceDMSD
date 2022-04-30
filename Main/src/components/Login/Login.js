import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";

function Login() {
  const [email, setUserNameLog] = useState("");
  const [password, setUserPassLog] = useState("");

  const [loginState, setLoginState] = useState("");

  const loggedin = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginState(response.data.message);
      } else {
        setLoginState(response.data.message[0].email);
      }
    });
  };

  return (
    <div className="login__container">
      <div id="webAppScene">
        <div id="app_scene_content">
          {/* <div className="sc-dHmInP hezKTx"></div> */}
          <main
            className="onboarding"
            id="onboarding_index"
            style={{ top: "0px" }}
          >
            <div className="onboarding-wrapper">
              <form id="dssLogin" name="dssLogin">
                <h3 className="padding--bottom-6 text-color--primary">
                  Log in with your email
                </h3>
                <fieldset className="sc-dVhcbM eiZupP">
                  <legend className="sc-fAjcbJ eIfxFy">email</legend>
                  <span style={{ position: "relative", display: "block" }}>
                    <input
                      className="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                      placeholder="Email"
                      onChange={(e) => {
                        setUserNameLog(e.target.value);
                      }}
                    ></input>
                    <div className="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                  </span>
                </fieldset>
                <fieldset className="sc-dVhcbM eiZupP">
                  <legend className="sc-fAjcbJ eIfxFy">Password</legend>
                  <span style={{ position: "relative", display: "block" }}>
                    <input
                      className="sc-jAaTju fmqfIm sc-eqIVtm csbJFj text-color--primary body-copy form-input-text"
                      placeholder="Password"
                      onChange={(e) => {
                        setUserPassLog(e.target.value);
                      }}
                    ></input>
                    <div className="metadata text-color--secondary padding--top-2 padding--left-1"></div>
                  </span>
                </fieldset>
                <div>
                  <button
                    aria-label="Agree and continue"
                    className="sc-cvbbAY lbiuih button button--primary login__submit__btn"
                    onClick={loggedin}
                  >
                    CONTINUE
                  </button>
                </div>
                <h4>{loginState}</h4>
                {/* <div style={{ marginTop: "24px" }}>
                  <p
                    className="text-button text-color--secondary padding--right-1"
                    style={{ display: "inline-block" }}
                  ></p>
                  <button
                    aria-label="Sign up"
                    className="link link--tertiary link--tertiary__hul body-copy padding--0"
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
    </div>
  );
}

export default Login;
