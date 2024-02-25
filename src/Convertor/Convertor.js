import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";

export default function Convertor() {
  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [input, setInput] = useState(1);
  const [selectedCoin, setSelectedCoin] = useState("BTC");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const priceSelectedCurrency =
    selectedCoin && selectedCoin.price
      ? selectedCurrency === "USD"
        ? selectedCoin.price * 1
        : selectedCurrency === "EUR"
        ? selectedCoin.price * 0.923112
        : selectedCurrency === "GBP"
        ? selectedCoin.price * 0.78
        : selectedCurrency === "JPY"
        ? selectedCoin.price * 121.24
        : selectedCurrency === "CAD"
        ? selectedCoin.price * 1.48
        : selectedCurrency === "AUD"
        ? selectedCoin.price * 1.58
        : selectedCurrency === "CHF"
        ? selectedCoin.price * 1.07
        : selectedCurrency === "CNY"
        ? selectedCoin.price * 7.25
        : selectedCurrency === "SEK"
        ? selectedCoin.price * 10.05
        : selectedCurrency === "NZD"
        ? selectedCoin.price * 1.66
        : selectedCurrency === "KRW"
        ? selectedCoin.price * 1296.66
        : selectedCurrency === "SGD"
        ? selectedCoin.price * 1.51
        : selectedCurrency === "NOK"
        ? selectedCoin.price * 10.88
        : selectedCurrency === "MXN"
        ? selectedCoin.price * 22.38
        : selectedCurrency === "INR"
        ? selectedCoin.price * 86.36
        : selectedCurrency === "RUB"
        ? selectedCoin.price * 84.13
        : selectedCurrency === "ZAR"
        ? selectedCoin.price * 17.04
        : selectedCurrency === "HRK"
        ? selectedCoin.price * 7.5
        : selectedCurrency === "TRY"
        ? selectedCoin.price * 10.43
        : selectedCurrency === "DKK"
        ? selectedCoin.price * 7.44
        : selectedCurrency === "HKD"
        ? selectedCoin.price * 8.71
        : selectedCurrency === "THB"
        ? selectedCoin.price * 35.09
        : ""
      : 0;

  function getData() {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coins`, {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "650",
          query: 1,
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data.data.coins);
      });
  }

  function handleSelectCoin(event) {
    const selectedCoin = data.find((coin) => coin.name === event.target.value);
    setSelectedCoin(selectedCoin);
  }

  function onSelectedCurrency(e) {
    setSelectedCurrency(e.target.value);
  }

  function changing(e) {
    setTotalValue(e.target.value);
    setInput(priceSelectedCurrency / e.target.value);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${"bitcoin-what-is-crypto-scaled.jpg"})` }}
      className="convertDiv"
    >
      <h1
        style={{
          fontSize: "80px",
          letterSpacing: "8px",
          fontFamily: "cursive",
          fontWeight: "100",
        }}
      >
        Convertor
      </h1>
      <div className="centerDiv">
        <div className="inputs">
          <input
            placeholder="search"
            onChange={(e) => {
              setInput(e.target.value);
              setTotalValue(e.target.value * priceSelectedCurrency);
            }}
            value={input}
            type="number"
          ></input>
          <select onChange={handleSelectCoin}>
            {data.map((coin) => (
              <option key={coin.name} value={coin.name}>
                {coin.name}
                <img src={coin.iconUrl}></img>
              </option>
            ))}
          </select>
        </div>
        <div className="equals">
          <h1 style={{ color: "black" }}>=</h1>
        </div>
        <div className="inputs">
          <input onChange={changing} value={totalValue} type="number"></input>
          <select onChange={onSelectedCurrency} value={selectedCurrency}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="CAD">CAD</option>
            <option value="AUD">AUD</option>
            <option value="CHF">CHF</option>
            <option value="CNY">CNY</option>
            <option value="SEK">SEK</option>
            <option value="NZD">NZD</option>
            <option value="KRW">KRW</option>
            <option value="SGD">SGD</option>
            <option value="NOK">NOK</option>
            <option value="MXN">MXN</option>
            <option value="INR">INR</option>
            <option value="RUB">RUB</option>
            <option value="ZAR">ZAR</option>
            <option value="HRK">HRK</option>
            <option value="TRY">TRY</option>
            <option value="DKK">DKK</option>
            <option value="HKD">HKD</option>
            <option value="THB">THB</option>
          </select>
        </div>
      </div>
    </div>
  );
}
