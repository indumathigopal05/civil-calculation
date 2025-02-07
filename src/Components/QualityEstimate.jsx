import { Box, Text, List, ListItem, ListIcon,Flex } from "@chakra-ui/react";
//import { CheckCircleIcon } from "@chakra-ui/icons";

const calculators = [
  "Construction Cost Calculator",
  "Carpet Area/Built up Area/Super built up Area Calculator",
  "Cement Concrete Calculator",
  "Plastering Calculator",
  "Brick Calculator",
  "Concrete Block Calculator",
  "Precast Compound Wall Calculator",
  "Flooring Calculator",
  "Countertop (Platform) Calculator",
  "Tank Volume Calculator",
  "Air Conditioner Size Calculator",
  "Solar Rooftop Calculator",
  "Solar Water Heater Calculator",
  "Paint Work Calculator",
  "Excavation Calculator",
  "Wood Framing Calculator",
  "Plywood Sheets Calculator",
  "Anti Termite Calculator",
  "Round Column Calculator",
  "Staircase Calculator",
  "Top Soil Calculator",
  "Steel Weight Calculator",
  "Concrete Tube Calculator",
  "Roof Pitch Calculator",
  "Asphalt Calculator",
  "Steel Quality Calculator",
  "Civil Unit Convertor",
];

const QualityEstimate = () => {
  return (
    <Flex 
            flex={{ base: "1", md: "1" }} 
            flexDirection="column" 
            fontFamily="sans-serif"
            >
    <Box>
      <Box border="1px solid #ccc" bg="#3598dc" p={4} display="flex"gap={2}>
        <Text fontSize={{ base: "lg", md: "22px" }} color="white" fontWeight="bold">
          Quantity Estimator <Text as ="span" fontSize="sm">Calculators</Text>
        </Text>
        {/* <Text fontSize={{ base: "sm", md: "md" }} color="white">
          Calculators
        </Text> */}
      </Box>
      
      <List  >
        {calculators.map((calc, index) => (
          <ListItem key={index} border="1px solid #ccc" p={3} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }} display="flex" alignItems="center">
            <ListIcon  color="teal.500" />
            <Text fontSize={{ base: "sm", md: "md" }}>{calc}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
    </Flex>
  );
};

export default QualityEstimate;
