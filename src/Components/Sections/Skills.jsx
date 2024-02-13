import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import Tools from "./Tools";

function Skill() {
  const theme = useTheme();
  const cardHoverStyles = {
    background: theme.color.secondary, // Change to the desired hover background color
    // color: theme.color.white, // Change to the desired hover text color
    scale: "1.2",
    transition: "all 0.3s",
  };
  function Card({ text, image }) {
    return (
      <Flex
        borderRadius="10px"
        _hover={cardHoverStyles}
        alignItems="center"
        bg={theme.color.primary}
        border="3px solid #fff"
        gap="20px"
        color="#fff"
        p="10px"
      >
        <Image w="50px" src={image} alt={text} />
        <Text fontSize="20px">{text}</Text>
      </Flex>
    );
  }
  const skills = [
    {
      id: 1,
      text: "HTML",
      image: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
    },
    {
      id: 2,
      text: "CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
    },
    {
      id: 3,
      text: "JavaScript",
      image:
        "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png",
    },
    {
      id: 4,
      text: "React",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
    },
    {
      id: 5,
      text: "GitHub",
      image: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      id: 6,
      text: "Node js",
      image:
        "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
    },
  ];
  return (
    <>
      <Box h="50px" id="skill"></Box>
      <Box w="80%" m="auto" mt="30px">
        <Text fontSize="30px" fontFamily={theme.fonts.primary} as="u">
          Skill
        </Text>
        <Box
          mt="30px"
          p="20px"
          gap="20px"
          display="grid"
          gridTemplateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
        >
          {skills.map((skill) => (
            <Card key={skill.id} text={skill.text} image={skill.image} />
          ))}
        </Box>
      </Box>
      <Tools />
    </>
  );
}

export default Skill;
