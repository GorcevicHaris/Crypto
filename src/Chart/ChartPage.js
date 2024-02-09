import "./chartpage.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../Context/Context";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function ChartPage(product) {
  const { state } = useLocation();
  let chartData = {
    labels: [
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
      "monday",
      "friday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
      "sutarday",
    ],
    datasets: [
      {
        label: "Line Dataset",
        data: state.sparkline,
        lineTension: 0.5,
        borderColor: "green",
        borderWidth: 1.5,
        pointRadius: 2,
        width: 300,
        height: 300,
        showLine: true,
      },
    ],
  };
  console.log(state, "state");
  return (
    <div className="chartContainer">
      <div className="divline">
        <Line
          data={chartData}
          options={{
            scales: {
              x: { grid: { display: false } },
              y: {
                grid: {},
                ticks: { stepSize: 3 },
              },
            },
            elements: {
              line: {
                tension: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}
