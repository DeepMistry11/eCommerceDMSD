import React from "react";
import { Tab } from "semantic-ui-react";
import Movies from "../Movies/Movies";
import "./Series.css";

const panes = [
  {
    menuItem: "A-Z",
    render: () => (
      <Tab.Pane attached={false}>
        <Movies className="series__list" />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Originals",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Action/Adventure",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Comedy",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "SciFi/Fantasy",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Shorts",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
  {
    menuItem: "Kids",
    render: () => <Tab.Pane attached={false}></Tab.Pane>,
  },
];

function Series() {
  return (
    <div className="series__list__container">
      <h2>Series</h2>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      {/* <div className="radial-gradient"></div> */}
    </div>
  );
}

export default Series;
