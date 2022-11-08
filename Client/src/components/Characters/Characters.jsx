import React from "react";
import charsData from "../../champs.json";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Characters.css";
import Footer from "../Footer/Footer";

function Characters() {
  const [searchName, setSearchName] = useState("")
  const [champClass, setChampClass] = useState("")
  const [classID, setClassID] = useState("")

  const handleChampSearch = (e) => {
    e.preventDefault();
    setSearchName(e.target.value)
  }; 
  const handleClassSearch = (e) => {
    e.preventDefault();
    setClassID(e.target.id)
    setChampClass(e.target.dataset.value.toString())
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
        <div className="filter-container">
          <form className="search-bar">
            <input
              type="search"
              className="select-search-input"
              placeholder="Search Champions"
              onChange={handleChampSearch}>
              </input>
          </form>
          <form className="champClass">
            <button id="all" data-value="" onClick={handleClassSearch}>All</button>
            <button id="assassin" data-value="assassin" onClick={handleClassSearch}>Assassins</button>
            <button id="fighter" data-value="fighter" onClick={handleClassSearch}>Fighters</button>
            <button id="mage" data-value="mage" onClick={handleClassSearch}>Mages</button>
            <button id="marksman" data-value="marksman" onClick={handleClassSearch}>Marksmen</button>
            <button id="support" data-value="support" onClick={handleClassSearch}>Supports</button>
            <button id="tank" data-value="tank" onClick={handleClassSearch}>Tanks</button>
          </form>
        </div>  
      <div className="characters-container">
          {charsData.map((char) =>
            char.name.toLowerCase().includes(searchName.toLowerCase()) &&
            char.tags.join().toLowerCase().includes(champClass) &&
           (
            <Link to={`/champions/${char.name}`}>
              <div className="character-card">
                <img src={`${char.image_loading}`} alt="" ></img>
                <div className="champ-name"><h4>{char.name}</h4></div>
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
