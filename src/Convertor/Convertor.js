import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";

export default function Convertor() {
  const [coins, setCoins] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [input, setInput] = useState("");
  const [selectedCoin, setSelectedCoin] = useState("");

  useEffect(() => {
    // Fetch data about coins
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
        setCoins(response.data.data.coins);
      })
      .catch((error) => {
        console.error(error, "error in");
      });
  }, []);
  useEffect(() => {
    // Calculate total value based on input and selected coin
    if (selectedCoin && input !== "") {
      setTotalValue(selectedCoin.price * parseFloat(input));
    } else {
      setTotalValue(0);
    }
  }, [input, selectedCoin]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selectedCoin = coins.find((coin) => coin.name === event.target.value);
    setSelectedCoin(selectedCoin);
  };

  console.log(coins);
  return (
    <div className="convertDiv">
      <div className="centerDiv">
        <div className="inputs">
          <input onChange={handleInputChange} value={input} type="number" />
          <select onChange={handleSelectChange}>
            <option value="">Select Coin</option>
            {coins.map((coin) => (
              <option value={coin.name}>{coin.name}</option>
            ))}
          </select>
        </div>
        <div className="equals">
          <h1 style={{ color: "black" }}>=</h1>
        </div>
        <div className="inputs">
          <input value={totalValue} type="number" readOnly />
        </div>
      </div>
    </div>
  );
}
