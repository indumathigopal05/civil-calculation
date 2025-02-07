
import { Box, Text, List, ListItem, ListIcon,Flex } from "@chakra-ui/react";


const soilTests = [
  "Water Content Determination",
  "Specific Gravity Determination",
  "Sieve Analysis of Soil",
  "Free Swell Index of Soil",
  "Liquid Limit of Soil",
  "Permeability by Constant Head",
  "Direct Shear Test",
  "UCS Test Calculator",
  "IN-SITU Density By Core Cutter Method",
  "California Bearing Ratio Test"
];

const SoilTest = () => {
  return (
    <Flex 
                flex={{ base: "1", md: "1" }} 
                flexDirection="column" 
                
                gap={6}
              >
    <Box >
      <Box border="1px solid #ccc" bg="#444d58" p={4} >
        <Text fontSize={{ base: "lg", md: "2xl" }} color="white" fontWeight="bold">
          Soil Test <Text as ="span" fontSize="sm">Calculators</Text>
        </Text>
      </Box>
      
      <List>
        {soilTests.map((test, index) => (
          <ListItem key={index} border="1px solid #ccc" p={3} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }} display="flex" alignItems="center">
            <ListIcon color="teal.500" />
            <Text fontSize={{ base: "sm", md: "md" }}>{test}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
    </Flex>
  );
};

export default SoilTest;
