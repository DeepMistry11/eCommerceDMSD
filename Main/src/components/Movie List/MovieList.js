import React from "react";
import { Tab } from "semantic-ui-react";
import Movies from "../Movies/Movies";
import "./MovieList.css";

const panes = [
  {
    menuItem: "All Products",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies className="movies__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "TVs",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Laptops",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Printer",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
];

function MovieList() {
  return (
    <div className="movie__list__container">
      <h2>Products</h2>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
}

export default MovieList;
