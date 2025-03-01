import React, { useEffect, useState } from "react";
import { Box, Table, Thead, Th, Tbody, Tr, Td, Flex } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const BrickQuality = ({
  totalVolume = 10, // Default total volume in cubic meters
  brickSize = { length: 19, width: 9, height: 9 }, // Default brick size in cm
}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (totalVolume > 0) {
      // Convert brick size from cm to meters
      const brickVolume =
        (brickSize.length / 100) *
        (brickSize.width / 100) *
        (brickSize.height / 100);

      // Calculate total bricks
      const totalBricks = Math.ceil(totalVolume / brickVolume);

      // Fixed calculations for cement and sand
      const cementBags = Math.round((1 / 5) * 0.1797 * totalVolume * 28.8); // Cement in bags
      const sandQuantityM3 = (4 / 5) * 0.1794 * totalVolume; // Sand in m³
      const sandQuantityTons = (sandQuantityM3 * 1.6).toFixed(2); // Sand in tons (1 m³ = ~1.6 tons)

      // Update state for table and chart
      setData([
        { name: "Bricks", value: totalBricks, unit: "Nos" },
        { name: "Cement", value: cementBags, unit: "bags" },
        { name: "Sand", value: sandQuantityTons, unit: "tons" }, // Updated to tons
      ]);
    }
  }, [totalVolume, brickSize]);

  // Colors for Pie Chart
  const COLORS = ["#ff5733", "#33ff57", "#3357ff"]; // Orange, Green, Blue

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
      alignItems={{base:"flex-start",md:"center"}}
      justifyContent={{base:"flex-start",md:"center"}}
      gap={2} 
      p={4}
      // Adds space between table and chart
    >
      {/* Table Section */}
      <Box width={{ base: "100%", md: "50%" }} fontFamily="sans-serif" >
        <Table >
          <Thead>
            <Tr>
              <Th>Sr.</Th>
              <Th>Material</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.name}</Td>
                <Td>
                  {item.value} {item.unit}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

      {/* Pie Chart Section - Below Table in Mobile View */}
      <Box 
        width={{ base: "100%", md: "50%" }} // Smaller container in mobile
        display="flex" 
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <PieChart width={220} height={220}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={{ base: 50, md: 100 }} // Smaller in mobile view
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </Box>
    </Flex>
  );
};

export default BrickQuality;
