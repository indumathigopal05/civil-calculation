import React from 'react';
import { Flex, Box, Text, Heading } from "@chakra-ui/react";

const Formula = () => {
  return (
    <Flex bg="green" width="100%" direction="column" p={4}>
      <Box width="100%" mb={4}>
        <Heading size="md" textAlign="center">Cement Concrete Calculation</Heading>
      </Box>

      {/* Cement Concrete Volume & Wet Volume */}
      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box bg="blue.400" width={{ base: "100%", md: "50%" }} p={4} borderRadius="md">
          <Heading size="md">Cement Concrete Volume</Heading>
          <Text>= Length X Width X Depth</Text>
          <Text>= 10.00 X 7.00 X 4.00</Text>
          <Text>= 280.00 m<sup>3</sup></Text>
        </Box>

        <Box bg="gray.200" width={{ base: "100%", md: "50%" }} p={4} borderRadius="md">
          <Heading size="md">Wet Volume of Mix</Heading>
          <Text>= Total Volume + (Total Volume * 52.4 / 100)</Text>
          <Text>= 280 + (280.00 * 52.4 / 100)</Text>
          <Text>= 426.72 m<sup>3</sup></Text>
        </Box>
      </Flex>

      {/* Cement, Sand, and Aggregate Calculations */}
      <Flex direction="column" gap={4} mt={4}>
        {/* Cement Section */}
        <Box bg="purple.300" p={4} borderRadius="md">
          <Heading size="md">Amount of Cement Required</Heading>
          <Text>Cement Volume</Text>
          <Text>= Cement Ratio / Sum of Ratio * Wet Volume of Mix</Text>
          <Text>= 1 / 5.5 * 426.7</Text>

          <Heading size="md" mt={4}>No of Cement Bags</Heading>
          <Text>= Cement Volume / 0.035</Text>
          <Text>= 77.59 / 0.035</Text>
          <Text>2216.73 Bags</Text>
        </Box>

        {/* Sand Section */}
        <Box bg="orange" p={4} borderRadius="md">
          <Heading size="md">Amount of Sand Required</Heading>
          <Text>Sand Volume</Text>
          <Text>= Sand Ratio / Sum of Ratio * Wet Volume of Mix</Text>
          <Text>= 1.5 / 5.5 * 426.72</Text>
          <Text>116.38 m<sup>3</sup></Text>

          <Heading size="md" mt={4}>Sand in Kg</Heading>
          <Text>= Sand Volume X 1550</Text>
          <Text>= 116.38 X 1550</Text>
          <Text>= 180386.18 kg</Text>

          <Heading size="md" mt={4}>Sand in Ton</Heading>
          <Text>= Sand in Kg / 1000</Text>
          <Text>= 180386.18 / 1000</Text>
          <Text>180.39 Ton</Text>
        </Box>

        {/* Aggregate Section */}
        <Box bg="red" p={4} borderRadius="md">
          <Heading size="md">Amount of Aggregate Required</Heading>
          <Text>Aggregate Volume</Text>
          <Text>= Aggregate Ratio / Sum of Ratio * Wet Volume of Mix</Text>
          <Text>= 3 / 5.5 * 426.72</Text>
          <Text>= 232.76 m<sup>3</sup></Text>

          <Heading size="md" mt={4}>Aggregate in Kg</Heading>
          <Text>= Aggregate Volume X 1350</Text>
          <Text>= 232.76 X 1350</Text>
          <Text>= 314221.09 kg</Text>

          <Heading size="md" mt={4}>Aggregate in Ton</Heading>
          <Text>= Aggregate in Kg / 1000</Text>
          <Text>= 314221.09 / 1000</Text>
          <Text>314.22 Ton</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Formula;
