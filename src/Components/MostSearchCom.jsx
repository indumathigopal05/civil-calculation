import { Box, Text, Image, Flex } from "@chakra-ui/react";
import React from "react";
import GooglePlayStore from "../assets/GooglePlayStore.png";
import MobileApp_CivilQuantityEstimator from "../assets/MobileApp_CivilQuantityEstimator.png";
import CalculationList from "./CalculationList";

const MostSearchCom = () => {
  return (
    <Box bg="#E7E7EC" p={4}>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        {/* Most Searched Components Section */}
        <CalculationList />

        {/* Mobile App Section */}
        <Box
          bg="blue.100"
          width={{ base: "block", md: "30%" }}
          p={4}
          border="1px solid #ccc"
          borderRadius="md"
        >
          <Box borderBottom="1px solid #ccc" pb={2} mb={4}>
            <Text
              fontSize="2xl"
              color="#666666"
              fontWeight="bold"
              fontFamily="sans-serif"
            >
              Mobile App - Civil Quality Estimator
            </Text>
          </Box>
          <Text fontSize="md" color="#333333" mb={4} fontFamily="sans-serif">
            Civil Quantity Estimator contains the set of calculators for the
            estimation of Cement Concrete, Clay Bricks, Cement Blocks, Paint,
            Steel, Flooring, Compound wall, Plastering, Tank Volume, Excavation,
            etc.
          </Text>
          <Flex justifyContent="center" mb={6}>
            <Image
              width={{ base: "50%", md: "40%" }}
              height={{ base: "200px", md: "60px" }}
              src={GooglePlayStore}
              alt="GooglePlayStore"
            />
          </Flex>
          <Flex justifyContent="center">
            <Image
              width={{ base: "80%", md: "70%" }} 
              height={{ base: "250px", md: "200px" }} 
              src={MobileApp_CivilQuantityEstimator}
              alt="MobileAppCivilQuantityEstimator"
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default MostSearchCom;
