import React from "react";
import { useHistory } from "react-router-dom";
import "./goBack.css";

function GoBack() {
  const history = useHistory();
  return (
    <div class="back__button">
      <button onClick={() => history.goBack()}>
        <span>
          <i class="fa fa-hand-o-left" aria-hidden="true"></i>
        </span>
      </button>
    </div>
  );
}

export default GoBack;
