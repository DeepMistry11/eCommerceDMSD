//? This is old header2 file with authentication using redux... the other one is using react only.

import React, { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../../features/User/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import "./Header.css";

function OldHeader2() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.displayEmail,
            photo: user.photoUrl,
          })
        );
        history.push("/home");
        let user = user.displayName;
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log("user: ", result);
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.displayEmail,
          photo: user.photoUrl,
        })
      );
      history.push("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      history.push("/login");
    });
  };

  return (
    <div>
      <div className="header__sidebar">
        <NavLink to="" className="header__sidebar__logo">
          <img alt="xyz" src="/images/logo.svg" />
        </NavLink>
        {!userName ? (
          <div className="login__button" onClick={signIn}>
            Login
          </div>
        ) : (
          <>
            <div className="nav__links">
              <Tooltip title="Search" placement="right" arrow>
                <NavLink
                  to="/search"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/search-icon.svg" />
                </NavLink>
              </Tooltip>

              <Tooltip title="Home" placement="right" arrow>
                <NavLink
                  to="/"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/home-icon.svg" />
                </NavLink>
              </Tooltip>

              <Tooltip title="Watchlist" placement="right" arrow>
                <NavLink
                  to="/watchlist"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/watchlist-icon.svg" />
                </NavLink>
              </Tooltip>

              <Tooltip title="Movies" placement="right" arrow>
                <NavLink
                  to="/movies"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/movie-icon.svg" />
                </NavLink>
              </Tooltip>

              <Tooltip title="Series" placement="right" arrow>
                <NavLink
                  to="/series"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/series-icon.svg" />
                </NavLink>
              </Tooltip>

              <Tooltip title="Originals" placement="right" arrow>
                <NavLink
                  to="/originals"
                  activeClassName="nav__active"
                  className="header__sidebar__link"
                >
                  <img alt="xyz" src="/images/original-icon.svg" />
                </NavLink>
              </Tooltip>
            </div>
            <div className="user__image">
              <img onClick={signOut} alt="profile" src="/images/hardy.jpg" />
              <p>{user}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OldHeader2;
