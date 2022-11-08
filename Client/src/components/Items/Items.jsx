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
    <div className="wrapper">
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
