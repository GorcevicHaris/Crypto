import axios from "axios";
import React, { useContext, useEffect, useState, useMemo } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import { CartContext } from "../Context/Context";

export default function HomePage() {
  const [page, setPage] = useState(1); // Promijenjeno da stranice počinju od 1
  const [select, setSelect] = useState("");
  const { changer, data, setData, search } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("desc");
  const [fakeData, setFakeData] = useState([]);
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
          limit: "650",
          query: select,
        },
        headers: {
          "X-RapidAPI-Key":
            "1b2013684fmsh5e2154cde374d29p1987b9jsnf9a0e60af14e",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data.data.coins);
        setFakeData(response.data.coins);
      });
  }

  function sortedByPrice() {
    const sortedData = [...data];
    setSortOrder(sortOrder === "desc" ? "asc " : "desc");
    const sorting = sortedData.sort((a, b) => {
      return sortOrder === "desc" ? a.price - b.price : b.price - a.price;
    });
    setData(sorting);
  }

  useEffect(() => {
    getCoins();
  }, [select]);

  function sortedByChange() {
    const sortedData = [...data];
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    const sorting = sortedData.sort((a, b) => {
      return sortOrder === "desc" ? a.change - b.change : b.change - a.change;
    });
    setData(sorting);
  }
  function sortedBy24hVolume() {
    const sortedData = [...data];
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    const sorting = sortedData.sort((a, b) => {
      const volumeA = parseFloat(a["24hVolume"]);
      const volumeB = parseFloat(b["24hVolume"]);
      return sortOrder === "desc" ? volumeA - volumeB : volumeB - volumeA;
    });
    setData(sorting);
  }

  function sortedByMarktetCap() {
    const sortedData = [...data];
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
    const sorting = sortedData.sort((a, b) => {
      return sortOrder === "desc"
        ? a.marketCap - b.marketCap
        : b.marketCap - a.marketCap;
    });
    setData(sorting);
  }

  const filteredData = useMemo(() => {
    const firstIndex = (page - 1) * 50;
    const secondIndex = page * 50;
    const searchData = data.filter((el) => el.name.includes(search));
    return searchData.slice(firstIndex, secondIndex);
  }, [data, page, search]);

  console.log(page, "page");
  console.log(filteredData, "filtereddata");

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
        <div className="same">
          <h1 className="cursor"> Name</h1>
        </div>
        <div className="same">
          <h1 className="cursor" onClick={sortedByPrice}>
            Price
          </h1>
        </div>
        <div className="same">
          <h1 className="cursor" onClick={sortedByChange}>
            24h Change
          </h1>
        </div>
        <div className="same">
          <h1 className="cursor" onClick={sortedBy24hVolume}>
            24hVolume
          </h1>
        </div>
        <div className="same">
          <h1 className="cursor" onClick={sortedByMarktetCap}>
            marketCap
          </h1>
        </div>
      </div>
      {filteredData.map((product, index) => (
        <>
          <Card coin={product} index={index} />
        </>
      ))}

      <Pagination
        onChange={handlePageChange}
        count={data.length / 50}
        shape="rounded"
        classes={{ root: "paginationRoot" }}
      />
    </div>
  );
}
