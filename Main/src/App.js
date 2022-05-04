import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import Detail from "./components/Details/Detail";
import Login from "./components/Login/Login";
import Header2 from "./components/Header/Header2";
import { AnimatePresence } from "framer-motion";
import ViewerDetails from "./components/Viewers/ViewerDetails";
import MovieList from "./components/Movie List/MovieList";
import Originals from "./components/Originals/Originals";
import Series from "./components/Series/Series";
import { useHistory } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import Cart from "./components/Cart/Cart";
import Register from "./components/Register/Register";
import ViewerComputer from "./components/Viewers/ViewerComputer";
import ViewerAcc from "./components/Viewers/ViewerAcc";
import ViewerPrinter from "./components/Viewers/ViewerPrinter";
import Stats from "./components/Stats/Stats";
import Transaction from "./components/Transaction/Transaction";

import FrequentlySoldProducts from "./components/Stats/FrequentlySoldProducts";
import BestCustomers from "./components/Stats/BestCustomers";
import MaxBasketTotal from "./components/Stats/MaxBasketTotal";
import AverageSellingProduct from "./components/Stats/averageSellingProduct";
function App() {
  const location = useLocation();
  const history = useHistory();
  var userData = localStorage.getItem("user");
  console.log("userdata.......", userData);
  return (
    <div className="App">
      <div className="Main__layout">
        <Header2 />
        {/* <button onClick={() => history.goBack()}>Go Back</button> */}
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/viewer">
              <ViewerDetails />
            </Route>
            <Route path="/allComputers">
              <ViewerComputer />
            </Route>
            <Route path="/allAcc">
              <ViewerAcc />
            </Route>
            <Route path="/allPrinters">
              <ViewerPrinter />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/originals">
              <Originals />
            </Route>
            <Route path="/transactions">
              <Transaction />
            </Route>
            <Route path="/stats">
              <Stats />
            </Route>
            <Route path="/frequentlySoldProducts">
              <FrequentlySoldProducts />
            </Route>
            <Route path="/bestCustomers">
              <BestCustomers />
            </Route>
            <Route path="/maxBasketTotal">
              <MaxBasketTotal />
            </Route>
            <Route path="/averageSellingProduct">
              <AverageSellingProduct />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
