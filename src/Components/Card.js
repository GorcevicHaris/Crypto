import React from "react";
import "./card.css";
function Card({ coin }) {
  return (
    <div className="card">
      <img src={coin.iconUrl}></img>
      <h3>{coin.name}</h3>
      <p style={{ fontWeight: "bold" }}>
        $ {parseFloat(coin.price).toFixed(1)}
      </p>
    </div>
  );
}

export default Card;
