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
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);
function Card({ coin }) {
  const { selectedCurrency } = useContext(CartContext);
  const [history, setHistory] = useState([]);
  const [maper, setMaper] = useState([]);

  console.log(maper);
  let state = {
    labels: [
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
    ],
    datasets: [
      {
        label: "Rainfall",
        data: maper[1],
        fill: false,
        lineTension: 0.5,
        borderColor: "green",
        borderWidth: 2,
        pointRadius: 0,
        width: 300,
        height: 300,
        showLine: true,
      },
    ],
  };
  function getPriceHistory() {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coins`, {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setHistory(response.data.data.coins);
        const somemaper = response.data.data.coins.map((el) => el.sparkline);
        setMaper(somemaper);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }
  console.log(maper);
  useEffect(() => {
    getPriceHistory();
  }, []);
  console.log(maper[0]);
  console.log(history);
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
          : selectedCurrency === "YEN"
          ? `YEN ${parseFloat(coin.price * 146.3236).toFixed(1)}`
          : "Nepoznata Vrednost"}
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
            : selectedCurrency === "YEN"
            ? `YEN ${parseFloat(coin.marketCap * 146.3236)}`
            : "Nepoznata Vrednost"}
        </p>
      </p>
      <div className="divline">
        <Line
          data={state}
          options={{
            scales: {
              x: { grid: { display: false } },
              y: {
                grid: {
                  borderDash: [10],
                  color: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255, 255, 255,10)",
                },
                ticks: { stepSize: 8 },
              },
            },
            elements: {
              line: {
                tension: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default Card;
