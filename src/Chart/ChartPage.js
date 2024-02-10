import "./chartpage.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../Context/Context";
import { BarChart } from "@mui/x-charts/BarChart";
import { Line, Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import { Chart, ArcElement } from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip
);

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
        label: "Bar Dataset",
        data: state.sparkline,
        lineTension: 0.5,
        borderColor: "green",
        borderWidth: 1.5,
        pointRadius: 0,
        width: 300,
        height: 300,
        order: 2,
        data: state.sparkline,
        showLine: true,
      },
    ],
  };
  const data = {
    labels: ["monday", "friday", "sutarday", "asdas"],
    datasets: [
      {
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
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
            elements: {},
          }}
        />
      </div>
      <Doughnut data={data} />
    </div>
  );
}
