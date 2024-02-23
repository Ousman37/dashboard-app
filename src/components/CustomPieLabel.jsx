// CustomPieLabel.jsx
import React, { useState, useEffect } from "react";

const RADIAN = Math.PI / 180;
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CustomPieLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  payload,
}) => {
  // State for tracking window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect for listening to window resize events
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Adjust the radius based on the label position (top or bottom)
  const isTopLabel = midAngle < 180 || midAngle > 360;
  const radius = isTopLabel ? outerRadius * 1.1 : outerRadius * 1.2;
  // Calculate the position of the label

  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const fillColor = COLORS[index % COLORS.length];

  // Determine if label should be visible based on the percent and window width
  const isVisible = percent > 0.05 || windowWidth > 768;

  // Return the text element if label is visible
  return isVisible ? (
    <text
      x={x}
      y={y}
      fill={fillColor}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize={windowWidth > 768 ? "16px" : "12px"}
      style={{ pointerEvents: "none" }}
    >
      {`${payload.name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

export default CustomPieLabel;
