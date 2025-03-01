import React from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";

const Formula = () => {
  return (
    <Flex flexDirection="column" width="100%" bg="white" fontFamily="sans-serif" p={3} color="#666666">
      <Box>
        <Heading size="md" p={1}>Bricks Masonry Calculation</Heading>
      </Box>
      <Flex direction={{ base: "column", md: "column" }} p={2} borderTop="1px solid #eee" gap={4} fontFamily="sans-serif">
        <Box width={{ base: "100%", md: "50%" }} p={1}>
          <Heading size="sm" p={1}>Step 1:</Heading>
          <Text>Volume of Brick Masonry = Length(m) * Depth(m) * Wall Thickness(m)</Text>
          <Text>Volume of Brick Masonry = 1.07 * 2.21 * 0.23</Text>
          <Text>Volume of Brick Masonry = 0.54 m<sup>3</sup></Text>
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text>Brick Size = 19(cm) * 9(cm) * 9(cm)</Text>
          <Text>Brick Size = (19/100) * (9/100) * (9/100)</Text>
          <Text>Brick Size = 0.19(m) * 0.09(m) * 0.09(m)</Text>
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text>Size of Brick with Mortar = (0.19 + 0.01) * (0.09 + 0.01) * (0.09 + 0.01)</Text>
          <Text>Size of Brick with Mortar = 0.20(m) * 0.10(m) * 0.10(m)</Text>
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text>No of Bricks = Volume of Brick Masonry / Volume of One Brick</Text>
          <Text>No of Bricks = 0.5422 m³ / (0.20 * 0.10 * 0.10)</Text>
          <Text>No of Bricks = 271 Bricks</Text>
        </Box>
        <Box width={{ base: "100%", md: "50%" }}>
          <Text>Actual Volume of Brick Mortar = No of Bricks * Volume of Brick</Text>
          <Text>Actual Volume of Brick Mortar = 271 * (0.1900 * 0.0900 * 0.0900)</Text>
          <Text>Actual Volume of Brick Mortar = 271 * 0.0015</Text>
          <Text>Actual Volume of Brick Mortar = 0.4172 m³</Text>
        </Box>
        <Box>
          <Text>Quantity of Mortar = Volume of Brick Masonry - Volume of Brick</Text>
          <Text>Quantity of Mortar = 0.5422 - 0.4172</Text>
          <Text>Quantity of Mortar = 0.1250 m³</Text>
        </Box>
        <Box>
          <Text>Quantity of Mortar = 0.1250 + (0.1250 * 15 / 100)</Text>
          <Text>Quantity of Mortar = 0.1437 m³</Text>
        </Box>
        <Box>
          <Text>Quantity of Mortar = 0.1437 + (0.1437 * 25 / 100)</Text>
          <Text>Quantity of Mortar = 0.1797 m³</Text>
        </Box>
        <Flex direction={{ base: "column", md: "column" }} p={2} borderTop="1px solid #eee" gap={4} fontFamily="sans-serif">
          <Box>
            <Heading size="sm" p={1}>Step 2:</Heading>
            <Heading size="md" p={1}>Amount of Cement</Heading>
            <Text>Cement / Sum of Ratio * Quantity of Mortar</Text>
            <Text>Cement = 1/5 * 0.1797</Text>
            <Text>No of Cement Bags = 0.0359 / 0.035</Text>
            <Text>No of Cement Bags = 51 kg</Text>
          </Box>
          <Box>
            <Heading size="md" p={1}>Amount of Sand Required</Heading>
            <Text>Sand / Sum of Ratio * Quantity of Mortar</Text>
            <Text>Sand = 4/5 * 0.1797</Text>
            <Text>Sand = 0.1437 m³</Text>
            <Text>Sand = 0.14 * 1500</Text>
            <Text>Sand = 215.59 kg</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Formula;
