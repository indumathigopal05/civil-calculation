import { Box, Text, List, ListItem, ListIcon,Flex } from "@chakra-ui/react";


const RoadConstructionCalculator = () => {
  return (
    <Flex 
            flex={{ base: "1", md: "1" }} 
            flexDirection="column" 
            
            gap={6}
          >
    <Box >
      <Box border="1px solid #ccc" bg="#444d58" p={2}>
        <Text fontSize={{ base: "lg", md: "2xl" }} color="white" fontWeight="bold" >
          Road Construction <Text as ="span" fontSize="sm">Calculators</Text>
        </Text>
      </Box>
      
      <List >
        <ListItem border="1px solid #ccc" p={3} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }} display="flex" alignItems="center">
          <ListIcon  color="teal.500" />
          <Text fontSize={{ base: "sm", md: "md" }}>Bitumen Prime Coat</Text>
        </ListItem>
        <ListItem border="1px solid #ccc" p={3} borderRadius="md" boxShadow="sm" _hover={{ bg: "gray.100" }} display="flex" alignItems="center">
          <ListIcon  color="teal.500" />
          <Text fontSize={{ base: "sm", md: "md" }}>Bitumen Tack Coat</Text>
        </ListItem>
      </List>
    </Box>
    </Flex>
  );
};

export default RoadConstructionCalculator;
