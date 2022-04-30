import React from "react";
import { Link } from "react-router-dom";
import "./Originals.css";

function Originals() {
  return (
    <div className="originals__container">
      <div className="originals__content">
        <div className="movies__section">
          <h4>Picked for you</h4>
          <div className="originals__data">
            <Link to="/detail">
              <div className="movies__wrap">
                <img
                  alt="img"
                  src="https://dordtdiamond.files.wordpress.com/2021/03/last-dragon-review3.jpg"
                />
              </div>
            </Link>
            <div className="movies__wrap">
              <img
                alt="img"
                src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2018%2F06%2Fbanner-1200x674.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Originals;
