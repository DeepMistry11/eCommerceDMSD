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
                  src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                />
              </div>
            </Link>
            <div className="movies__wrap">
              <img
                alt="img"
                src="https://cdn.mos.cms.futurecdn.net/Ks6KtG9fx9soz6ddidT9iY-1200-80.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Originals;
