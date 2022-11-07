import React from "react";
import itemsJson from "../../Items.json";
import "./Items.css";
function Items() {
  return (
    <div className="wrapper">
      <div className="items-container">
        {itemsJson.map((item) => {
          return (
            <div className="item-card">
              <img src={`${item.full_image}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Items;
