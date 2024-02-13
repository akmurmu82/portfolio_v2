import React, { useState } from "react";
import {
  Flex,
  Box,
  Spacer,
  useTheme,
  CloseButton,
  VStack,
} from "@chakra-ui/react";
import { HashLink as Link } from "react-router-hash-link";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

function Navbar() {
  const theme = useTheme();
  const [isBarVisible, setBarVisibility] = useState(false);
  const linkHoverStyles = {
    textDecoration: "underline",
    color: theme.color.secondary,
  };

  let links = [
    { text: "Home", id: "#home" },
    { text: "About", id: "#about" },
    { text: "Skill", id: "#skill" },
    { text: "Projects", id: "#projects" },
    { text: "Contact", id: "#contact" },
  ];
  function NavLink({ text, to }) {
    return (
      <Link
        _hover={linkHoverStyles}
        color="#fff"
        to={to}
        style={{ marginRight: "10px", fontSize: "20px" }}
        smooth
      >
        {text}
      </Link>
    );
  }
  return (
    <VStack
      bg={theme.color.primary}
      p="20px"
      position="sticky"
      top="0"
      zIndex={1}
    >
      <Flex w="100%" alignItems="center">
        <Box ml={4}>
          <Link
            to="#home"
            style={{
              color: theme.color.secondary,
              fontFamily: theme.fonts.primary,
              fontWeight: "bold",
              fontSize: "30px",
            }}
            smooth
          >
            AK
          </Link>
        </Box>
        <Spacer />
        <Flex display={["none", "flex"]}>
          {links.map((link) => (
            <NavLink text={link.text} to={link.id} />
          ))}
        </Flex>
        <IconButton
          aria-label="Search database"
          icon={<HamburgerIcon />}
          display={["block", "none"]}
          onClick={() => setBarVisibility(!isBarVisible)}
        />
        {/* <CloseButton  display={["block", "none"]} onClick={() => setBarVisibility(!isBarVisible)} /> */}
      </Flex>
    </VStack>
  );
}

export default Navbar;
