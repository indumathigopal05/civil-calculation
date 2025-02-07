import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
} from "chart.js";

// Register the required chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const PieChart = ({
  cementQuantity,
  sandQuantity,
  aggregateQuantity,
  steelQuantity,
  paintQuantity,
  brickQuantity,
  flooringQuantity,
}) => {
  // Data for the pie chart
  const chartData = {
    labels: [
      "Cement",
      "Sand",
      "Aggregate",
      "Steel",
      "Paint",
      "Bricks",
      "Flooring",
    ],
    datasets: [
      {
        data: [
          cementQuantity,
          sandQuantity,
          aggregateQuantity,
          steelQuantity,
          paintQuantity,
          brickQuantity,
          flooringQuantity,
        ],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
          "#9966FF",
          "#FFCD56",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
          "#9966FF",
          "#FFCD56",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width:"100%",
        height:"300px",
      
        padding: "10px",
        marginTop: "10px",
        boxSizing: "border-box",
         // Ensures padding doesn't affect width
         borderRadius: "20px", // Round the edges of the container
         overflow: "hidden", // Ensures padding doesn't affect width
      }}
    >
      <Pie
        data={chartData}
        options={{
          responsive: true,
          maintainAspectRatio: false, // Prevents the aspect ratio from being locked
          plugins: {
            legend: {
              position: "top", // position the legend on top
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
