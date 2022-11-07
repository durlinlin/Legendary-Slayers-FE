import React from "react";
import charsData from "../../champs.json";
import { Link } from "react-router-dom";
import "./Characters.css";

function Characters() {
  return (
    <div className="character-page-wrapper">
      <div className="title-section">
        <h4>CHOOSE YOUR</h4>
        <h1>CHAMPION</h1>
        <p>
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </p>
      </div>
      <div className="characters-container">
        {charsData.map((char) => {
          return (
            <Link to={`/champions/${char.name}`}>
              <div className="character-card">
                <img src={`${char.image_loading}`} alt="" />
                <h1>{char.name}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Characters;
