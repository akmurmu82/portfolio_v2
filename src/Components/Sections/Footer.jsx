import { Flex, Text } from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import React from "react";

function Footer() {
  const theme = useTheme();
  return (
    <>
      <Flex justifyContent="center" bg={theme.color.primary}>
        <Text>Mady with</Text>
        <Text ml="5px" color={theme.color.secondary}>
          ♥
        </Text>
      </Flex>
      <Flex justifyContent="center" bg={theme.color.primary}>
        <Text>By</Text>
        <Text
          ml="5px"
          color={theme.color.secondary}
          fontFamily={theme.fonts.primary}
        >
          Amit Kumar Murmu
        </Text>
      </Flex>
    </>
  );
}

export default Footer;
