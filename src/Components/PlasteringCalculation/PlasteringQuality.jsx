import React, { useState, useEffect } from 'react';
import { Flex, Box, Table, Tr, Thead, Tbody, Th, Td } from '@chakra-ui/react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PlasteringQuality = ({ totalVolume }) => {
  const [cement, setCement] = useState(0);
  const [sand, setSand] = useState(0);

  useEffect(() => {
    if (totalVolume > 0) {
      const newCement = (totalVolume * 1.23) / 4 * 0.035;
      const newSand = (totalVolume * 1.23 * 0.3) / 4 * 1550;
      setCement(newCement);
      setSand(newSand);
    } else {
      setCement(0);
      setSand(0);
    }
  }, [totalVolume]);

  // Pie Chart Data
  const data = [
    { name: 'Cement', value: cement },
    { name: 'Sand', value: sand },
  ];

  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <Flex flexDirection="column" gap={4} alignItems="center">
      {/* Table & Chart Section */}
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'flex-start', md: 'center' }}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        gap={4}
      >
        {/* Table Section */}
        <Box width={{ base: '100%', md: '50%' }} fontFamily="sans-serif">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr.</Th>
                <Th>Material</Th>
                <Th>Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Cement</Td>
                <Td>{Math.round(cement)} bags</Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Sand</Td>
                <Td>{sand.toFixed(2)} kg</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        {/* Pie Chart Section */}
        <Box width={{ base: '100%', md: '50%' }}>
          <PieChart width={300} height={300}>
            <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PlasteringQuality;
