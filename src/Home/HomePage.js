import axios from "axios";
import React, { useContext, useEffect, useState, useMemo } from "react";
import "./homepage.css";
import Card from "../Components/Card";
import Pagination from "@mui/material/Pagination";
import { CartContext } from "../Context/Context";

export default function HomePage() {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState("");
  const { changer, data, setData, search, setPeriod } = useContext(CartContext);
  const [sortOrder, setSortOrder] = useState("desc");
  const handlePageChange = (event, newPage) => {
    setPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  function getCoins() {
    let timePeriod = "24h";
    if (select === "30d") {
      timePeriod = "30d";
    } else if (select === "7d") {
      timePeriod = "7d";
    } else if (select === "3m") {
      timePeriod = "3m";
    } else if (select === "1y") {
      timePeriod = "1y";
    } else if (select === "5y") {
      timePeriod = "5y";
    } else if (select === "3h") {
      timePeriod = "3h";
    }

    axios
      .get(`https://coinranking1.p.rapidapi.com/coins`, {
        params: {
          referenceCurrencyUuid: "yhjMzLPhuIDl",
          timePeriod: timePeriod, //time period ce biti neki podaci njihovi koje cemo koristiti kao stejt ali sa nekim podacima kao sto su 24h,3d itd
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
        setPeriod(timePeriod);
      });
  }
  function sortedByPrice() {
    const sortedData = [...data];
    setSortOrder(sortOrder === "desc" ? "asc" : "desc");
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
    const searchData = data.filter((data) => data.name.includes(search));
    return searchData.slice(firstIndex, secondIndex);
  }, [data, page, search]);
  console.log(page, "page");
  console.log(filteredData, "filtereddata");

  return (
    <div className="container">
      <select className="select" onChange={handleSelectChange}>
        <option value="3h">3h</option>
        <option value="24h">24h</option>
        <option value="7d">7d</option>
        <option value="30d">30d</option>
        <option value="3m">3m</option>
        <option value="1y">1y</option>
        <option value="5y">5y</option>
      </select>
      ;
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
            {select === "3h" ? (
              <span>3h Change</span>
            ) : select === "7d" ? (
              <span>7d Change</span>
            ) : select === "30d" ? (
              <span>30d Change</span>
            ) : select === "3m" ? (
              <span>3m Change</span>
            ) : select === "1y" ? (
              <span>1y Change</span>
            ) : select === "5y" ? (
              <span>5y Change</span>
            ) : select === "24h" ? (
              <span>24h Change</span>
            ) : (
              <span>3h Change</span>
            )}
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
