import React from "react";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react";
import "./UserProfile.css";
import { signOut } from "../../services/Users.js"

function UserProfile(props) {
  const [charsIcon, setCharsIcon] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [userName, setUserName] = useState([]);
  const [charsFav, setCharsFav] = useState([]);
  const [itemsFav, setItemsFav] = useState([]);
  localStorage.getItem("token");

  let fetchItemsData = () => {
    fetch("https://legendary-slayers-be-production.up.railway.app/items/all")
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data);
      });
  };

  let fetchData = () => {
    fetch(
      "https://legendary-slayers-be-production.up.railway.app/champions/all"
    )
      .then((res) => res.json())
      .then((data) => {
        setCharsIcon(data);
      });
  };

  let fetchUserData = () => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserName(data[0].userName);
        setCharsFav(data[0].favCharacters);
        setItemsFav(data[0].favItems);
      });
  };

  let addItemFav = (event) => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}/items/${event.target.id}`,
      {
        method: "PUT",
      }
    ).then(fetchUserData);
  };

  let addCharFav = (event) => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}/champions/${event.target.id}`,
      {
        method: "PUT",
      }
    ).then(fetchUserData);
  };
  let deleteItemFav = (event) => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}/items/delete/${event.target.id}`,
      {
        method: "PUT",
      }
    ).then(fetchUserData);
  };

  let deleteCharFav = (event) => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}/champions/delete/${event.target.id}`,
      {
        method: "PUT",
      }
    ).then(fetchUserData);
  };

  let deleteUser = (event) => {
    fetch(
      `https://legendary-slayers-be-production.up.railway.app/users/name/${props.user.userName}`,
      {
        method: "DELETE",
      }
    )
  };

  useEffect(() => {
    fetchData();
    fetchItemsData();
    fetchUserData();
  }, []);

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
        <h2>Welcome {userName}!</h2>
      </div>

      <div className="user-container">
        <div className="fav-container">
          <div className="fav-champs">
            <h3>Champions</h3>
            <div className="champIcons">
              {charsIcon.map((data, index) => (
                <button
                  id={data._id}
                  onClick={addCharFav}
                  key={index}
                  className="eachIcon"
                  style={{ backgroundImage: `url("${data.image_square}")` }}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>
          <div className="fav-items">
            <h3>Items</h3>
            <div className="champIcons">
              {itemsData.map((data, index) => (
                <button
                  id={data._id}
                  onClick={addItemFav}
                  key={index}
                  className="eachIcon"
                  style={{ backgroundImage: `url("${data.full_image}")` }}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="user-fav">
          <div className="fav-champs">
            <h3>Favorite Champions</h3>
            <div className="champIcons">
              {charsFav.map((data, index) => (
                <button
                  id={data._id}
                  onClick={deleteCharFav}
                  key={index}
                  className="eachIcon"
                  style={{ backgroundImage: `url("${data.image_square}")` }}
                >
                  {data.name}
                </button>
              ))}
            </div>
          </div>
          <div className="fav-items">
            <h3>Favorite Items</h3>
            <div className="champIcons">
              {itemsFav.map((data, index) => (
                <button
                  id={data._id}
                  onClick={deleteItemFav}
                  key={index}
                  className="eachIcon"
                  style={{ backgroundImage: `url("${data.full_image}")` }}
                >
                  {data.name}
                </button>
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
      <Link to="/" onClick={deleteUser} className="deleteUser">
       Delete My Account 
      </Link>
    </div>
  );
}

export default UserProfile;
