import React from "react";
import styles from "./CircularChart.module.css"; // Replace with your CSS file

const CircularChart = () => {
  const percentages = [56, 35, 27, 6]; // Percentages to represent
  const total = percentages.reduce((acc, val) => acc + val, 0); // Calculate total

  // Function to get different colors for each segment
  const getColor = (index) => {
    const colors = ["#19A01E", "#FB8B34", "#00DB4A", "#ED1C24"]; // Add more colors if needed
    return colors[index % colors.length];
  };

  // Calculate angles for each percentage
  const angles = percentages.map((percentage) => (percentage / total) * 360);

  // Calculate cumulative angles for the segments
  let cumulativeAngle = 0;
  const arcs = angles.map((angle, index) => {
    const arc = (
      <circle
        key={index}
        className={styles.arc}
        cx="100"
        cy="100"
        r="50"
        style={{
          stroke: getColor(index),
          strokeWidth: "15",
          strokeDasharray: `${angle} 360`,
          transform: `rotate(${cumulativeAngle}deg)`,
          transformOrigin: "center",
        }}
      />
    );
    cumulativeAngle += angle;
    return arc;
  });

  return (
    <svg viewBox="0 0 200 200" className={styles.circularChart}>
      {arcs}
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        className={styles.centerText}
      >
        <tspan x="100" dy="-0.5em">
          124
        </tspan>
        <tspan x="100" dy="1em">
          Cameras
        </tspan>
      </text>
    </svg>
  );
};

export default CircularChart;