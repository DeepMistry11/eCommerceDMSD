import React from "react";
import { Link } from "react-router-dom";
import "./Viewers.css";

function Viewers() {
  return (
    <div className="viewers__container">
      <Link to="/allComputers">
        <div className="viewers__wrap disney__hover">
          <img
            src="https://cdn.mos.cms.futurecdn.net/3tQfZWCFCLVbkQ5ZyaPaTc.jpg"
            alt="logo"
          />
        </div>
      </Link>
      <Link to="/viewer">
        <div className="viewers__wrap marvel__hover">
          <img
            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604278672000"
            alt="logo"
          />
        </div>
      </Link>
      <Link to="/allAcc">
        <div className="viewers__wrap starwars__hover">
          <img
            src="https://asia.canon/media/image/2020/08/20/1d9293898956405399672948583c3085_ProH_SS1-w-paper_EN_edited_small-570x400.png"
            alt="logo"
          />
        </div>
      </Link>
    </div>
  );
}

export default Viewers;
