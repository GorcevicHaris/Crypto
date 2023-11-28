import axios from "axios";
import React, { useEffect, useState } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Search } from "@mui/icons-material";
export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

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

  useEffect(() => {
    getCoins();
  }, [page, search]);

  return (
    <div className="container">
      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>AUD</option>
        <option>CAD</option>
        <option>CHF</option>
        <option>CNY</option>
        <option>INR</option>
      </select>

      {data.map((product) => (
        <div className="card">
          <img src={product.iconUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p style={{ fontWeight: "bold" }}>
            {selectedCurrency === "USD"
              ? `$ ${parseFloat(product.price).toFixed(1)}`
              : selectedCurrency == "EUR"
              ? `€ ${parseFloat(product.price * 0.90965).toFixed(1)}`
              : selectedCurrency === "GBP"
              ? `£ ${parseFloat(product.price * 0.78).toFixed(1)}`
              : selectedCurrency === "JPY"
              ? `¥ ${parseFloat(product.price * 113.71).toFixed(1)}`
              : selectedCurrency === "AUD"
              ? `A$ ${parseFloat(product.price * 1.36).toFixed(1)}`
              : selectedCurrency === "CAD"
              ? `C$ ${parseFloat(product.price * 1.26).toFixed(1)}`
              : selectedCurrency === "CHF"
              ? `CHF ${parseFloat(product.price * 0.93).toFixed(1)}`
              : selectedCurrency === "CNY"
              ? `CN¥ ${parseFloat(product.price * 6.38).toFixed(1)}`
              : selectedCurrency === "INR"
              ? `₹ ${parseFloat(product.price * 83.43).toFixed(1)}`
              : "Nepoznata valuta"}
          </p>
        </div>
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
