import React from "react";
import { useState } from "react";
import { useRef } from "react";
import itemsJson from "../../Items.json";
import "./Items.css";
function Items() {
  const [hidden, setHidden] = useState(true);
  const [currentItem, setCurrentItem] = useState(null);
  let popUp = useRef();

  function showInfo(e) {
    popUp.current.style.top = `${e.clientY + 30}px`;
    popUp.current.style.left = `${e.clientX - 100}px`;
  }
  const handleEnter = (e) => {
    // set the current item HERE
    // use URL to find by name use data- attribute
    setHidden(false);
  };
  const handleLeave = () => setHidden(true);
  return (
    <div className="wrapper">
      <div className="items-container">
        {itemsJson.map((item, index) => {
          return (
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
          );
        })}
      </div>
      <div hidden={hidden} className="pop-up" ref={popUp}>
        <p>The data will go here</p>
      </div>
    </div>
  );
}

export default Items;
