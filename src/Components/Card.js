import React, { useContext, useEffect, useState, useRef } from "react";
import "./card.css";
import { CartContext } from "../Context/Context";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useNavigate } from "react-router-dom";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
function Card({ coin, index }) {
  const { selectedCurrency } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/chart/${coin.name}`, { state: coin })}
      className="card"
    >
      <img src={coin.iconUrl} alt={coin.name} />
      <h3>{coin.name}</h3>
      <p style={{ fontWeight: "bold" }}>
        {selectedCurrency === "USD"
          ? `$ ${parseFloat(coin.price).toFixed(1)}`
          : selectedCurrency === "EUR"
          ? `€ ${parseFloat(coin.price * 0.90965).toFixed(1)}`
          : selectedCurrency === "GBP"
          ? `£ ${parseFloat(coin.price * 0.78).toFixed(1)}`
          : selectedCurrency === "JPY"
          ? `¥ ${parseFloat(coin.price * 113.71).toFixed(1)}`
          : selectedCurrency === "AUD"
          ? `A$ ${parseFloat(coin.price * 1.36).toFixed(1)}`
          : selectedCurrency === "CAD"
          ? `C$ ${parseFloat(coin.price * 1.26).toFixed(1)}`
          : selectedCurrency === "CHF"
          ? `CHF ${parseFloat(coin.price * 0.93).toFixed(1)}`
          : selectedCurrency === "CNY"
          ? `CN¥ ${parseFloat(coin.price * 6.38).toFixed(1)}`
          : selectedCurrency === "INR"
          ? `₹ ${parseFloat(coin.price * 83.43).toFixed(1)}`
          : selectedCurrency === "YEN"
          ? `YEN ${parseFloat(coin.price * 146.3236).toFixed(1)}`
          : selectedCurrency === "HKD"
          ? `HK$ ${parseFloat(coin.price * 7.76).toFixed(1)}`
          : selectedCurrency === "SGD"
          ? `S$ ${parseFloat(coin.price * 1.34).toFixed(1)}`
          : selectedCurrency === "NZD"
          ? `NZ$ ${parseFloat(coin.price * 1.44).toFixed(1)}`
          : selectedCurrency === "KRW"
          ? `₩ ${parseFloat(coin.price * 1163.21).toFixed(1)}`
          : selectedCurrency === "SEK"
          ? `SEK ${parseFloat(coin.price * 8.88).toFixed(1)}`
          : selectedCurrency === "NOK"
          ? `NOK ${parseFloat(coin.price * 9.04).toFixed(1)}`
          : selectedCurrency === "MXN"
          ? `MX$ ${parseFloat(coin.price * 20.32).toFixed(1)}`
          : selectedCurrency === "BRL"
          ? `R$ ${parseFloat(coin.price * 5.39).toFixed(1)}`
          : selectedCurrency === "RUB"
          ? `₽ ${parseFloat(coin.price * 75.74).toFixed(1)}`
          : selectedCurrency === "ZAR"
          ? `ZAR ${parseFloat(coin.price * 14.88).toFixed(1)}`
          : selectedCurrency === "TRY"
          ? `TRY ${parseFloat(coin.price * 12.24).toFixed(1)}`
          : "Unknown Value"}
      </p>
      <p>
        <p style={{ fontWeight: "bold" }}>
          {selectedCurrency === "USD"
            ? `$ ${parseFloat(coin.marketCap).toFixed(1)}`
            : selectedCurrency === "EUR"
            ? `€ ${parseFloat(coin.marketCap * 0.90965).toFixed(1)}`
            : selectedCurrency === "GBP"
            ? `£ ${parseFloat(coin.marketCap * 0.78).toFixed(1)}`
            : selectedCurrency === "JPY"
            ? `¥ ${parseFloat(coin.marketCap * 113.71).toFixed(1)}`
            : selectedCurrency === "AUD"
            ? `A$ ${parseFloat(coin.marketCap * 1.36).toFixed(1)}`
            : selectedCurrency === "CAD"
            ? `C$ ${parseFloat(coin.marketCap * 1.26).toFixed(1)}`
            : selectedCurrency === "CHF"
            ? `CHF ${parseFloat(coin.marketCap * 0.93).toFixed(1)}`
            : selectedCurrency === "CNY"
            ? `CN¥ ${parseFloat(coin.marketCap * 6.38).toFixed(1)}`
            : selectedCurrency === "INR"
            ? `₹ ${parseFloat(coin.marketCap * 83.43).toFixed(1)}`
            : selectedCurrency === "YEN"
            ? `YEN ${parseFloat(coin.marketCap * 146.3236).toFixed(1)}`
            : selectedCurrency === "HKD"
            ? `HK$ ${parseFloat(coin.marketCap * 7.76).toFixed(1)}`
            : selectedCurrency === "SGD"
            ? `S$ ${parseFloat(coin.marketCap * 1.34).toFixed(1)}`
            : selectedCurrency === "NZD"
            ? `NZ$ ${parseFloat(coin.marketCap * 1.44).toFixed(1)}`
            : selectedCurrency === "KRW"
            ? `₩ ${parseFloat(coin.marketCap * 1163.21).toFixed(1)}`
            : selectedCurrency === "SEK"
            ? `SEK ${parseFloat(coin.marketCap * 8.88).toFixed(1)}`
            : selectedCurrency === "NOK"
            ? `NOK ${parseFloat(coin.marketCap * 9.04).toFixed(1)}`
            : selectedCurrency === "MXN"
            ? `MX$ ${parseFloat(coin.marketCap * 20.32).toFixed(1)}`
            : selectedCurrency === "BRL"
            ? `R$ ${parseFloat(coin.marketCap * 5.39).toFixed(1)}`
            : selectedCurrency === "RUB"
            ? `₽ ${parseFloat(coin.marketCap * 75.74).toFixed(1)}`
            : selectedCurrency === "ZAR"
            ? `ZAR ${parseFloat(coin.marketCap * 14.88).toFixed(1)}`
            : selectedCurrency === "TRY"
            ? `TRY ${parseFloat(coin.marketCap * 12.24).toFixed(1)}`
            : "Unknown Value"}
        </p>
      </p>
    </div>
  );
}

export default Card;
