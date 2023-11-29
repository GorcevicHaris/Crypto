import React, { useContext } from "react";
import "./card.css";
import { CartContext } from "../Context/Context";
function Card({ coin }) {
  const { selectedCurrency } = useContext(CartContext);

  return (
    <div className="card">
      <img src={coin.iconUrl} alt={coin.name} />
      <h3>{coin.name}</h3>
      <p style={{ fontWeight: "bold" }}>
        {selectedCurrency === "USD"
          ? `$ ${parseFloat(coin.price).toFixed(1)}`
          : selectedCurrency == "EUR"
          ? `€ ${parseFloat(coin.price * 0.90965).toFixed(1)}`
          : selectedCurrency === "GBP"
          ? `£ ${parseFloat(coin.price * 0.78).toFixed(1)}`
          : selectedCurrency === "JPY"
          ? `¥ ${parseFloat(coin.price * 113.71).toFixed(1)}`
          : selectedCurrency === "AUD"
          ? `A$  ${parseFloat(coin.price * 1.36).toFixed(1)}`
          : selectedCurrency === "CAD"
          ? `C$  ${parseFloat(coin.price * 1.26).toFixed(1)}`
          : selectedCurrency === "CHF"
          ? `CHF  ${parseFloat(coin.price * 0.93).toFixed(1)}`
          : selectedCurrency === "CNY"
          ? `CN¥  ${parseFloat(coin.price * 6.38).toFixed(1)}`
          : selectedCurrency === "INR"
          ? `₹    ${parseFloat(coin.price * 83.43).toFixed(1)}`
          : "Nepoznata valuta"}
      </p>
    </div>
  );
}

export default Card;
