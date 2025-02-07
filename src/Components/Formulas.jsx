
// import React from "react";
import { Flex, Text, Box } from "@chakra-ui/react";

const Formulas = () => {
  return (
    <Flex
      bg="lightgray"
      align="center"
      justify="center"
      fontFamily="sans-serif"
      
    >
      <Flex
        width="100%"
        direction={{ base: "column", md: "row" }}
        justify="center"
        wrap="wrap"
      >
        {/* Total Cost Section */}
        <Flex
          bg="white"
          p={4}
          align="center"
          direction="column"
          gap={6}
          width={{ base: "100%", md: "50%", lg: "40%" }}
          borderRight={{ base: "none", lg: "2px solid #ccc" }}
          borderBottom={{ base: "2px solid #ccc", lg: "none" }}
        >
          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Total Cost
            </Text>
            <Text mb={3}>= Builtup Area X Approx Cost per sq.ft</Text>
            <Text mb={3}>= 1000 X 1000 Rs</Text>
            <Text fontWeight="bold">= 100000000.00 Rs</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Amount of Aggregate Required
            </Text>
            <Text mb={3}>= Builtup Area X 0.608</Text>
            <Text mb={3}>= 1000 X 0.608</Text>
            <Text fontWeight="bold">= 608.00 Ton</Text>
          </Box>

          <Box textAlign="center">
            <Text fontWeight="bold" mb={3}>
              Aggregate Amount
            </Text>
            <Text mb={3}>= 7.4/100 X Total Cost</Text>
            <Text mb={3}>= 7.4/100 X 100000000.00</Text>
            <Text fontWeight="bold">= 7400000.00 Rs</Text>
          </Box>
        </Flex>

        {/* Cement & Steel Section */}
        <Flex
          bg="white"
          p={4}
          align="center"
          direction="column"
          gap={6}
          width={{ base: "100%", md: "50%", lg: "30%" }}
          borderRight={{ base: "none", lg: "2px solid #ccc" }}
          borderBottom={{ base: "2px solid #ccc", lg: "none" }}
        >
          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Amount of Cement Required
            </Text>
            <Text mb={3}>= Builtup Area X 0.4</Text>
            <Text mb={3}>= 1000 X 0.4</Text>
            <Text fontWeight="bold">= 400.00 Bags</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Cement Amount
            </Text>
            <Text mb={3}>= 16.4/100 X Total Cost</Text>
            <Text mb={3}>= 16.4/100 X 100000000.00</Text>
            <Text fontWeight="bold">= 16400000.00 Rs</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Amount of Steel Required
            </Text>
            <Text mb={3}>= Builtup Area X 4</Text>
            <Text mb={3}>= 1000 X 4</Text>
            <Text fontWeight="bold">= 4000.00 Bags</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Steel Amount
            </Text>
            <Text mb={3}>= 24.6/100 X Total Cost</Text>
            <Text mb={3}>= 24.6/100 X 100000000.00</Text>
            <Text fontWeight="bold">= 24600000.00 Rs</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Amount of Bricks Required
            </Text>
            <Text mb={3}>= Builtup Area X 8</Text>
            <Text mb={3}>= 1000 X 8</Text>
            <Text fontWeight="bold">= 8000.00 Pcs.</Text>
          </Box>
        </Flex>

        {/* Sand & Finishes Section */}
        <Flex
          bg="white"
          p={4}
          align="center"
          direction="column"
          gap={6}
          width={{ base: "100%", md: "50%", lg: "30%" }}
        >
          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Amount of Sand Required
            </Text>
            <Text mb={3}>= Builtup Area X 0.816</Text>
            <Text mb={3}>= 1000 X 0.816</Text>
            <Text fontWeight="bold">= 816.00 Tons</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Sand Amount
            </Text>
            <Text mb={3}>= 12.3/100 X Total Cost</Text>
            <Text mb={3}>= 12.3/100 X 100000000.00</Text>
            <Text fontWeight="bold">= 12300000.00 Rs</Text>
          </Box>

          <Box textAlign="center" borderBottom="2px solid #ccc" mb={3}>
            <Text fontWeight="bold" mb={3}>
              Finishers
            </Text>
            <Text mb={3}>= 16.5/100 X Total Cost</Text>
            <Text mb={3}>= 16.5/100 X 100000000.00</Text>
            <Text fontWeight="bold">= 16500000.00 Rs</Text>
          </Box>

          <Box textAlign="center">
            <Text fontWeight="bold" mb={3}>
              Flooring
            </Text>
            <Text mb={3}>= Builtup Area X 1.3</Text>
            <Text mb={3}>= 1000 X 1.3</Text>
            <Text fontWeight="bold">= 1300.00 Sq.ft</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Formulas;
