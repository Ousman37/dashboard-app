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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: "#fff",
      pointBorderColor: "rgba(54, 162, 235, 1)",
      pointHoverBackgroundColor: "rgba(54, 162, 235, 1)",
      pointHoverBorderColor: "#fff",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)",
      },
      ticks: {
        color: "#fff",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#fff",
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
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleColor: "#fff",
      bodyColor: "#fff",
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: "index",
    intersect: false,
  },
};

function ChartComponent() {
  return (
    <div
      className="chart-container"
      style={{ position: "relative", height: "40vh" }}
    >
      <Line data={data} options={options} />
    </div>
  );
}

export default ChartComponent;
// import React from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const data = {
//   labels: [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ],
//   datasets: [
//     {
//       label: "Sales",
//       data: [12, 19, 3, 5, 2, 3, 7, 8, 12, 15, 10, 5],
//       backgroundColor: "rgba(75, 192, 192, 0.2)",
//       borderColor: "rgba(75, 192, 192, 1)",
//       borderWidth: 3,
//       tension: 0.4,
//       pointRadius: 5,
//       pointBackgroundColor: "#fff",
//       pointBorderColor: "rgba(75, 192, 192, 1)",
//       pointHoverBackgroundColor: "rgba(75, 192, 192, 1)",
//       pointHoverBorderColor: "#fff",
//     },
//   ],
// };

// const options = {
//   scales: {
//     y: {
//       beginAtZero: true,
//       grid: {
//         color: "rgba(255, 255, 255, 0.2)",
//       },
//       ticks: {
//         color: "#fff",
//       },
//     },
//     x: {
//       grid: {
//         display: false,
//       },
//       ticks: {
//         color: "#fff",
//       },
//     },
//   },
//   plugins: {
//     legend: {
//       display: false,
//     },
//     tooltip: {
//       mode: "index",
//       intersect: false,
//       backgroundColor: "rgba(0, 0, 0, 0.7)",
//       titleColor: "#fff",
//       bodyColor: "#fff",
//     },
//   },
//   responsive: true,
//   maintainAspectRatio: false,
// };

// function Analytics() {
//   return (
//     <main className="bg-gray-800   min-h-screen  text-white p-5">
//       <div
//         className="chart-container bg-gray-800 "
//         style={{ position: "relative", height: "40vh" }}
//       >
//         <Line data={data} options={options} />
//       </div>
//     </main>
//   );
// }

// export default Analytics;
