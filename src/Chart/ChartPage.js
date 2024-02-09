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
    "sutarday",
    "sutar",
  ],
  datasets: [
    {
      label: "Rainfall",
      data: "",
      fill: false,
      lineTension: 0.5,
      borderColor: "green",
      borderWidth: 2,
      pointRadius: 0,
      width: 300,
      height: 300,
      showLine: true,
    },
  ],
};

export default function ChartPage() {
  const { state } = useLocation();
  return (
    <div className="chartContainer">
      <div className="divline">
        <Line
          data={chartData}
          options={{
            scales: {
              x: { grid: { display: false } },
              y: {
                grid: {
                  borderDash: [10],
                  color: "rgba(255,255,255,0.1)",
                  backgroundColor: "rgba(255, 255, 255,10)",
                },
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
