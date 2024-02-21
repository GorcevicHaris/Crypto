import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";
export default function Convertor() {
  const [data, setData] = useState([]);
  const [select, setSelect] = useState(52000);
  const [total, setTotal] = useState(0);
  const [input, setInput] = useState("");
  function getData() {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coins`, {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h", //time period ce biti neki podaci njihovi koje cemo koristiti kao stejt ali sa nekim podacima kao sto su 24h,3d itd
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
    setTotal(input * select);
  }, [input, select]);
  return (
    <div className="convertDiv">
      <div className="centerDiv">
        <div className="inputs">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="number"
          ></input>
          <select>
            <option value={51200} onChange={(e) => setSelect(e.target.value)}>
              Btc
            </option>
          </select>
        </div>
        <div className="equals">
          <h1 style={{ color: "black" }}>=</h1>
        </div>
        <div className="inputs">
          <input value={totalValue} type="number" readOnly></input>
          <select>
            <option>hi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
