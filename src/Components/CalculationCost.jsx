import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import BarChart from "./BarChart"; // Import the BarChart component

const CalculationCost = ({
  totalCost = 0,
  cementCost = 0,
  sandCost = 0,
  aggregateCost = 0,
  steelCost = 0,
  finishersCost = 0,
}) => {
  // Calculate fittings cost dynamically
  const fittingsCost = (22.8 / 100) * totalCost;

  const materialCosts = [
    { label: "Cement", cost: cementCost, bg: "#428BCA" },
    { label: "Sand", cost: sandCost, bg: "#89C4F4" },
    { label: "Aggregate", cost: aggregateCost, bg: "#DFBA49" },
    { label: "Steel", cost: steelCost, bg: "#45B6AF" },
    { label: "Finishers", cost: finishersCost, bg: "#F3565D"},
    
  ];

  return (
    <Flex width="100%" bg="white" direction="column" p={4}>
      {/* Header Section */}
      <Box width="100%" mb={3}>
        <Text fontSize={["md", "lg"]} fontWeight="bold" fontFamily="sans-serif">
          Calculation of Cost: Approximate amount of cost for given construction{" "}
          <Text as="span" color="red" fontWeight="bold" whiteSpace="nowrap">
            {totalCost ? totalCost.toLocaleString() : 0} Rs
          </Text>
        </Text>
      </Box>

      <Flex
        direction={["column", "row"]}
        width="100%"
        height="auto"
        fontFamily="sans-serif"
        gap={4} // Ensures spacing between sections in mobile view
      >
        {/* Left Section - Approximate Cost of Materials */}
        <Box width={["100%", "50%"]} p={4} display="flex" flexDirection="column">
          {/* Title */}
          <Box border="1px solid lightgray" p={4} bg="white">
            <Text fontSize={["sm", "md"]} fontWeight="bold" color="black">
              Approximate Cost on Various Work of Materials as per Thumb Rule
            </Text>
          </Box>

          {/* Material Costs */}
          {materialCosts.map((item, index) => (
            <Box
              key={index}
              border="1px solid gray"
              p={2}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <Text>{item.label}:</Text>
              <Text bg={item.bg} px={2} borderRadius="4px" color="white">
                {item.cost.toFixed(2)}
              </Text>
            </Box>
          ))}

          {/* Fittings Cost - Separate Box for Better Display */}
          

          {/* Total Cost */}
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
            fontWeight="bold"
            
          >
            <Text>Total Cost:</Text>
            <Text bg="#F3565D" px={2} borderRadius="4px" color="white">
              Rs {totalCost ? totalCost.toLocaleString() : 0}
            </Text>
          </Box>
        </Box>

        {/* Right Section - Bar Chart */}
        <Box width={["100%", "60%"]} p={2} textAlign="center">
          <Text fontSize={["sm", "lg"]} fontWeight="bold" >
            To complete this construction in a  <Text as="span" color="red.500">6-month</Text> timeline, the required
            money is as below:
          </Text>

          {/* Bar Chart Component */}
          <Box height={["250px", "150px"]}  >
            <BarChart
              cementCost={cementCost}
              sandCost={sandCost}
              aggregateCost={aggregateCost}
              steelCost={steelCost}
              finishersCost={finishersCost}
              fittingsCost={fittingsCost} // Dynamically calculated value
            />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CalculationCost;
