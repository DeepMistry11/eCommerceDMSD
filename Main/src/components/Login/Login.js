import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();

  const [email, setUserNameLog] = useState("");
  const [password, setUserPassLog] = useState("");
  const [loginState, setLoginState] = useState("");
  // const [user, setUser] = useState();

  const loggedin = (e) => {
    e.preventDefault();
    const user = { email: email, password: password };
    Axios.post(
      "http://localhost:3001/login",
      user
      // {
      // email: email,
      // password: password,
      // }
    ).then((response) => {
      // setUser(response.data);
      localStorage.setItem("user", JSON.stringify(response.data[0]));
      console.log(response.data);
      if (response.data.message) {
        setLoginState(response.data.message);
      } else {
        setLoginState(response.data[0].email);
        history.push("/movies");
      }
    });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser);
      // setUser(foundUser);
      history.push("/home");
    }
  }, []);

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
                <h3
                  className="padding--bottom-6 text-color--primary"
                  style={{ marginBottom: "20px" }}
                >
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
                    type="button"
                    onClick={loggedin}
                  >
                    CONTINUE
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h6 style={{ marginTop: "10px", marginRight: "5px" }}>
                    Need an account?
                  </h6>{" "}
                  <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Login;
