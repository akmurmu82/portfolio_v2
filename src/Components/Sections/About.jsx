import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function About() {
  const theme = useTheme();
  return (
    <>
      <Box h="50px" id="about"></Box>
      <Box bg="" h="auto" mt="30px">
        <Text fontSize="30px" fontFamily={theme.fonts.primary} as="u" mb="30px">
          About
        </Text>
        <Flex
          border="1px solid white"
          w="80%"
          p="20px"
          m="auto"
          mt={[10, 20, 30, 40]} // Responsive top margin
          alignItems="center"
          justifyContent="space-around"
          direction={["column", , "row"]}
        >
          <Image
            borderRadius="50%"
            w={["200px", "300px", "350px", "400px"]} // Responsive image width
            p="10px"
            border="5px solid #fff"
            src="https://avatars.githubusercontent.com/u/66897228?v=4"
            alt="Profile picture of [Your Name]" // Provide a descriptive alt text
          />
          <Flex
            textAlign="left"
            direction="column"
            ml={[0, 0, 50]} // Responsive left margin
          >
            <Flex m="10px" justifyContent="center">
              <Text
                as="b"
                fontSize={["22px", "32px", "36px", "40px"]} // Responsive font size
                mr="10px"
                fontFamily="'Montserrat', sans-serif"
              >
                I'm
              </Text>
              <Text
                as="b"
                fontSize={["22px", "32px", "36px", "40px"]} // Responsive font size
                color={theme.color.primary}
                fontFamily={theme.fonts.primary}
              >
                Front-End Developer
              </Text>
            </Flex>
            <Text
              fontSize={["14px", "16px", "18px", "20px"]} // Responsive font size
              fontFamily={theme.fonts.primary}
              textAlign="center"
            >
              Highly skilled Frontend Developer(React) with expertise in
              React.js and related technologies. Solid understanding of frontend
              development principles, design patterns, and best practices.
              Strong proficiency in JavaScript, HTML, CSS, and Git.
              Collaborative team player with excellent problem-solving skills
              and attention to detail. Effective communicator and proactive
              self-starter, dedicated to delivering visually appealing and
              scalable user interfaces.
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default About;
