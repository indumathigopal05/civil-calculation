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
import BrickQuality from "./BrickQuality";
import QualityEstimate from "../QualityEstimate";
import Formula from "./Formula";
import claybricks from "../../assets/claybricks.png";
import { GoHome } from "react-icons/go";
import icongreater from "../../assets/icongreater.png";

const BrickCalculation = () => {
  const [unit, setUnit] = useState("meter");
  const [length, setLength] = useState({
    meters: "3",
    cm: "0",
    feet: "10",
    inches: "0",
  });
  const [depth, setDepth] = useState({
    meters: "3",
    cm: "0",
    feet: "10",
    inches: "0",
  });
  const [wallThickness, setWallThickness] = useState("10");
  const [ratio, setRatio] = useState("1:4");
  const [brickSize, setBrickSize] = useState({
    length: "19",
    width: "9",
    height: "9",
  });
  const [volume, setVolume] = useState(null);
  const [totalBricks, setTotalBricks] = useState(null);
  const [volumeFeet, setVolumeFeet] = useState(null);

  const handleCalculate = () => {
    let lengthInMeters =
      parseFloat(length.meters || 0) + parseFloat(length.cm || 0) / 100;
    let depthInMeters =
      parseFloat(depth.meters || 0) + parseFloat(depth.cm || 0) / 100;
    let thicknessInMeters = parseFloat(wallThickness) / 100;

    let lengthInFeet =
      parseFloat(length.feet || 0) + parseFloat(length.inches || 0) / 12;
    let depthInFeet =
      parseFloat(depth.feet || 0) + parseFloat(depth.inches || 0) / 12;
    let thicknessInFeet = parseFloat(wallThickness) / 30.48;

    if (
      isNaN(lengthInMeters) ||
      isNaN(depthInMeters) ||
      isNaN(thicknessInMeters)
    ) {
      alert("Please enter valid numbers");
      return;
    }

    const totalVolumeMeters = (
      lengthInMeters *
      depthInMeters *
      thicknessInMeters
    ).toFixed(2);
    setVolume(totalVolumeMeters);

    const totalVolumeFeet = (
      lengthInFeet *
      depthInFeet *
      thicknessInFeet
    ).toFixed(2);
    setVolumeFeet(totalVolumeFeet);

    let brickVolume = (
      (((((parseFloat(brickSize.length) + 1) / 100) *
        (parseFloat(brickSize.width) + 1)) /
        100) *
        (parseFloat(brickSize.height) + 1)) /
      100
    ).toFixed(4);
    setTotalBricks(Math.ceil(totalVolumeMeters / brickVolume));
  };

  const handleReset = () => {
    setLength({ meters: "", cm: "", feet: "", inches: "" });
    setDepth({ meters: "", cm: "", feet: "", inches: "" });
    setWallThickness("10");
    setRatio("1:4");
    setBrickSize({ length: "19", width: "9", height: "9" });
    setVolume(null);
    setVolumeFeet(null);
    setTotalBricks(null);
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
      >
        <Heading fontSize="2xl" color="#BCC2CB">
          Brick Masonry Calculation
        </Heading>
        <Flex alignItems="center" gap={2}>
          <IconButton bg="white" color="gray"  alt="Home"icon={<GoHome />} />
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Home
          </Text>
          <Image src={icongreater}  alt="greater_arrow"w="10px" h="10px" />
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Quality Estimator
          </Text>
          <Image src={icongreater} w="10px" h="10px" />
          <Text _hover={{ textDecoration: "underline", color: "blue.600" }}>
            Construction Cost Estimator
          </Text>
        </Flex>
      </Box>
      <Flex
        width="100%"
        p={2}
        gap={4}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex direction="column" width={{ base: "100%", md: "70%" }} gap={2}>
          <Box bg="white" p={4}>
            <Box display="flex" alignItems="center" gap={2}>
              <Image src={claybricks} boxSize="30px" />
              <Text fontSize="lg" fontWeight="bold">
                Cement Concrete Calculation
              </Text>
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
            >
              <Text>Wall Thickness</Text>
              <Select
                value={wallThickness}
                width={{ base: "100%", md: "50%" }}
                onChange={(e) => setWallThickness(e.target.value)}
              >
                <option value="10">10 CM Wall</option>
                <option value="20">20 CM Wall</option>
              </Select>
            </Flex>
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={4}
              p={2}
              justifyContent="flex-end"
            >
              <Text>Ratio</Text>
              <Select
                value={ratio}
                width={{ base: "100%", md: "50%" }}
                onChange={(e) => setRatio(e.target.value)}
              >
                <option value="1:4">1:4</option>
                <option value="1:6">1:6</option>
                <option value="1:5">1:5</option>
              </Select>
            </Flex>

            <Flex direction="column">
              <Flex
                direction={{ base: "column", md: "row" }}
                alignItems={{ base: "flex-start", md: "center" }}
                justifyContent={{ base: "flex-start", md: "flex-end" }}
              >
                <Text minWidth="120px">Size of Bricks</Text>

                <Flex direction="column">
                  {/* Desktop View: Labels in a row */}
                  <Flex
                    justifyContent="flex-end"
                    width="100%"
                    display={{ base: "none", md: "flex" }}
                  >
                    <Text width="100px" textAlign="center">
                      Length
                    </Text>
                    <Text width="250px" textAlign="center">
                      Width
                    </Text>
                    <Text width="70px" textAlign="center">
                      Height
                    </Text>
                  </Flex>

                  {/* Inputs: Responsive Layout */}
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    alignItems={{ base: "flex-start", md: "center" }}
                    justifyContent={{ base: "flex-start", md: "flex-end" }}
                    gap={{ base: 2, md: 1 }} // Reduced gap for desktop view
                  >
                    {["length", "width", "height"].map((key) => (
                      <Flex
                        key={key}
                        direction="column"
                        alignItems="flex-start"
                        p={2}
                      >
                        {/* Mobile View: Labels above input */}
                        <Text display={{ base: "block", md: "none" }} mb={1}>
                          {key.charAt(0).toUpperCase() + key.slice(1)}
                        </Text>
                        <InputGroup>
                          <Input
                            value={brickSize[key]}
                            width={{ base: "100%", md: "110px" }} // Adjusted width
                            onChange={(e) =>
                              setBrickSize({
                                ...brickSize,
                                [key]: e.target.value,
                              })
                            }
                          />
                          <InputRightAddon>CM</InputRightAddon>
                        </InputGroup>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              justifyContent="flex-end"
              gap={3}
              p={2}
              borderTop="1px solid lightgray"
            >
              <Button p={2}  colorScheme="blue" onClick={handleCalculate}>
                Calculate
              </Button>
              <Button colorScheme="red" onClick={handleReset}>
                Reset
              </Button>
            </Flex>
          </Box>

          <Box display="flex" flexDirection={{base:"column",md:"row"}} bg="white">
            <Box bg="white" p={5} >
              <Text fontWeight="bold" p={4}>
                Total Bricks Required:
              </Text>
              <Text fontWeight="bold" ml={10} color="red">
                {totalBricks || "0"}
              </Text>
              <Text fontWeight="bold" p={4}>
                Volume of Construction
              </Text>
              <Text fontWeight="bold" color="red">
                {volume || "0"} m³ OR  {volumeFeet || "0"} ft³
              </Text>
            </Box>
            <Box bg="white" width={{base:"100%",md:"100%"}} direction ={{base:"column",md:"column"}}>
              <BrickQuality
                totalVolume={parseFloat(volume) || 0}
                brickSize={brickSize}
                ratio={ratio}
              />
             </Box> 
          </Box>
          <Box>
            <Formula />
          </Box>
        </Flex>
        <Box
          bg="white"
          borderRadius="md"
          width={{ base: "100%", md: "30%" }}
        >
          <QualityEstimate />
        </Box>
      </Flex>
    </Flex>
  );
};

export default BrickCalculation;
