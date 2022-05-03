import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  // setUserLogin,
  // setSignOut,
} from "../../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./Header.css";

function Header2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const [user, setUser] = useState([]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (!loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      // setUser(foundUser.FNAME);
      // console.log(foundUser.Fname);
      // setUser(foundUser);
      history.push("/login");
    }
  }, [localStorage]);

  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(
    "userdata................................................",
    userData
  );
  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user) {
  //       dispatch(
  //         setUserLogin({
  //           name: user.displayName,
  //           email: user.displayEmail,
  //           photo: user.photoUrl,
  //         })
  //       );
  //       history.push("/home");
  //     }
  //   });
  // }, []);

  // const signIn = () => {
  //   auth.signInWithPopup(provider).then((result) => {
  //     console.log("user: ", result);
  //     let user = result.user;
  //     dispatch(
  //       setUserLogin({
  //         name: user.displayName,
  //         email: user.displayEmail,
  //         photo: user.photoUrl,
  //       })
  //     );
  //     history.push("/home");
  //   });
  // };

  // const signOut = () => {
  //   auth.signOut().then(() => {
  //     dispatch(setSignOut());
  //     history.push("/login");
  //   });
  // };

  if (window.location.pathname === "/login") return null;
  if (window.location.pathname === "/register") return null;

  return (
    <div className="header__start">
      <div className="header__sidebar">
        <div className="header__sidebar__logo" style={{ marginLeft: "2%" }}>
          <NavLink to="/home" className="header__sidebar__logo">
            <img alt="xyz" src="/images/logo.svg" />
          </NavLink>
        </div>
        {/* {!userName ? (
          <div className="login__button" onClick={signIn}>
            Login
          </div>
        ) : (
          <> */}
        <div className="nav__links">
          <NavLink
            to="/search"
            activeClassName="nav__active"
            className="header__sidebar__link"
          >
            <img alt="xyz" src="/images/search-icon.svg" />
          </NavLink>

          <NavLink
            to="/"
            activeClassName="nav__active"
            className="header__sidebar__link"
          >
            {/* <img alt="xyz" src="/images/home-icon.svg" /> */}
            Home
          </NavLink>

          <NavLink
            to="/movies"
            activeClassName="nav__active"
            className="header__sidebar__link"
          >
            All Products
          </NavLink>

          <NavLink
            to="/cart"
            activeClassName="nav__active"
            className="header__sidebar__link"
          >
            Cart
            {/* <img alt="xyz" src="/images/original-icon.svg" /> */}
          </NavLink>

          <div className="user__image">
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-button-dark-example1"
                variant="secondary"
                className="dropdown__menu"
              >
                <div className="profile__name header__sidebar__link">
                  <p>{userData.Email}</p>
                </div>
                <div>
                  <img alt="profile" src="/images/hardy.jpg" />
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="/profile">My Profile</Dropdown.Item>
                {/* <Dropdown.Item href="/login">Login</Dropdown.Item> */}
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    localStorage.clear();
                    history.push("/login");
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        {/* </>
        )} */}
      </div>
    </div>
  );
}

export default Header2;
