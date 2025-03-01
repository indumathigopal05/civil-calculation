import { Box, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CalculationList = () => {
  const calculators = [
    { name: "Construction Cost Calculator", path: "/constructioncost" },
    { name: "Cement Concrete Calculator", path: "/cement-concrete" },
    { name: "Brick Calculator", path: "/brickCalculation" },
    { name: "Plastering Calculator", path: "/plastering" },
    { name: "Tank Volume Calculator", path: "/tank-volume" },
    { name: "Carpet Area/Built Up Area/Super Built Up Area Calculator", path: "/area-calculator" },
    { name: "Steel Weight Calculator", path: "/steel-weight" },
    { name: "Flooring Calculator", path: "/flooring" },
    { name: "Excavation Calculator", path: "/excavation" },
  ];

  return (
    <Box width={{ base: "100%", md: "30%" }}>
      <Box border="1px solid #ccc" bg="#3598dc" p={4}>
        <Text fontSize="2xl" color="white" fontFamily="sans-serif" fontWeight="bold">
          Most Searched Components
        </Text>
      </Box>
      <List>
        {calculators.map((item, index) => (
          <ListItem key={index}>
            <Link to={item.path}>
              <Box
                border="1px solid #ccc"
                p={3}
                bg="white"
                fontFamily="sans-serif"
                _hover={{ color: "blue", cursor: "pointer",textDecoration:"underline" }}
              >
                <ListIcon color="teal.500" />
                {item.name}
              </Box>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CalculationList;
