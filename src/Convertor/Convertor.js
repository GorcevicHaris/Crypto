import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";

export default function Convertor() {
  const [data, setData] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [input, setInput] = useState("");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");
  const [inputChanger, setInputChanger] = useState("");
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (selectedCoin && input !== "") {
      const priceSelectedCurrency =
        selectedCurrency === "EUR"
          ? selectedCoin.price * 0.9
          : selectedCurrency === "GBP"
          ? selectedCoin.price * 0.78 * input
          : selectedCoin.price;
      setTotalValue(priceSelectedCurrency * input);
    }
  }, [input, selectedCoin, selectedCurrency]);

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

  console.log(data);

  function onSelectedCurrency(e) {
    setSelectedCurrency(e.target.value);
  }

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
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="number"
          ></input>
          <select onChange={handleSelectCoin}>
            <option>Pick the coin</option>
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
          <input value={totalValue} type="number"></input>
          <select onChange={onSelectedCurrency} value={selectedCurrency}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
    </div>
  );
}
