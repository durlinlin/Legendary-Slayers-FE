import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
// import itemsJson from "../../Items.json";
import Footer from "../Footer/Footer";
import "./Items.css";

function Items() {
  const [itemsData, setItemsData] = useState([])
  let fetchItemsData = () => {
    fetch("https://legendary-slayers-be-production.up.railway.app/items/all")
      .then((res) => res.json())
      .then((data) => {
        setItemsData(data)
      })
  }
  useEffect(() => {
    fetchItemsData()
  },[])

  function showInfo(e) {
    e.currentTarget.nextElementSibling.style.top = `${e.clientY - 100}px`;
    e.currentTarget.nextElementSibling.style.left = `${e.clientX + 30}px`;
  }
  const handleEnter = (e) => {
    e.currentTarget.nextElementSibling.classList.remove("hide");
  };
  const handleLeave = (e) => {
    e.currentTarget.nextElementSibling.classList.add("hide");
  };
  return (
  <div>
    <div className="items-page-wrapper">
      <div className="items-title-section">
        <h4>CHOOSE YOUR</h4>
        <h1>ITEMS</h1>
        <p>
        All in-game items for League of Legends, including mythics, legendary, starting items, and consumables. Up-to-date stats, passives, actives, and gold costs
        </p>
      </div>
      <div className="items-container">
        {itemsData.map((item, index) => {
          return (
            <>
              <div
                data-name={item.name}
                className="item-card"
                onMouseMove={showInfo}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                key={index}
              >
                <img src={`${item.full_image}`} />
              </div>
              <div className="pop-up hide">
                <p>{item.name}</p>
                <p>{item.plaintext}</p>
                <p>Buy Price: {item.buy_price}</p>
                <p>Sell Price: {item.sell_price}</p>
              </div>
            </>
          );
        })}
      </div>
      </div>
      <Footer />
  </div>
  );
}

export default Items;
