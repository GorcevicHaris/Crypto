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
  const [search, setSearch] = useState("");
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
        setSecondData(response.data.market_data.current_price);
      });
  }
  useEffect(() => {
    getCoins();
    getUsd();
  }, [page]);
  let array = [secondData];
  // setMoney(data);
  console.log(data);
  console.log(secondData);
  console.log(money);
  return (
    <div className="container">
      <select>
        {Array.isArray(secondData) &&
          secondData.map((el, index) => <option key={index}>{el}</option>)}
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
