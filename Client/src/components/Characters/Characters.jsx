import React from "react";
import charsData from "../../champs.json";

function Characters() {
  return (
    <>
      {charsData.map((char) => {
        return (
          <div>
            <h1>{char.name}</h1>
            <p>{char.lore}</p>
          </div>
        );
      })}
    </>
  );
}

export default Characters;
