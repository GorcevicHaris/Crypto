import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";

export default function Convertor() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(51200); // Inicijalna vrednost za BTC
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

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

  useEffect(() => {
    getData();
    setConvertedValue(select * inputValue);
  }, [select, inputValue]);

  return (
    <div className="convertDiv">
      <div className="centerDiv">
        <div className="inputs">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select value={select}>
            <option onChange={(e) => setSelect(e.target.value)} value={51200}>
              BTC
            </option>
          </select>
        </div>
        <div className="equals">
          <h1 style={{ color: "black" }}>=</h1>
        </div>
        <div className="inputs">
          <input type="number" value={convertedValue} readOnly />
          <select>
            <option>hi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
