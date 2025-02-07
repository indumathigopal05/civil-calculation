// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// // Register the necessary chart components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BarChart = ({
//   cementCost,
//   sandCost,
//   aggregateCost,
//   steelCost,
//   finishersCost,
//   fittingsCost,
// }) => {
//   // Data for the bar chart
//   const chartData = {
//     labels: ["Cement", "Sand", "Aggregate", "Steel", "Finishers", "Fittings"],
//     datasets: [
//       {
//         label: "Cost (Rs)",
//         data: [
//           cementCost,
//           sandCost,
//           aggregateCost,
//           steelCost,
//           finishersCost,
//           fittingsCost,
//         ],
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#FF9F40",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//         borderColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#FF9F40",
//           "#4BC0C0",
//           "#9966FF",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: "Cost Distribution for Construction Materials",
//       },
//     },
//   };

//   return <Bar width={["100%","40%"]} data={chartData} options={chartOptions} />;
// };

// export default BarChart;

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({
  cementCost,
  sandCost,
  aggregateCost,
  steelCost,
  finishersCost,
  fittingsCost,
}) => {
  // Data for the bar chart
  const chartData = {
    labels: ["Cement", "Sand", "Aggregate", "Steel", "Finishers", "Fittings"],
    datasets: [
      {
        label: "Cost (Rs)",
        data: [
          cementCost,
          sandCost,
          aggregateCost,
          steelCost,
          finishersCost,
          fittingsCost,
        ],
        backgroundColor: [
          //"#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
          "#9966FF",
        ],
        borderColor: [
          //"#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#FF9F40",
          "#4BC0C0",
          "#9966FF",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,  // Allow the chart to adjust freely in terms of height/width
    plugins: {
      title: {
        display: true,
        
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        barThickness: "flex",  // Automatically adjust the bar width
      },
      y: {
        beginAtZero: true,
      },
    },
    // Custom configuration for responsiveness
    aspectRatio: window.innerWidth < 768 ? 2 : 1,  // Make bars wider on smaller screens (mobile view)
  };

  return (
    <div style={{ position: "relative", height: window.innerWidth < 768 ? "250px" : "300px", width: "100%"}}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
