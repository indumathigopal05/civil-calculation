import React from 'react';
import { Flex, Box, Text, Heading, Image } from "@chakra-ui/react";
import PCC from "../../assets/PCC.png";

const Rcc = () => {
  return (
    <Flex width="100%" direction="column" bg="white" p={4} fontFamily="sans-serif">
      <Box>
        <Heading size="md" p={2}>What is PCC (Plain Cement Concrete) Calculation?</Heading>
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
              The term PCC stands for plain cement concrete. The mixture of cement, 
              fine aggregate (sand), and coarse aggregate are generally called 
              plain cement concrete (PCC).
            </Text>
          </Box>
          <Box>
            <Text>
              Plain Cement Concrete (PCC) is also called Cement Concrete (CC) or 
              Blinding Concrete. It is used for leveling, bedding for footings, 
              grade slabs, concrete roads, etc. PCC provides a non-porous, rigid, 
              impervious, firm, and leveled bed for laying RCC where the earth is 
              soft and yielding. It can be used over brick flat soling or without 
              brick flat soling. PCC is also used as a filler like lump concrete, 
              which is a mix of PCC and boulders. It consists of cement, sand, and 
              coarse aggregates mixed with water in the specified proportions.
            </Text>
          </Box>
        </Flex>

        {/* Image Section Second */}
        <Box width={{ base: "100%", md: "40%" }}>
          <Image src={PCC} width="100%" borderRadius="md" alt="Pcc" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Rcc;
