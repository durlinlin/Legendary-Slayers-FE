import React from "react";
import charsData from "../../champs.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Characters.css";
import Footer from "../Footer/Footer";

function Characters() {
  const [name, setName] = useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }; 

  return (
    <div>
    <div className="character-page-wrapper">
      <div className="title-section">
        <h4>CHOOSE YOUR</h4>
        <h1>CHAMPION</h1>
        <p>
          With more than 140 champions, you’ll find the perfect match for your
          playstyle. Master one, or master them all.
        </p>
      </div>
        <div className="search-bar">
          <form>
            <input
              type="search"
              className="select-search-input"
              placeholder="Search Champions"
              onChange={handleSearch}>
              </input>
        </form>
        </div>  
      <div className="characters-container">
        {charsData.map((char) => char.name.toLowerCase().includes(name.toLocaleLowerCase()) &&
           (
            <Link to={`/champions/${char.name}`}>
              <div className="character-card">
                <img src={`${char.image_loading}`} alt="" />
                <h1>{char.name}</h1>
              </div>
            </Link>
          )
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Characters;
