// CustomTooltip.jsx
import React from "react";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "5px",
          border: "1px solid #ddd",
        }}
      >
        <p className="label">{`${payload[0].name} : ${(
          payload[0].value * 100
        ).toFixed(0)}%`}</p>
      
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
