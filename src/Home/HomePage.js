import axios from "axios";
import React, { useContext, useEffect, useState, useMemo } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import { CartContext } from "../Context/Context";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Promijenjeno da stranice počinju od 1
  const [search, setSearch] = useState("");
  const { changer } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("desc");

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
          limit: "650", // Povećajte limit da biste dobili sve podatke odjednom
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

  function sortedByPrice() {
    const sortedData = [...data];

    setSortOrder(sortOrder == "desc" ? "asc" : "desc");

    sortedData.sort((a, b) => {
      return sortOrder === "desc" ? a.price - b.price : b.price - a.price;
    });

    setData(sortedData);
  }

  useEffect(() => {
    getCoins();
  }, [search]);

  // Funkcija za filtriranje podataka na temelju trenutne stranice
  const filteredData = useMemo(() => {
    const startIndex = (page - 1) * 50;
    return data.slice(startIndex, 50);
  }, [data, page]);

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
        <option>HKD</option>
        <option>SGD</option>
        <option>NZD</option>
        <option>KRW</option>
        <option>SEK</option>
        <option>NOK</option>
        <option>MXN</option>
        <option>BRL</option>
        <option>RUB</option>
        <option>ZAR</option>
        <option>TRY</option>
      </select>
      <></>

      <div className="sorted">
        <h1> Name</h1>
        <h1 onClick={sortedByPrice}>Price</h1>
      </div>

      {filteredData.map((product, index) => (
        <Card coin={product} index={index} />
      ))}

      <Pagination
        onChange={handlePageChange}
        count={Math.ceil(data.length / 50)} // Izračunajte ukupan broj stranica na temelju dobivenih podataka
        shape="rounded"
        classes={{ root: "paginationRoot" }}
      />
    </div>
  );
}
