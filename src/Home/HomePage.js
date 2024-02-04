import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Search } from "@mui/icons-material";
import { CartContext } from "../Context/Context";
export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(0);
  const { changer } = useContext(CartContext);
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
          query: search,
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      })
      .then((response) => setData(response.data.data.coins));
  }

  console.log(data, "data");
  useEffect(() => {
    getCoins();
  }, [page, search]);
  console.log(changer);
  console.log(data);
  return (
    <div className="container">
      <select className="select" onChange={changer}>
        <option>USD</option>
        <option>EUR</option>
        <option>YEN</option>
        <option>GBP</option>
        <option>AUD</option>
        <option>CAD</option>
        <option>CHF</option>
        <option>CNY</option>
        <option>INR</option>
      </select>
      {data.map((product, index) => (
        <Card coin={product} index={index} />
      ))}
      <Pagination
        sx={{ paddingTop: "20px" }}
        onChange={handlePageChange}
        count={644}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}
