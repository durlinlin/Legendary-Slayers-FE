import React from "react";
import "./Map.css";
import MAP from "./MAP.png";
import { Link } from "react-router-dom";

function Map() {
  return (
    <>
      <div className="map-wraper">
        <img className="game-map" src={MAP} alt="Map" />
        <div className="all-info">
          <p className="first-line">START YOUR</p>
          <p className="second-line">LEGEND</p>
          <p className="third-line">
            new to League? Get a rundown on the basics for the most popular game
            mode.
          </p>
          <div className="buttons-tag">
            <Link to="/signIn">
              <button className="button-one" onClick={"/"}>
                Get Started
              </button>
            </Link>
            <Link to="/signIn">
              <button className="button-two" onClick={"/"}>
               Play For Free
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map;
