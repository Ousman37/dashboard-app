import React from "react";
import {
  FaHome,
  FaEnvelope,
  FaRegListAlt,
  FaChartLine,
  FaProjectDiagram,
  FaCog,
  FaArrowRight,
  FaServer,
  FaUsers,
  FaChartArea,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../context/ThemeContext";

const lineChartData = [
  { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 300, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 200, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 278, pv: 3908, amt: 2000 },
  { name: "May", uv: 189, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 239, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 349, pv: 4300, amt: 2100 },
];

const pieChartData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function Home() {
  const { theme } = useTheme();

  // Define colors for light and dark themes
  const axisColor = theme === "dark" ? "#E5E7EB" : "#4B5563";
  const gridColor = theme === "dark" ? "#374151" : "#D1D5DB";
  const tooltipBgColor = theme === "dark" ? "#1F2937" : "#F9FAFB";

  return (
    <main className="bg-light-900 dark:bg-dark-900 text-light-300 dark:text-dark-300 min-h-screen p-8 overflow-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left text-gray-700 dark:text-gray-300">
          Dashboard Overview
        </h2>
      </div>

      <p className="text-sm sm:text-base mb-6 text-center sm:text-left text-gray-700 dark:text-gray-300">
        Welcome to your dashboard. Here you'll find insightful data and
        analytics to help you understand your performance better. Use the
        navigation to view detailed reports.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Total Visits",
            value: "1,200",
            Icon: FaHome,
            additionalInfo: "5% increase from last month",
            bgColor: "bg-blue-600 hover:bg-blue-700",
            actionText: "Details",
            action: () => alert("Viewing Total Visits"),
          },
          {
            title: "Messages",
            value: "26",
            Icon: FaEnvelope,
            additionalInfo: "2 new messages",
            bgColor: "bg-green-600 hover:bg-green-700",
            actionText: "Read Messages",
            action: () => alert("Viewing Messages"),
          },
          {
            title: "Recent Activities",
            value: "Last activity 1h ago",
            Icon: FaRegListAlt,
            additionalInfo: "3 new activities",
            bgColor: "bg-purple-600 hover:bg-purple-700",
            actionText: "View Activities",
            action: () => alert("Viewing Recent Activities"),
          },
          {
            title: "Analytics",
            value: "1,200",
            Icon: FaChartLine,
            additionalInfo: "23% increase",
            bgColor: "bg-red-600 hover:bg-red-700",
            actionText: "View Report",
            action: () => alert("Viewing Analytics Report"),
          },
          // New Financial Growth card
          {
            title: "Financial Growth",
            value: "+30%",
            Icon: FaChartArea,
            additionalInfo: "Growth in revenue this quarter",
            bgColor: "bg-pink-600 hover:bg-pink-700",
            fontSize: "text-2xl",
            iconSize: "text-3xl",
            actionText: "View Details",
            action: () => alert("Viewing Financial Growth"),
          },
          {
            title: "Project Progress",
            value: "85%",
            Icon: FaProjectDiagram,
            additionalInfo: "Ahead of schedule",
            bgColor: "bg-indigo-600 hover:bg-indigo-700",
            actionText: "Project Details",
            action: () => alert("Viewing Project Progress"),
          },
          // New Card Data
          {
            title: "User Engagement",
            value: "Up by 40%",
            Icon: FaUsers,
            additionalInfo: "Compared to last month",
            bgColor: "bg-teal-600 hover:bg-teal-700",
            actionText: "Engagement Details",
            action: () => alert("Viewing User Engagement"),
          },
          {
            title: "Server Uptime",
            value: "99.99%",
            Icon: FaServer,
            additionalInfo: "No downtime reported",
            bgColor: "bg-orange-600 hover:bg-orange-700",
            actionText: "Server Stats",
            action: () => alert("Viewing Server Uptime"),
          },
          // End of the cards here
          {
            title: "Settings",
            value: "Configurations",
            Icon: FaCog,
            additionalInfo: "Customize your dashboard",
            bgColor: "bg-yellow-600 hover:bg-yellow-700",
            actionText: "Configure",
            action: () => alert("Opening Settings"),
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`${card.bgColor} transition duration-300 ease-in-out transform hover:-translate-y-1 p-6 rounded-lg shadow-lg flex flex-col justify-between text-white`}
          >
            <div>
              <div className="flex items-center space-x-3">
                <card.Icon size={24} />
                <div>
                  <h3 className="font-bold text-xl">{card.title}</h3>
                  <p className="text-sm">{card.additionalInfo}</p>
                </div>
              </div>
              <p className="mt-4 font-semibold text-lg">{card.value}</p>
            </div>
            <button
              onClick={card.action}
              className="mt-4 py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200 self-start flex items-center"
            >
              {card.actionText} <FaArrowRight className="ml-2" />
            </button>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Line Chart */}
        <div className="bg-dark-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-sm uppercase mb-4 text-gray-700 dark:text-gray-300">
            Sales Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={lineChartData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
              <XAxis dataKey="name" stroke={axisColor} />
              <YAxis stroke={axisColor} />
              <Tooltip
                contentStyle={{
                  backgroundColor: tooltipBgColor,
                  borderColor: gridColor,
                }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ stroke: "#F59E0B", strokeWidth: 2, fill: "#F59E0B" }}
                activeDot={{
                  stroke: "#F59E0B",
                  strokeWidth: 2,
                  fill: "#F59E0B",
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-dark-accent p-6 rounded-lg shadow-lg">
          <h3 className="text-sm uppercase mb-4 text-gray-700 dark:text-gray-300">
            Traffic Sources
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                outerRadius="70%"
                dataKey="value"
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {pieChartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                wrapperStyle={{
                  borderColor: theme === "light" ? "#8884d8" : "#0088FE",
                  backgroundColor: theme === "light" ? "#ffffff" : "#121212",
                  color: theme === "light" ? "#000000" : "#ffffff",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Home;
