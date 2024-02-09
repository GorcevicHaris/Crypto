import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./chartpage.css";
export default function ChartPage() {
  const { coin } = useParams();
  const { state } = useLocation();
  console.log(coin, "coin");
  console.log(state, "coinData");
  return <div className="chartContainer"></div>;
}
