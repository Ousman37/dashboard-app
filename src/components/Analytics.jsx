import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useTheme } from "../context/ThemeContext"; 
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartComponent() {
  const { theme } = useTheme(); // Using the theme context

  // Define colors for light and dark themes based on the theme context
  const axisColor = theme === "dark" ? "#E5E7EB" : "#4B5563";
  const gridColor = theme === "dark" ? "#374151" : "#D1D5DB";
  const tooltipBgColor = theme === "dark" ? "#1F2937" : "#F9FAFB";
  const borderColor =
    theme === "dark" ? "rgba(255, 99, 132, 1)" : "rgba(54, 162, 235, 1)"; // Example adjustment

  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3, 7, 8, 12, 15, 10, 5],
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: borderColor,
        borderWidth: 3,
        tension: 0.4,
        pointRadius: 5,
        pointBackgroundColor: "#fff",
        pointBorderColor: borderColor,
        pointHoverBackgroundColor: borderColor,
        pointHoverBorderColor: "#fff",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: gridColor,
        },
        ticks: {
          color: axisColor,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: axisColor,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: tooltipBgColor,
        titleColor: axisColor,
        bodyColor: axisColor,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
  };

  return (
    <main className=" bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300 min-h-screen p-8">
      <div
        className="chart-container"
        style={{ position: "relative", height: "40vh" }}
      >
        <Line data={data} options={options} />
      </div>
    </main>
  );
}

export default ChartComponent;
