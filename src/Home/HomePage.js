import axios from "axios";
import React, { useEffect, useState } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [secondData, setSecondData] = useState([]);
  const [money, setMoney] = useState([]);
  const [a, setA] = useState([]);
  const [secondMoney, setSecondMoney] = useState([]);

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  function getCoins() {
    axios
      .get(`https://coinranking1.p.rapidapi.com/coins`, {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: "24h",
          "tiers[0]": "1",
          orderBy: "marketCap",
          orderDirection: "desc",
          limit: "50",
          offset: page,
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data.data.coins));
  }

  function getUsd() {
    axios
      .get(`https://coingecko.p.rapidapi.com/coins/bitcoin`, {
        params: {
          localization: "true",
          tickers: "true",
          market_data: "true",
          community_data: "true",
          developer_data: "true",
          sparkline: "false",
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
        },
      })
      .then((response) => {
        {
          // setSecondData(response.data.market_data.current_price);
          const mappedArray = Object.entries(
            response.data.market_data.current_price
          );
          setSecondData(mappedArray);
          // let array = Object.values(response.data.market_data.current_price);
          // console.log(array);
          // setMoney(array);
          // let keys = Object.keys(response.data.market_data.current_price);
          // setSecondMoney(keys);
          // setA(response.data.market_data.current_price);
        }
      });
  }
  console.log(a);
  console.log(secondMoney);
  console.log(money);
  useEffect(() => {
    getCoins();
    getUsd();
  }, [page]);
  console.log(data);
  console.log(secondData);
  console.log("object");
  return (
    <div className="container">
      <select>
        {secondData.map(([el, index]) => (
          <option value={index}>{el}</option>
        ))}
      </select>

      {data.map((product) => (
        <Card coin={product} />
      ))}
      <Stack spacing={2}>
        <Pagination
          sx={{ paddingTop: "20px" }}
          onChange={handlePageChange}
          count={644}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </div>
  );
}

// [
//   ['key1', 'value1'],
//   ['key2', 'value2'],
//   ['key3', 'value3']
// ]/OVO JE zapravo Object.entries on pristupa i key i value key je element a value je index
