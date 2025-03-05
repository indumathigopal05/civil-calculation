import React from "react";
import { Flex, Box, Text, Heading, useBreakpointValue } from "@chakra-ui/react";

const Plas_Formula = () => {
  // Responsive layout: column on small screens, row on larger screens
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const boxWidth = useBreakpointValue({ base: "100%", md: "50%" });

  return (
    <Flex bg="white" direction="column">
      <Box p={4} borderBottom="1px solid #eee" width="90%">
        <Heading size="md">Material Calculation</Heading>
      </Box>
      <Flex direction={flexDirection} justifyContent="space-between" p={2}>
        {/* Left Side - Step 1 */}
        <Flex
          bg="white"
          flex={1}
          flexDirection="column"
          width={boxWidth}
          p={2}
          gap={4}
          borderRight={{ base: "none", md: "4px solid gray" }} // Thicker border in desktop view
        >
          <Box>
            <Text fontWeight="bold">Step 1:</Text>
            <Text>Volume Of Mortar = Plaster Area * Plaster Thickness In Meter</Text>
            <Text>Volume of Mortar = 100.00 * 0.012</Text>
          </Box>
          
          <Box bg="green.100" p={2} border="1px solid green.100" textAlign="center">
            <Text>Note: Add 30% to Fill up joints & Cover Surface</Text>
          </Box>
          
          <Box>
            <Text>Volume Of Mortar = 1.20 + (1.20) * 0.3</Text>
            <Text>
              Volume Of Mortar = 1.56m<sup>3</sup>
            </Text>
          </Box>
          
          <Box bg="green.100" p={2} border="1px solid green.100" textAlign="center">
            <Text>Note: Add 30% to Fill up joints & Cover Surface</Text>
          </Box>
          
          <Box>
            <Text>Dry Volume of Mortar = 1.20 + (1.20 * 0.3)</Text>
            <Text>Volume of Mortar = 1.56 m<sup>3</sup></Text>
          </Box>
        </Flex>

        {/* Right Side - Step 2 */}
        <Flex
          bg="white"
          flex={1}
          flexDirection="column"
          width={boxWidth}
          p={2}
          gap={4}
        >
          <Box>
            <Box mb={2}><Heading size="md">Step 2:</Heading></Box>
            <Box>
            <Text>= Dry Volume * Cement Ratio  / Volume of Cement Bag</Text>
            <Text>=(1.95 * 1/4) / 0.035</Text>
          </Box>
          </Box>
          
          <Box bg="green.100" p={2} border="1px solid green.100" textAlign="center">
            <Text>Note: Add 30% to Fill up joints & Cover Surface</Text>
          </Box>
          
          <Box p={2}>
            <Box mb={2}><Heading size="md">Step 3: Quantity of Sand Required</Heading></Box>
            <Box>
             <Text>=(Dry Volume * Sand Ratio / Sum of Ratio) * Density of Sand</Text>
            <Text>=(1.95 * 3/4) * 1550</Text>
            <Text>Quantity of Sand required: 2267 Kg</Text>
            <Text>Quantity of Sand required: 2.27 Ton</Text>
          </Box>
          </Box>
          
          <Box bg="green.100"  border="1px solid green.100" p={2} textAlign="center">
            <Text>Note: Add 30% to Fill up joints & Cover Surface</Text>
          </Box>
          <Box p={2}>
          <Box mb={2}><Heading size="md">Plastering Calculation</Heading></Box>
            <Box>
            <Text>Area of Plastering = Length * Width</Text>
            <Text>Amount of Cement = (Dry Volume * Cement Ratio / Sum of Ratio) * Density of Sand</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Plas_Formula;
