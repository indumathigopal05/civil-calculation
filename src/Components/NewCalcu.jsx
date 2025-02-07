import React from "react";
import { Flex, Box, List, ListItem, ListIcon, Text } from "@chakra-ui/react";
import Blending from "./Blending";
import QualityEstimate from "../Components/QualityEstimate"
import RoadConstructionCalculator from "./RoadConstructionCalculator";
import SoilTest from "./SoilTest";
import EnvironmentEngg from "./EnvironmentEngg";

const NewCalcu = () => {
  return (
    <Flex 
      minHeight="100vh" 
    
      flexDirection={{ base: "column", md: "row" }} 
      gap={4} 
      p={4}
      fontFamily="sans-serif"
    >
      <Flex 
      
        flex={{ base: "1", md: "1" }} 
        flexDirection="column"
      
        gap={10}
      >
        <Box>
          <Box border="1px solid #ccc" bg="#3598dc" color="white" p={3}>
            <Text fontSize={{ base: "xl", md: "2xl" }} >
              New Calculators
            </Text>
          </Box>
          <List>
            {["Countertop(Platform) Calculator", "Air Conditioner Size Calculator", "Solar Rooftop Calculator", "Solar Water Heater Calculator","Bitumen Prime Coat","Bitumen Tack Coat"].map((item, index) => (
              <ListItem key={index}>
                <Box border="1px solid #ccc" p={3}>
                  <ListIcon color="teal.500" />
                  {item}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Flex >
          <QualityEstimate />
        </Flex>
      </Flex>
      
      <Flex 
        flex={{ base: "1", md: "1" }} 
        flexDirection="column" 

        gap={10}
      >
        <Box>
          <Box border="1px solid #ccc" bg="#444d58" color="white" p={3}>
            <Text fontSize={{ base: "xl", md: "2xl" }}>
              Concrete Technology
            </Text>
          </Box>
          <List >
            {["Sieve Analysis of Aggregates", "Blending of Aggregates", "Aggregate Impact Value", "Aggregate Crushing Value"].map((item, index) => (
              <ListItem key={index}>
                <Box border="1px solid #ccc" p={3}>
                  <ListIcon color="teal.500" />
                  {item}
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
        <Flex>
          <RoadConstructionCalculator />
        </Flex>
        <Flex>
          <SoilTest />
        </Flex>
        <Flex>
          <EnvironmentEngg />
        </Flex>
      </Flex>
      
      <Flex flex={{ base: "1", md: "2" }} >
        <Blending />
      </Flex>
    </Flex>
  );
};

export default NewCalcu;
