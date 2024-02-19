import "./chartpage.css";
import React, { useContext, useEffect, useState, useRef } from "react";
import { CartContext } from "../Context/Context";
import { BarChart } from "@mui/x-charts/BarChart";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { useLocation } from "react-router-dom";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
} from "chart.js";
import { Chart, ArcElement } from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  BarElement
);

export default function ChartPage(product) {
  const { state } = useLocation();
  const { period, setPeriod } = useContext(CartContext);
  console.log(period, "period");
  let labels;

  if (period === "7d") {
    labels = [
      "184h",
      "176h",
      "168h",
      "160h",
      "152h",
      "144h",
      "136h",
      "128h",
      "120h",
      "112h",
      "104h",
      "96h",
      "88h",
      "80h",
      "72h",
      "64",
      "56h",
      "48h",
      "40h",
      "32h",
      "24h",
      "16h",
      "8h",
    ];
  } else if (period === "24h") {
    labels = [
      "1h",
      "2h",
      "3h",
      "4h",
      "5h",
      "5h",
      "6h",
      "7h",
      "8h",
      "9h",
      "10h",
      "11h ",
      "12h ",
      "13h ",
      "14h ",
      "15h ",
      "16h ",
      "17h ",
      "18h",
      "19h ",
      "20h ",
      "21h ",
      "22h ",
    ];
  }

  let lineChart = {
    labels: labels,
    datasets: [
      {
        label: "Bar Dataset",
        data: state.sparkline,
        borderColor: "green",
        borderWidth: 1.5,
        pointRadius: 1,
        width: 300,
        height: 300,
        order: 10,
        showLine: true,
      },
    ],
  };

  const doughnutChart = {
    labels: labels,
    datasets: [
      {
        data: state.sparkline,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const barChart = {
    labels: labels,
    datasets: [
      {
        data: state.sparkline,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  console.log(state, "state");
  return (
    <div className="chartContainer">
      <div className="topChartsContainer" style={{ background: "black" }}>
        <div className="lineChartContainer" style={{ width: "60%" }}>
          <Line
            data={lineChart}
            options={{
              plugins: {
                tooltip: {
                  enabled: true,
                },
              },
              scales: {
                x: { grid: { display: false, borderColor: "gray" } },
                y: {
                  grid: {
                    color: "gray",
                  },
                  ticks: { stepSize: 3 },
                },
              },
              elements: {
                line: {
                  borderColor: "white",
                },
              },
            }}
          />
        </div>
        <div className="doughnutChartContainer" style={{ width: "40%" }}>
          <Doughnut data={doughnutChart} />
        </div>
      </div>
      <div
        className="barChartContainer"
        style={{ width: "100%", background: "black" }}
      >
        <Bar data={barChart} />
      </div>
    </div>
  );
}
