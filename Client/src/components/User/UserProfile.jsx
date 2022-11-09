import React from "react";
import { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile(props) {
  const [charsIcon, setCharsIcon] = useState([])
  const [itemsData, setItemsData] = useState([])
  const [userName, setUserName] = useState([])
  const [charsFav, setCharsFav] = useState([])
  const [itemsFav, setItemsFav] = useState([])
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
  
  let fetchUserData = () => {
    fetch("https://legendary-slayers-be-production.up.railway.app/users/name/victor")
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0].userName, data[0].favCharacters)
        setUserName(data[0].userName)
        setCharsFav(data[0].favCharacters)
        setItemsFav(data[0].favItems)
      })
  }

  let addItemFav = (event) => {
    fetch(`https://legendary-slayers-be-production.up.railway.app/users/name/victor/items/${event.target.id}`,
    {
      method: "PUT"
    })
  }

  let addCharFav = (event) => {
    fetch(`https://legendary-slayers-be-production.up.railway.app/users/name/victor/champions/${event.target.id}`,
    {
      method: "PUT"
    })
  }

  useEffect(() => {
    fetchData()
    fetchItemsData()
  }, [])

  useEffect(() => {
    fetchUserData()
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
        <h2>{userName}</h2>
      </div>

      <div className="user-container">
          <div className="fav-container">
            <div className="fav-champs">
              <h3>Champions</h3>
              <div className="champIcons">
              {charsIcon.map((data) => (
                <button id={data._id} onClick={addCharFav}className="eachIcon"style={{ backgroundImage: `url("${data.image_square}")` }}>{data.name}</button>
              ))}
              </div>
            </div>
            <div className="fav-items">
              <h3>Items</h3>
              <div className="champIcons">
              {itemsData.map((data) => (
                <button id={data._id} onClick={addItemFav}className="eachIcon"style={{ backgroundImage: `url("${data.full_image}")` }}>{data.name}</button>
              ))}
              </div>
            </div>
          </div>
          <div className="user-fav">
            <div className="userFav favChamps">
              <h3>Favorite Champions</h3>
              <div className="champIcons">
              {charsFav.map((data) => (
                <button className="eachIcon"style={{ backgroundImage: `url("${data.image_square}")` }}>{data.name}</button>
              ))}
              </div>
            </div>
            <div className="userFav favItems">
              <h3>Favorite Items</h3>
              <div className="champIcons">
              {itemsFav.map((data) => (
                <button className="eachIcon"style={{ backgroundImage: `url("${data.full_image}")` }}>{data.name}</button>
              ))}
              </div>
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
