import React from "react";
import { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile() {
  const [charsIcon, setCharsIcon] = useState([])
  const [itemsData, setItemsData] = useState([])
  localStorage.getItem("token")
  let fetchItemsData = () => {
    fetch("https://legendary-slayers-be-production.up.railway.app/items/all")
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data)
      })
  }
  let fetchData = () => {
    fetch("https://legendary-slayers-be-production.up.railway.app/champions/all")
      .then((res) => res.json())
      .then((data) => {
        setCharsIcon(data)
      })
  }
  useEffect(() => {
    fetchData()
    fetchItemsData()
  }, [])
  
  return (
    <div className="user-wrapper">
      <div className="user-title-section">
        <h4>BUILD YOUR</h4>
        <h1>TEAM</h1>
        <p>
          Learn how to assemble a high-performing team with good type coverage.
        </p>
      </div>
      <div className="user-navbar">
        <h2>Username</h2>
      </div>

      <div className="user-container">
          <div className="fav-container">
            <div className="fav-champs">
              <h3>Champions</h3>
              <div className="champIcons">
              {charsIcon.map((data) => (
                <button className="eachIcon"style={{ backgroundImage: `url("${data.image_square}")` }}>{data.name}</button>
              ))}
            </div>
            </div>
            <div className="fav-items">
              <h3>Items</h3>
              <div className="champIcons">
              {itemsData.map((data) => (
                <div className="eachIcon"style={{ backgroundImage: `url("${data.full_image}")` }}>{data.name}</div>
              ))}
            </div>
            </div>
          </div>
          <div className="user-fav">
            <div className="fav-champs">
              <h3>Favorite Champions</h3>
            </div>
            <div className="fav-items">
            </div>
          </div>
          {/* <div className="user-teams">
            <div className="userTeam TeamOne"><h3>Team 1</h3></div>
            <div className="userTeam TeamTwo"><h3>Team 2</h3></div>
            <div className="userTeam TeamThree"><h3>Team 1</h3></div>
          </div> */}
        
      </div>
    </div>
  );
}

export default UserProfile;
