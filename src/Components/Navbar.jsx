import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  VStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Collapse,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Logo1 from "../assets/Civil_Logo1.png";
import Logo from "../assets/Civil_Logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const menuData = [
  {
    title: "Quantity Estimator",
    items: [
      "Construction Cost Estimator Calculator",
      "Carpet Built Up Super Up Area Calculator",
      "Cement Concrete Calculator",
      "Plastering Calculator",
      "PCC Calculator",
      "RCC Calculator",
      "Brick Calculator",
      "Concrete Block Calculator",
      "Air Conditioner Size Calculator",
      "Stair Case Calculator",
      "Precast Compound Wall Calculator",
      "Flooring Calculator",
      "Tank Volume Calculator",
      "Paint Work Calculator",
      "Round Column Calculator",
      "Concrete Tube Calculator",
      "Solar Roof Top Calculator",
      "Solar Water Heater Calculator",
      "Wood Framing Calculator",
      "Plywood Sheets Calculator",
      "Steel Weight Calculator",
      "Anti Termite Calculator",
      "Top Soil Calculator",
      "Roof Pitch Calculator",
      "Asphalt Calculator",
    ],
  },
  {
    title: "Concrete Technology",
    items: [
      "Sieve Analysis of Aggregates",
      "Aggregate Impact Value",
      "Aggregate Abrasion Value",
      "Aggregate Water",
    ],
  },
  {
    title: "Geotechnical Engineering",
    items: [
      "Water Content Determination",
      "Specific Gravity of Soil",
      "Sieve Analysis of Soil",
      "Free Swell Index of Soil",
      "Liquid Limit of Soil",
      "Permeability by Falling Head",
      "Vane Shear Test Calculator",
      "Direct Shear Test Calculator",
      "Unconfined Compressive Strength Test",
      "IN-SITU Density By Core Cutter Method",
      "California Bearing Ratio Test",
    ],
  },
  {
    title: "Environmental Engineering",
    items: [
      "Chemical Oxygen Demand (COD) Test",
      "Bio-Chemical Oxygen Demand (BOD) Test",
      "Ammonial Nitrogen Test",
    ],
  },
  // Contact Us section without items
  {
    title: "Contact Us",
    items: [],
  },
];

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Box>
      <Box bg="white">
        {/* Desktop View: Display Logo1 and Logo */}
        <Box
          alignItems="center"
          display={{ base: "none", md: "flex" }}
          justifyContent="space-between"
          mb={4}
          gap={4}
          p={4}
          ml={5}
        >
          <Image src={Logo1} alt="Logo1" width="50" height="45" />
          <Image src={Logo} mr={5} alt="Logo" width="50" height="50" />
        </Box>

        {/* Mobile View: Display only one logo (Logo1) */}
        <Box display={{ base: "none", md: "none" }} textAlign="left" mb={4}>
          <Image src={Logo1} alt="Logo1" width={{ base: "40", md: "block" }}
              height={{ base: "30", md: "block" }} />
        </Box>
        <Box
          bg="#444D58"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
        >
          {/* Top Bar */}
          <Box display="flex" alignItems="center" ml={4}>
            <IconButton
              as={Link}
              to="/"
              aria-label="Home"
              icon={<GoHome />}
              bg="#444D58"
              size="lg"
              color="#BCC2CB"
              _hover={{ bg: "#55616f" }}
              display={{ base: "none", md: "flex" }}
            />

            {/* Desktop Menu */}
            <Box display={{ base: "none", md: "flex" }} gap={5} p={3}>
              {menuData.map((menu, index) => (
                <Menu key={index}>
                  <MenuButton
                    className="nav_bg"
                    as={Link}
                    to={menu.title}
                    rightIcon={menu.items.length > 0 ? <FaChevronDown /> : null} // Conditionally display arrow
                    //color="#CED5DE"
                    textAlign="center"
                  >
                    <div className="dropdown">
                      <span>{menu.title}</span>
                      {menu.items.length > 0 && (
                        <span>
                          <FaChevronDown />
                        </span>
                      )}
                    </div>
                  </MenuButton>

                  {/* Render MenuList only if the menu has items */}
                  {menu.items.length > 0 && (
                    <MenuList>
                      {menu.title === "Quantity Estimator" ? (
                        <Grid
                          templateColumns="repeat(3, 1fr)"
                          gap={4}
                          p={4}
                          bg="#444D58"
                          color="#CED5DE"
                          fontFamily="sans-serif"
                        >
                          {menu.items.map((item, idx) => (
                            <GridItem key={idx}>
                              <MenuItem
                                bg="#444D58"
                                fontFamily="sans-serif"
                                _hover={{ bg: "#55616f" }}
                                as={Link}
                                to={menu.items}
                              >
                                {item}
                              </MenuItem>
                            </GridItem>
                          ))}
                        </Grid>
                      ) : menu.title === "Geotechnical Engineering" ? (
                        <Grid
                          templateColumns="repeat(2, 1fr)"
                          gap={4}
                          p={4}
                          bg="#444D58"
                          color="#CED5DE"
                          fontFamily="sans-serif"
                        >
                          {menu.items.map((item, idx) => (
                            <GridItem key={idx}>
                              <MenuItem
                                bg="#444D58"
                                color="#CED5DE"
                                fontFamily="sans-serif"
                                _hover={{ bg: "#55616f" }}
                              >
                                {item}
                              </MenuItem>
                            </GridItem>
                          ))}
                        </Grid>
                      ) : (
                        menu.items.map((item, idx) => (
                          <MenuItem
                            key={idx}
                            bg="#444D58"
                            color="#CED5DE"
                            fontFamily="sans-serif"
                            _hover={{ bg: "#55616f" }}
                          >
                            {item}
                          </MenuItem>
                        ))
                      )}
                    </MenuList>
                  )}
                </Menu>
              ))}
            </Box>
          </Box>

          {/* Mobile Menu Toggle */}
          <Box
            display={{ base: "flex", md: "none" }}
            alignItems="center"
            justifyContent="space-between"
            p={3}
            bg="white"
          >
            {/* Logo1 with margin-left */}
            <Image
              src={Logo1}
              alt="Logo1"
              width={{ base: "40", md: "block" }}
              height={{ base: "30", md: "block" }}
              ml={2}
            />

            {/* IconButton with margin-right */}
            <IconButton
              aria-label="Toggle Menu"
              icon={isMenuOpen ? <FaTimes /> : <FaBars />}
              onClick={toggleMenu}
              bg="white"
              border="1px solid gray"
              _hover={{ bg: "gray.100" }}
              mr={2}
            />
          </Box>
        </Box>

        {/* Mobile Menu */}
        <Collapse in={isMenuOpen} animateOpacity>
          <Box
            bg="#444D58"
            p={4}
            mt={4}
            display={{ base: "block", md: "none" }}
          >
            <VStack align="start" spacing={4}>
              {menuData.map((menu, index) => (
                <Accordion allowToggle key={index} width="100%">
                  <AccordionItem border="none">
                    <AccordionButton _hover={{ bg: "transparent" }} p={2}>
                      <Box
                        flex="1"
                        textAlign="left"
                        color="white"
                        fontFamily="sans-serif"
                      >
                        {menu.title}
                      </Box>
                      <AccordionIcon color="white" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <VStack align="start" spacing={3}>
                        {/* No items under "Contact Us" */}
                        {menu.title !== "Contact Us" &&
                          menu.items.map((item, idx) => (
                            <Button
                              key={idx}
                              variant="link"
                              display="block"
                              textAlign="left"
                              color="white"
                              w="100%"
                              bg="#444D58"
                              _hover={{ bg: "#55616f" }}
                              fontFamily="sans-serif"
                              fontWeight="light"
                            >
                              {item}
                            </Button>
                          ))}
                        {/* Contact Us button */}
                        {menu.title === "Contact Us" && (
                          <Button
                            variant="link"
                            color="white"
                            fontFamily="sans-serif"
                          >
                            Contact Us
                          </Button>
                        )}
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;
