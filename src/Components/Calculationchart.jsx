import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Calculationchart = ({ 
  totalCost = 0, 
  cementCost = 0, 
  sandCost = 0, 
  aggregateCost = 0, 
  steelCost = 0, 
  finishersCost = 0, 
  fittingsCost = 0 
}) => {
  // Bar Chart Data
  const data = {
    labels: ["Cement", "Sand", "Aggregate", "Steel", "Finishers", "Fittings"],
    datasets: [
      {
        label: "Cost in Rs",
        data: [cementCost, sandCost, aggregateCost, steelCost, finishersCost, fittingsCost],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40"],
        borderWidth: 1,
      },
    ],
  };

  // Chart Options
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "Material Cost Breakdown" },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <Flex bg="blue.400" width="100%" direction="column" p={4}>
      {/* Header Section */}
      <Box width="100%" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Calculation of Cost: Approximate amount of cost for given construction
        </Text>
      </Box>

      <Flex direction="row" width="100%" height="100%" justifyContent="space-between">
        {/* Left Section - Approximate Cost of Materials */}
        <Box display="flex" flexDirection="column" width="50%">
          {/* Title */}
          <Box bg="red.500" border="1px solid lightgray" p={4} width="100%">
            <Text fontSize="md" fontWeight="bold" color="white">
              Approximate Cost on Various Work of Materials as per Thumb Rule
            </Text>
          </Box>

          {/* Material Sections with Calculated Values */}
          <Box border="1px solid gray" p={2} width="100%">
            <Text>Cement: Rs {cementCost.toFixed(2)}</Text>
          </Box>
          <Box border="1px solid gray" p={2} width="100%">
            <Text>Sand: Rs {sandCost.toFixed(2)}</Text>
          </Box>
          <Box border="1px solid gray" p={2} width="100%">
            <Text>Aggregate: Rs {aggregateCost.toFixed(2)}</Text>
          </Box>
          <Box border="1px solid gray" p={2} width="100%">
            <Text>Steel: Rs {steelCost.toFixed(2)}</Text>
          </Box>
          <Box border="1px solid gray" p={2} width="100%">
            <Text>
              Finishers (16.5%) - Paint (4.1%) + Tiles (8.0%) + Bricks (4.4%) : Rs {finishersCost.toFixed(2)}
            </Text>
          </Box>
          <Box border="1px solid gray" p={2} width="100%">
            <Text>
              Fittings (22.8%) - Windows (3.0%) + Doors (3.4%) + Plumbing (5.5%) + Electrical (6.8%) + Sanitary (4.1%) : Rs {fittingsCost.toFixed(2)}
            </Text>
          </Box>

          <Box border="1px solid gray" p={2} width="100%">
            <Text>Total Cost: Rs {totalCost ? totalCost.toLocaleString() : 0}</Text>
          </Box>

          <Box width="40%" p={4} alignSelf="flex-start">
            <Text fontSize="md" fontWeight="bold">
              To complete this construction in a 6-month timeline, the required money is as below:
            </Text>
          </Box>
        </Box>

        {/* Right Section - Bar Chart */}
        <Box width="50%" bg="white" p={4}>
          <Bar data={data} options={options} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Calculationchart;
