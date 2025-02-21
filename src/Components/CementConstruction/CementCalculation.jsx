import React, { useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Select,
  InputGroup,
  InputLeftAddon,
  Input,
  InputRightAddon,
  Image,
  IconButton,
} from "@chakra-ui/react";
import QualityCalculation from "./QualityCalculation";
import QualityEstimate from "../QualityEstimate";
import CCE from "../../assets/CCE.png";
import { GoHome } from "react-icons/go";
import icongreater from "../../assets/icongreater.png";
import Formula from "../Formulas"
import Rcc from "./Rcc"

const CementCalculation = () => {
  const [unit, setUnit] = useState("meter");
  const [grade, setGrade] = useState("");
  const [length, setLength] = useState({ meters: "10", cm: "" });
  const [width, setWidth] = useState({ meters: "7", cm: "" });
  const [depth, setDepth] = useState({ meters: "4", cm: "" });
  const [volume, setVolume] = useState(null);
  const [volumeFeet, setVolumeFeet] = useState(null);

  const handleCalculate = () => {
    let lengthInMeters = parseFloat(length.meters || 0) + parseFloat(length.cm || 0) / 100;
    let widthInMeters = parseFloat(width.meters || 0) + parseFloat(width.cm || 0) / 100;
    let depthInMeters = parseFloat(depth.meters || 0) + parseFloat(depth.cm || 0) / 100;

    if (isNaN(lengthInMeters) || isNaN(widthInMeters) || isNaN(depthInMeters)) {
      alert("Please enter valid numbers");
      return;
    }

    const totalVolumeMeters = (lengthInMeters * widthInMeters * depthInMeters).toFixed(2);
    const totalVolumeFeet = (totalVolumeMeters * 35.3147).toFixed(2);
    setVolume(totalVolumeMeters);
    setVolumeFeet(totalVolumeFeet);
  };

  const handleReset = () => {
    setLength({ meters: "10", cm: "" });
    setWidth({ meters: "7", cm: "" });
    setDepth({ meters: "4", cm: "" });
    setVolume(null);
    setVolumeFeet(null);
  };

  return (
    <Flex direction="column" alignItems="center" bg="lightgray" fontFamily="sans-serif">
      <Box bg="white" width="100%" p={4} display="flex" fontFamily="sans-serif"flexWrap={{ base: "wrap", md: "nowrap" }} justifyContent="space-between">
        <Heading fontSize="2xl" color="#BCC2CB" fontFamily="sans-serif">Construction Cost Calculator</Heading>
        <Flex alignItems="center" gap={2}>
          <IconButton bg="white" color="gray" icon={<GoHome />} />
          <Text>Home</Text>
          <Image src={icongreater} w="10px" h="10px" />
          <Text>Quality Estimator</Text>
          <Image src={icongreater} w="10px" h="10px" />
          <Text>Construction Cost Estimator</Text>
        </Flex>
      </Box>
      
      <Flex width="100%" p={4} gap={4} flexDirection={{ base: "column", md: "row" }}>
        <Flex direction="column" width={{ base: "100%", md: "70%" }} gap={2}>
          <Box bg="white" p={4}>
            <Box display="flex" gap={2}>
              <Image src={CCE} boxSize={{ base: "30px", md: "30px" }} />
              <Text fontSize="lg" fontWeight="bold">Cement Concrete Calculation</Text>
            </Box>
            <Flex direction={{ base: "column", md: "row" }} borderTop="1px solid lightgray" gap={4} p={2} justifyContent="flex-end">
              <Text>Unit</Text>
              <Select value={unit} width={{ base: "100%", md: "500px" }} onChange={(e) => setUnit(e.target.value)}>
                <option value="meter">Meter/CM</option>
                <option value="feet">Feet/Inches</option>
              </Select>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={4} p={1} justifyContent="flex-end">
              <Text>Grade of Concrete</Text>
              <Select value={grade} width={{ base: "100%", md: "500px" }} onChange={(e) => setGrade(e.target.value)}>
                <option value="M20">M20(1:1.5:3)</option>
                <option value="M15">M15(1:2:4)</option>
                <option value="M10">M10(1:3:6)</option>
                <option value="M7.5">M7.5(1:4:8)</option>
              </Select>
            </Flex>

            {[{ label: "Length", state: length, setState: setLength },
              { label: "Width", state: width, setState: setWidth },
              { label: "Depth", state: depth, setState: setDepth }].map(({ label, state, setState }, index) => (
              <Flex key={index} direction={{ base: "column", md: "row" }} gap={2} p={2} justifyContent="flex-end">
                <Flex direction={{ base: "column", md: "row" }}gap={3} >
                  <Text>{label}</Text>
                  <InputGroup>
                    <Input placeholder="" value={state.meters} width={{base:"100%",md:"175px"}} onChange={(e) => setState({ ...state, meters: e.target.value })} />
                    <InputRightAddon>Meter</InputRightAddon>
                  </InputGroup>
                  <InputGroup>
                    <Input placeholder="" value={state.cm} width={{base:"100%",md:"175px"}} onChange={(e) => setState({ ...state, cm: e.target.value })} />
                    <InputRightAddon>CM</InputRightAddon>
                  </InputGroup>
                </Flex>
              </Flex>
            ))}
            <Flex justifyContent="flex-end" gap={3} p={2} borderTop="1px solid lightgray">
              <Button colorScheme="blue" onClick={handleCalculate}>Calculate</Button>
              <Button colorScheme="red" onClick={handleReset}>Reset</Button>
            </Flex>
          </Box>

          <Flex gap={3}flexDirection={{ base: "column", md: "row" }} >
            <Box bg="white"p={10}  gap={4}  width={{ base: "100%", md: "30%" }} textAlign="center" alignItems="center" justifyContent="center">
              <Text fontWeight="bold" p={4}>Total Volume of Cement Concrete:</Text>
              <Text fontWeight="bold" color="red" p={2}>{volume || "0"} m³</Text>
              <Text fontWeight="bold"  borderTop="1px solid lightgray" p={5} color="red">{volumeFeet || "0"} ft³</Text>
            </Box>

            <Box bg="white"  width={{base:"100%",md:"100%"}}>
              <QualityCalculation totalVolume={parseFloat(volume) || 0} />
            </Box>
            
          </Flex>
          <Box>
              <Formula />
            </Box>
            <Box>
              <Rcc />
            </Box>
        </Flex>

        <Box bg="white" p={4} borderRadius="md" width={{ base: "100%", md: "30%" }}>
          <QualityEstimate />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CementCalculation;
