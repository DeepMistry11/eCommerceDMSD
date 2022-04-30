import React from "react";
import { Tab } from "semantic-ui-react";
import Movies from "../Movies/Movies";
import "./MovieList.css";

const panes = [
  {
    menuItem: "All Products",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies type="allProducts" className="movies__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Computers",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies type="computers" className="movies__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Laptops",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies type="laptops" className="movies__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Printer",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies className="movies__list" />
      </Tab.Pane>
    ),
  },
];

function MovieList() {
  return (
    <div className="movie__list__container">
      <h3 style={{ color: "whitesmoke" }}>Products</h3>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
}

export default MovieList;
