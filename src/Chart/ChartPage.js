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
  let lineChart = {
    labels: [
      "day1",
      "day2",
      "day3",
      "day4",
      "day5",
      "day5",
      "day6",
      "day7",
      "day8",
      "day9",
      "day10",
      "day11",
      "day12",
      "day13",
      "day14",
      "day15",
      "day16",
      "day17",
      "day18",
      "day19",
      "day20",
      "day22",
      "day23",
    ],
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
  //
  const doughnutChart = {
    labels: [
      "day1",
      "day2",
      "day3",
      "day4",
      "day5",
      "day5",
      "day6",
      "day7",
      "day8",
      "day9",
      "day10",
      "day11",
      "day12",
      "day13",
      "day14",
      "day15",
      "day16",
      "day17",
      "day18",
      "day19",
      "day20",
      "day22",
      "day23",
    ],
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
    labels: [
      "day1",
      "day2",
      "day3",
      "day4",
      "day5",
      "day5",
      "day6",
      "day7",
      "day8",
      "day9",
      "day10",
      "day11",
      "day12",
      "day13",
      "day14",
      "day15",
      "day16",
      "day17",
      "day18",
      "day19",
      "day20",
      "day22",
      "day23",
    ],
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
