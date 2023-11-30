import React, { useContext, useEffect, useState, useRef } from "react";
import "./card.css";
import { CartContext } from "../Context/Context";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "recharts";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
function Card({ coin }) {
  const { selectedCurrency } = useContext(CartContext);
  const [chart, setChart] = useState([]);

  function getCo() {
    axios
      .get(`https://coingecko.p.rapidapi.com/coins/bitcoin/market_chart`, {
        params: {
          vs_currency: "usd",
          days: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        },
      })
      .then((response) => setChart(response.data.prices));
  }
  useEffect(() => {
    getCo();
  }, []);
  //
  const state = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "RainFall",
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        lineTension: 0.5,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  console.log(chart);
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
      <p>
        <p style={{ fontWeight: "bold" }}>
          {selectedCurrency === "USD"
            ? `$ ${parseFloat(coin.marketCap).toFixed(1)}`
            : selectedCurrency == "EUR"
            ? `€ ${parseFloat(coin.marketCap * 0.90965).toFixed(1)}`
            : selectedCurrency === "GBP"
            ? `£ ${parseFloat(coin.marketCap * 0.78).toFixed(1)}`
            : selectedCurrency === "JPY"
            ? `¥ ${parseFloat(coin.marketCap * 113.71).toFixed(1)}`
            : selectedCurrency === "AUD"
            ? `A$  ${parseFloat(coin.marketCap * 1.36).toFixed(1)}`
            : selectedCurrency === "CAD"
            ? `C$  ${parseFloat(coin.marketCap * 1.26).toFixed(1)}`
            : selectedCurrency === "CHF"
            ? `CHF  ${parseFloat(coin.marketCap * 0.93).toFixed(1)}`
            : selectedCurrency === "CNY"
            ? `CN¥  ${parseFloat(coin.marketCap * 6.38).toFixed(1)}`
            : selectedCurrency === "INR"
            ? `₹    ${parseFloat(coin.marketCap * 83.43).toFixed(1)}`
            : "Nepoznata valuta"}
        </p>
      </p>
      <div className="divline">
        <Line
          data={state}
          options={{
            scales: {
              x: { grid: { display: false } },
              y: {
                grid: { borderDash: [10], color: "rgba(255,255,255,0.1);" },
                ticks: { stepSize: 8 },
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Card;
