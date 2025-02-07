import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftAddon,
  Input,
  Button,
  Image,
  IconButton,
} from "@chakra-ui/react";
import QualityEstimate from "../Components/QualityEstimate";
import IconCostEstimator from "../assets/IconCostEstimator.png";
import CalculationCost from "./CalculationCost";
import QualityCost from "./QualityCost";
import Formulas from "./Formulas";
import { GoHome } from "react-icons/go";
import icongreater from "../assets/icongreater.png";

const ConstructionCost = () => {
  // State for input values
  const [buildupArea, setBuildupArea] = useState(1000);
  const [approxCost, setApproxCost] = useState(1000);
  const [totalCost, setTotalCost] = useState(null);
  const [cementCost, setCementCost] = useState(164000.0);
  const [sandCost, setSandCost] = useState(123000.0);
  const [aggregateCost, setAggregateCost] = useState(74000.0);
  const [steelCost, setSteelCost] = useState(246000.0);
  const [finishersCost, setFinishersCost] = useState(165000.0);
  const [fittingsCost, setFittingsCost] = useState(0);

  // State for material quantities for quality estimate
  const [cementQuantity, setCementQuantity] = useState(400);
  const [sandQuantity, setSandQuantity] = useState(816);
  const [aggregateQuantity, setAggregateQuantity] = useState(608);
  const [steelQuantity, setSteelQuantity] = useState(4000);
  const [paintQuantity, setPaintQuantity] = useState(180);
  const [brickQuantity, setBrickQuantity] = useState(8000);
  const [flooringQuantity, setFlooringQuantity] = useState(1300);

  // Calculate Total Cost & Material Costs
  const handleCalculate = () => {
    if (!buildupArea || !approxCost) {
      alert("Please enter values for Buildup Area and Approx Cost!");
      return;
    }

    const total = buildupArea * approxCost;
    setTotalCost(total);

    setCementCost((16.4 / 100) * total);
    setSandCost((12.3 / 100) * total);
    setAggregateCost((7.4 / 100) * total);
    setSteelCost((24.6 / 100) * total);
    setFinishersCost((16.5 / 100) * total);
    setFittingsCost((22.8 / 100) * total);

    // Calculate material quantities
    setCementQuantity(buildupArea * 0.4);
    setSandQuantity(buildupArea * 0.816);
    setAggregateQuantity(buildupArea * 0.608);
    setSteelQuantity(buildupArea * 4);
    setPaintQuantity(buildupArea * 0.18);
    setBrickQuantity(buildupArea * 8);
    setFlooringQuantity(buildupArea * 1.3);
  };

  // Reset function (Clears input fields)
  const handleReset = () => {
    setBuildupArea("");
    setApproxCost("");
    setTotalCost(null);
    setCementCost(0);
    setSandCost(0);
    setAggregateCost(0);
    setSteelCost(0);
    setFinishersCost(0);
    setFittingsCost(0);

    setCementQuantity(0);
    setSandQuantity(0);
    setAggregateQuantity(0);
    setSteelQuantity(0);
    setPaintQuantity(0);
    setBrickQuantity(0);
    setFlooringQuantity(0);
  };

  return (
    <Flex bg="lightgray" minHeight="100vh" direction="column">
      {/* Header */}

      <Box bg="white" width="100%" p={4}>
        {/* Container for heading & navigation */}
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }} // Column on mobile, row on larger screens
          justifyContent="space-between"
          alignItems={{ base: "flex-start", md: "center" }}
        >
          {/* Heading */}
          <Heading
            fontSize={{ base: "2xl", md: "3xl" }} // Larger font on bigger screens
            fontFamily="sans-serif"
            color="#BCC2CB"
            mb={{ base: 3, md: 0 }} // Adds spacing below the heading in mobile view
          >
            Construction Cost Calculator
          </Heading>

          {/* Navigation */}
           <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            color="#5b9bd1"
            fontFamily="sans-serif"
            gap={1} // Space between items
          >
            <IconButton bg="white" color="gray" icon={<GoHome />} />
            <Text display={{ base: "none", md: "none" }}>|</Text>
            <Text
              _hover={{ textDecoration: "underline", color: "blue.600" }}
              mr={2}
            >
              Home
            </Text>
            <Image src={icongreater} w="10px" h="10px" />
            <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
              Quality Estimator
            </Text>
            <Image src={icongreater} w="10px" h="10px" />
            <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
              Construction Cost Estimator
            </Text>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Flex
        width="100%"
        //gap={[2, 4]} // Adjust gap based on screen size
        //mt={2}
        direction={["column", "row"]} // Mobile: stack vertically, Tablet/Desktop: row
        p={4}
        gap={3}
      >
        {/* Left Section */}
        <Flex direction="column" width={["100%", "70%"]} gap={3}>
          {" "}
          {/* Mobile: 100%, Tablet/Desktop: 70% */}
          <Box width={["100%", "70%"]} bg="white" p={4}>
            {/* Title */}
            <Box
              borderBottom="1px solid lightgray"
              display="flex"
              alignItems="center"
              //gap={3}
              //P={2}
            >
              <Image
                src={IconCostEstimator}
                alt="Cost Estimator"
                boxSize="20px"
              />
              <Text fontSize="18px" fontWeight="bold" fontFamily="sans-serif">
                Construction Cost Estimator
              </Text>
            </Box>

            {/* Input Fields */}
            <Box p={4} display="flex" flexDirection="column" gap={3}>
              {/* Buildup Area */}
              <Flex
                alignItems="center"
                gap={4}
                width="100%"
                fontFamily="sans-serif"
                justifyContent="flex-end"
                direction={["column", "row"]} // Mobile: stack vertically, Tablet/Desktop: row
              >
                <Text>Buildup Area</Text>
                <InputGroup width={["100%", "30%"]}>
                  {" "}
                  {/* Mobile: full width, Tablet/Desktop: 70% */}
                  <Input
                    type="number"
                    bg="white"
                    placeholder="Enter area"
                    value={buildupArea}
                    onChange={(e) => setBuildupArea(e.target.value)}
                  />
                  <InputLeftAddon>
                    ft<sup>2</sup>
                  </InputLeftAddon>
                </InputGroup>
              </Flex>

              {/* Approx Cost Per Square Feet */}
              <Flex
                alignItems="center"
                gap={4}
                width="100%"
                fontFamily="sans-serif"
                justifyContent="flex-end"
                direction={["column", "row"]} // Mobile: stack vertically, Tablet/Desktop: row
              >
                <Text>Approx Cost (Per Square Feet)</Text>
                <InputGroup width={["100%", "30%"]}>
                  <Input
                    type="number"
                    bg="white"
                    placeholder="Enter cost"
                    value={approxCost}
                    onChange={(e) => setApproxCost(e.target.value)}
                  />
                  <InputLeftAddon>Rs</InputLeftAddon>
                </InputGroup>
              </Flex>
            </Box>

            {/* Buttons */}
            <Box p={2} border="none" borderTop="1px solid green">
              <Flex gap={6} justifyContent="flex-end">
                <Button p={4} colorScheme="blue" onClick={handleCalculate}>
                  Calculate
                </Button>
                <Button p={4} colorScheme="red" onClick={handleReset}>
                  Reset
                </Button>
              </Flex>
            </Box>
          </Box>
          {/* Calculation Cost Section */}
          <Box direction="row" bg="lightgray">
            <CalculationCost
              totalCost={totalCost}
              cementCost={cementCost}
              sandCost={sandCost}
              aggregateCost={aggregateCost}
              steelCost={steelCost}
              finishersCost={finishersCost}
              fittingsCost={fittingsCost}
            />
          </Box>
          <Box direction="row" mt={2} bg="lightgray">
            {/* Quality Cost Section */}
            <QualityCost
              cementQuantity={cementQuantity}
              sandQuantity={sandQuantity}
              aggregateQuantity={aggregateQuantity}
              steelQuantity={steelQuantity}
              paintQuantity={paintQuantity}
              brickQuantity={brickQuantity}
              flooringQuantity={flooringQuantity}
            />
          </Box>
          <Box>
            <Formulas />
          </Box>
        </Flex>

        {/* Right Section: Quality Estimate */}
        <Box
          width={["100%", "30%"]}
          bg="white"
          display="flex"
          direction="column"
          //p={4}
        >
          <QualityEstimate />
        </Box>
      </Flex>
    </Flex>
  );
};

export default ConstructionCost;
