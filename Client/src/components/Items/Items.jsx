import React from "react";
import { useState, useEffect } from "react";
import { useRef } from "react";
import itemsJson from "../../Items.json";
import "./Items.css";
function Items() {
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
    <div className="items-page-wrapper">
      <div className="items-title-section">
        <h4>CHOOSE YOUR</h4>
        <h1>ITEMS</h1>
        <p>
        All in-game items for League of Legends, including mythics, legendary, starting items, and consumables. Up-to-date stats, passives, actives, and gold costs
        </p>
      </div>
      <div className="items-container">
        {itemsJson.map((item, index) => {
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
  );
}

export default Items;
