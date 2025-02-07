import { Text, Box, Flex } from "@chakra-ui/react";
import PieChart from "./PieChart"; // Import the PieChart component

const QualityCost = ({
  cementQuantity,
  sandQuantity,
  aggregateQuantity,
  steelQuantity,
  paintQuantity,
  brickQuantity,
  flooringQuantity,
}) => {
  return (
    <Flex
      bg="white"
      width="100%"
      direction="column"
      p={4}
      fontFamily="sans-serif"
    >
      {/* Header Section */}
      <Box width="100%" mb={4} p={4}>
        <Text fontSize={["md", "lg"]} fontWeight="bold">
          Quantity of material required for given construction area
        </Text>
      </Box>

      <Flex
        direction={["column", "row"]}  // Mobile: column, Tablet/Desktop: row
        width="100%"
        justifyContent="space-between"
        fontFamily="sans-serif"
      >
        {/* Left Section - Material Quantities */}
        <Box
          flexDirection="column"
          width={["100%", "50%"]}  // Mobile: 100%, Tablet/Desktop: 50%
          p={4}
        >
          <Box border="1px solid lightgray" p={4} width="100%">
            <Text fontSize={["sm", "md"]} fontWeight="bold" color="black">
              Quality of material required for "1000" ft<sup>2</sup>
            </Text>
          </Box>

          {/* Material Sections with Calculated Quantities */}
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Cement:</Text>
            <Text style={{ backgroundColor: "#428BCA" }}>
              {" "}
              {cementQuantity} kg
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Sand: </Text>
            <Text style={{ backgroundColor: "#89C4F4" }}>
              {" "}
              {sandQuantity} kg
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Aggregate: </Text>
            <Text style={{ backgroundColor: "#DFBA49" }}>
              {aggregateQuantity} kg
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Steel:</Text>
            <Text style={{ backgroundColor: "#45B6AF" }}>
              {steelQuantity} kg
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Paint: </Text>
            <Text style={{ backgroundColor: "#F3565D" }}>
              {paintQuantity} liters
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Bricks:</Text>
            <Text style={{ backgroundColor: "#45B6AF" }}>
              {" "}
              {brickQuantity} units
            </Text>
          </Box>
          <Box
            border="1px solid gray"
            p={2}
            width="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Text>Flooring:</Text>
            <Text style={{ backgroundColor: "#F3565D" }}>
              {" "}
              {flooringQuantity} sq.ft
            </Text>
          </Box>
        </Box>

        {/* Right Section - Pie Chart */}
        <Box
          width={["100%", "45%"]}  // Mobile: 100%, Tablet/Desktop: 45%
          p={4}
          textAlign="center"
        >
          <Text fontSize={["sm", "md"]} fontWeight="bold" mb={2}>
          Approximate cost on various work of material to complete the construction
          for<Text as="span" color="red">1000 ft2</Text> 
          </Text>
          {/* Use the PieChart component */}
          <PieChart
            cementQuantity={cementQuantity}
            sandQuantity={sandQuantity}
            aggregateQuantity={aggregateQuantity}
            steelQuantity={steelQuantity}
            paintQuantity={paintQuantity}
            brickQuantity={brickQuantity}
            flooringQuantity={flooringQuantity}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default QualityCost;
