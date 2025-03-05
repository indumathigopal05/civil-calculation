import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Select,
  InputGroup,
  Input,
  InputRightAddon,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import icongreater from "../../assets/icongreater.png";
import plastring1 from "../../assets/plastring1.png";
import PlasteringQuality from "./PlasteringQuality";
import PlasteringFormula from "./PlasteringFormula";
import QualityEstimate from "../../Components/QualityEstimate";
import PlasterImportant from "./PlasterImportant";

const Plastering = () => {
  const [unit, setUnit] = useState("meter");
  const [length, setLength] = useState({ meters: "70", cm: "" });
  const [depth, setDepth] = useState({ meters: "50", cm: "" });
  const [totalArea, setTotalArea] = useState(10); // Default Total Area
  const [totalFeet, setTotalFeet] = useState(1076.23); // Default in feet

  const handleCalculate = () => {
    let lengthInMeters =
      parseFloat(length.meters || 0) + parseFloat(length.cm || 0) / 100;
    let depthInMeters =
      parseFloat(depth.meters || 0) + parseFloat(depth.cm || 0) / 100;
    let area = lengthInMeters * depthInMeters;
    let areaFeet = area * 10.7639;
    setTotalArea(area.toFixed(2));
    setTotalFeet(areaFeet.toFixed(2));
  };

  const handleReset = () => {
    setLength({ meters: "", cm: "" });
    setDepth({ meters: "", cm: "" });
    setTotalArea(10);
    setTotalFeet(1076.23);
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      bg="lightgray"
      fontFamily="sans-serif"
    >
      <Box
        bg="white"
        width="100%"
        p={2}
        display="flex"
        justifyContent="space-between"
        flexWrap={{ base: "wrap", md: "nowrap" }}
        fontFamily="sans-serif"
      >
        <Heading fontSize="3xl" fontWeight="bold" color="#BCC2CB">
          Plaster Calculator
        </Heading>
        <Flex alignItems="center" gap={2}>
          <IconButton bg="white" color="gray" icon={<GoHome />} />
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Home
          </Text>
          <Image src={icongreater} w="10px" h="10px" alt="icongreater"/>
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Quality Estimator
          </Text>
          <Image src={icongreater} w="10px" h="10px" alt="icongreater" />
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Plastering Calculation
          </Text>
        </Flex>
      </Box>

      <Flex
        width="100%"
        p={2}
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex direction="column" width={{ base: "100%", md: "70%"}} gap={2}>
          <Box bg="white" p={4}>
            <Box display="flex" alignItems="center" gap={2}>
          <Image src={plastring1} boxSize={{ base: "30px", md: "30px"}} alt="plasteringimage" />
            <Heading fontSize="xl">Plaster Calculating</Heading>
            </Box>

            <Flex
              direction={{ base: "column", md: "row" }}
              borderTop="1px solid lightgray"
              gap={4}
              p={2}
              justifyContent="flex-end"
              alignItems={{ base: "flex-start", md: "flex-end" }}
            >
              <Text>Unit</Text>
              <Select
                value={unit}
                width={{ base: "100%", md: "50%" }}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="meter">Meter/CM</option>
                <option value="feet">Feet/Inches</option>
              </Select>
            </Flex>

            {[
              { label: "Length", state: length, setState: setLength },
              { label: "Depth", state: depth, setState: setDepth },
            ].map(({ label, state, setState }, index) => (
              <Flex
                key={index}
                direction={{ base: "column", md: "row" }}
                p={1}
                alignItems={{ base: "flex-start", md: "center" }} // Aligns properly
                justifyContent="flex-end"
              >
                {/* Label Section */}
                <Box
                  minWidth="80px"
                  textAlign={{ base: "flex-start", md: "right" }}
                  mr={{ base: 0, md: 6 }}
                >
                  <Text>{label}</Text>
                </Box>

                {/* Inputs Section */}
                <Flex
                  direction={{ base: "column", md: "row" }}
                  gap={{ base: 2, md: 6 }} // Reduced gap in desktop view
                  alignItems={{ base: "flex-start", md: "center" }}
                >
                  {/* Meters/Feet Input */}
                  <InputGroup>
                    <Input
                      value={unit === "meter" ? state.meters : state.feet}
                      width={{ base: "100%", md: "170px" }} // Reduced width in desktop
                      onChange={(e) =>
                        setState({
                          ...state,
                          [unit === "meter" ? "meters" : "feet"]:
                            e.target.value,
                        })
                      }
                    />
                    <InputRightAddon>
                      {unit === "meter" ? "Meter" : "Feet"}
                    </InputRightAddon>
                  </InputGroup>

                  {/* CM/Inches Input */}
                  <InputGroup>
                    <Input
                      value={unit === "meter" ? state.cm : state.inches}
                      width={{ base: "100%", md: "170px" }} // Reduced width
                      onChange={(e) =>
                        setState({
                          ...state,
                          [unit === "meter" ? "cm" : "inches"]: e.target.value,
                        })
                      }
                    />
                    <InputRightAddon>
                      {unit === "meter" ? "CM" : "Inches"}
                    </InputRightAddon>
                  </InputGroup>
                </Flex>
              </Flex>
            ))}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              p={2}
              justifyContent="flex-end"
              alignItems={{ base: "flex-start", md: "flex-end" }}
            >
              <Text>Plaster Type</Text>
              <Select
                width={{ base: "100%", md: "50%" }}
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="1:4">1:4</option>
                <option value="1:5">1:5</option>
                <option value="1:6">1:6</option>
              </Select>
            </Flex>

            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              p={2}
              justifyContent="flex-end"
              alignItems={{ base: "flex-start", md: "flex-end" }}
            >
              <Text>Grade of Footing</Text>
              <Select
                width={{ base: "100%", md: "50%" }}
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              >
                <option value="10">CM(1:3)</option>
                <option value="20">CM(1:4)</option>
                <option value="10">CM(1:5)</option>
                <option value="20">CM(1:6)</option>
              </Select>
            </Flex>

            <Flex justifyContent="flex-end" gap={3} p={2}  borderTop="1px solid lightgray">
              <Button p={2} colorScheme="blue" onClick={handleCalculate}>
                Calculate
              </Button>
              <Button colorScheme="red" onClick={handleReset}>
                Reset
              </Button>
            </Flex>
          </Box>
          <Box bg="white" display="flex" flexDirection={{ base:"column", md: "row" }} textAlign="center" alignItems="center" >
          <Box bg="white" >
            <Text fontWeight="bold" textAlign="center">Total Area of Plaster Required:</Text>
            <Text fontWeight="bold" color="red">
              {totalArea} m² ({totalFeet} ft²)
            </Text>
            </Box>
            <Box
              bg="white"
              width={{ base: "100%", md: "100%" }}
              direction={{ base: "column", md: "column" }}
            >

              <PlasteringQuality totalVolume={parseFloat(totalArea )|| 0} />
            
            </Box>
            </Box>
          
          <Box>
            <PlasteringFormula />
          </Box>
          <PlasterImportant />
        </Flex>

        <Box bg="white" borderRadius="md" width={{ base: "100%", md: "30%" }}>
          <QualityEstimate />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Plastering;
