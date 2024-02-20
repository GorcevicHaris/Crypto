import React, { useEffect, useState } from "react";
import "./convertor.css";
import axios from "axios";
export default function Convertor() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get(`https://api.exchangeratesapi.io/latest`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <div className="convertDiv">
      <div className="centerDiv">
        <div className="inputs">
          <input type="number"></input>
          <select>
            <option>hi</option>
          </select>
        </div>
        <div className="equals">
          <h1 style={{ color: "black" }}>=</h1>
        </div>
        <div className="inputs">
          <input type="number"></input>
          <select>
            <option>hi</option>
          </select>
        </div>
      </div>
    </div>
  );
}
