import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";


const environmentalTests = [
  "Chemical Oxygen",
  "Biochemical Oxygen Demand",
  "Ammonical Nitrogen Test"
];

const EnvironmentEngg = () => {
  return (
    <Box>
      <Box border="1px solid #ccc" bg="#444d58" p={4}>
        <Text fontSize={{ base: "lg", md: "22px" }} color="white" fontWeight="bold">
          Environmental Engineering Test
        </Text>
      </Box>
      
      <List>
        {environmentalTests.map((test, index) => (
          <ListItem key={index} border="1px solid #ccc" p={3} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }} display="flex" alignItems="center">
            <ListIcon color="teal.500" />
            <Text fontSize={{ base: "sm", md: "md" }}>{test}</Text>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default EnvironmentEngg;
