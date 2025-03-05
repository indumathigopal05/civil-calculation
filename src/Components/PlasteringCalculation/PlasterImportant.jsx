import React from "react";
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import Plastering2 from "../../assets/Plastering2.png";

const PlasterImportant = () => {
  return (
    <Flex
      width="100%"
      direction="column"
      bg="white"
      p={4}
      fontFamily="sans-serif"
    >
      <Box>
        <Heading size="md" p={2}>
          What is plastering calculation?
        </Heading>
      </Box>

      {/* Text Section First */}
      <Flex
        direction={{ base: "column", md: "row" }}
        bg="white"
        width="100%"
        p={4}
        gap={4}
      >
        <Flex direction="column" width={{ base: "100%", md: "60%" }} gap={2}>
          <Box>
            <Text>
              Plastering is the process of covering rough walls and uneven
              surfaces in the construction of houses and other structures with a
              plastic material, called plaster, which is a mixture of lime or
              cement concrete and sand along with the required quantity of
              water.
            </Text>
          </Box>
          <Box>
            <Text>
              Plastering is done to protect the surface of masonry from
              atmospheric influences, especially rain. It provides lateral
              stability by binding all bricks or stones and protects masonry
              joints.
            </Text>
          </Box>
        </Flex>

        {/* Image Section Second */}
        <Box width={{ base: "100%", md: "40%" }}>
          <Image src={Plastering2} width="100%" borderRadius="md" alt="Plasteringimage" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default PlasterImportant;
