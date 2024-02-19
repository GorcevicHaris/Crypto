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
      "8h",
      "16h",
      "24h",
      "32h",
      "40h",
      "48h",
      "56h",
      "64",
      "72h",
      "80h",
      "88h",
      "96h",
      "104h",
      "112h",
      "120h",
      "128h",
      "136h",
      "144h",
      "152h",
      "160h",
      "168h",
      "176h",
      "184h",
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
  } else if (period === "3h") {
    labels = [
      "5",
      "10",
      "15",
      "20",
      "25",
      "30",
      "35",
      "40",
      "45",
      "50",
      "55",
      "60",
      "65",
      "70",
      "75",
      "80",
      "85",
      "90",
      "95",
      "100",
      "105",
      "110",
      "115",
      "120",
      "125",
      "130",
      "135",
      "140",
      "145",
      "150",
      "155",
      "160",
      "165",
      "170",
      "175",
      "180",
    ];
  } else if (period === "30d") {
    labels = [
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
      "day24",
      "day25",
      "day26",
      "day27",
      "day28",
      "day29",
      "day30",
    ];
  } else if (period === "3m") {
    labels = [
      "day 8",
      "day16",
      "day24",
      "day32",
      "day40",
      "day48",
      "day56",
      "day64",
      "day72",
      "day80",
      "day88",
    ];
  } else if (period === "1y") {
    labels = [
      "day30",
      "day60",
      "day90",
      "day120",
      "day150",
      "day180",
      "day210",
      "day240",
      "day270",
      "day300",
      "day330",
      "day360",
    ];
  } else if (period === "3y") {
    labels = [
      "day31",
      "day62,",
      "day93,",
      "day124,",
      "day155,",
      "day186,",
      "day217,",
      "day248,",
      "day279,",
      "day310,",
      "day341,",
      "day372,",
      "day403,",
      "day434,",
      "day465,",
      "day496,",
      "day527,",
      "day558,",
      "day589,",
      "day620,",
      "day651,",
      "day682,",
      "day713,",
      "day744,",
      "day775,",
      "day806,",
      "day837,",
      "day868,",
      "day899,",
      "day930,",
      "day961,",
      "day992,",
      "day1023,",
      "day1054,",
      "day1085,",
    ];
  } else if (period === "5y") {
    labels = [
      "day30,",
      "day60,",
      "day90,",
      "day120,",
      "day150,",
      "day180,",
      "day210,",
      "day240,",
      "day270,",
      "day300,",
      "day330,",
      "day360,",
      "day390,",
      "day420,",
      "day450,",
      "day480,",
      "day510,",
      "day540,",
      "day570,",
      "day600,",
      "day630,",
      "day660,",
      "day690,",
      "day720,",
      "day750,",
      "day780,",
      "day810,",
      "day840,",
      "day870,",
      "day900,",
      "day930,",
      "day960,",
      "day990,",
      "day1020,",
      "day1050,",
      "day1080,",
      "day1110,",
      "day1140,",
      "day1170,",
      "day1200,",
      "day1230,",
      "day1260,",
      "day1290,",
      "day1320,",
      "day1350,",
      "day1380,",
      "day1410,",
      "day1440,",
      "day1470,",
      "day1500,",
      "day1530,",
      "day1560,",
      "day1590,",
      "day1620,",
      "day1650,",
      "day1680,",
      "day1710,",
      "day1740,",
      "day1770,",
      "day1800,",
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
