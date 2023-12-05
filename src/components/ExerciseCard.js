import React from "react";

import "../styles/components/ExerciseCard.scss";

import Exercise1 from "../images/Nordic Curl.jpg";

function ExerciseCard() {
  return (
    <div className="exerciseCardContainer">
      <div className="exerciseCard">
        <div className="imgContainer">
          <img src={Exercise1} alt="" />
        </div>

        <div className="infoContainer">
          <div className="exerciseName">Nordic Hamstring Curl</div>

          <div className="infoPiece infoPiece_largeTxtSize">
            <span className="title">Target</span>
            <span className="info">Hamstrings</span>
          </div>

          <div className="infoPiece ">
            <span className="title">Category</span>
            <span className="info">Lowerbody</span>
          </div>
          <div className="infoPiece ">
            <span className="title">Sub-category</span>
            <span className="info">Performance, Rehabilitation</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExerciseCard;
