import React from "react";
import { Td, Table, Thead, Th, Tr, Box, Flex, Tbody } from "@chakra-ui/react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const QualityCalculation = ({ totalVolume = 0 }) => {
  if (totalVolume <= 0) {
    return <Box p={4} color="red.500">Please calculate the total volume first.</Box>;
  }

  const wetVolume = totalVolume + (totalVolume * 52.4) / 100;
  const cementVolume = (1 / 5.5) * wetVolume;
  const cementBags = cementVolume / 0.035;
  const sandVolume = (1.5 / 5.5) * wetVolume;
  const sandKg = sandVolume * 1550;
  const aggregateVolume = (3 / 5.5) * wetVolume;
  const aggregateKg = aggregateVolume * 1350;

  // Data for Pie Chart
  const data = [
    { name: "Cement", value: cementBags },
    { name: "Sand", value: sandKg / 1000 }, // Convert to Ton
    { name: "Aggregate", value: aggregateKg / 1000 }, // Convert to Ton
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <Flex 
      direction={{ base: "column", md: "row" }} 
      w={{base:"100%",md:"100%"}} 
      bg="white" 
      borderRadius="md" 
      p={2}
      gap={4} 
      alignItems="center"
      fontFamily="sans-serif"
    >
      {/* Table Section */}
      <Box flex="1" width={{base:"100%",md:"100%"}} fontFamily="sans-serif">
        <Table variant="simple" fontFamily="sans-serif">
          <Thead fontFamily="sans-serif">
            <Tr>
              <Th >Sr.</Th>
              <Th>Material</Th>
              <Th>Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Cement</Td>
              <Td>{cementBags.toFixed(2)} bags</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>Sand</Td>
              <Td>{(sandKg / 1000).toFixed(2)} Ton</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Aggregate</Td>
              <Td>{(aggregateKg / 1000).toFixed(2)} Ton</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>

      {/* Pie Chart Section */}
      <Box 
        flex="1" 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        width={{ base: "100%", md: "50%" }} 
        mt={{ base: 4, md: 0 }} // Adds margin in mobile to separate from table
      >
        <PieChart width={350} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
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

export default QualityCalculation;
