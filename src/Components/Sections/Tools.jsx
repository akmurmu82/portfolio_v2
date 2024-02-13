import { Box, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";

function Tools() {
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
        border="3px solid #fff"
        direction="column"
        w="auto"
        color="#fff"
        className="sticky-card"
        alignItems="center"
        bg={theme.color.primary}
        gap="20px"
        p="10px"
      >
        <Image w="60px" h="60px" src={image} alt={text} />
        <Text fontSize="20px">{text}</Text>
      </Flex>
    );
  }

  const tools = [
    {
      id: 1,
      text: "VS Code",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
    },
    {
      id: 2,
      text: "Git",
      image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
    },
    {
      id: 3,
      text: "JSON server",
      image:
        "https://www.liblogo.com/img-logo/js8750je7e-json-logo-json-logo-icon-in-vector-logo.png",
    },
    {
      id: 4,
      text: "Npm",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnB4DrvapgoAO8RuMfZgcih2qtjSv7xW2Q_8hasg-330obl0S_B0YCzSVa3_VPQPfTv-g&usqp=CAU",
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
      <Box h="50px"></Box>
      <Box w="80%" m="auto" mt="30px">
        <Text fontSize="30px" fontFamily={theme.fonts.primary} as="u">
          Tools
        </Text>
        <Flex
          mt="30px"
          display="grid"
          // border='1px solid #fff'
          gridTemplateColumns={[
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)"
          ]}
          gridGap="20px"
          p="20px"
        >
          {tools.map((tool) => (
            <Card key={tool.id} text={tool.text} image={tool.image} />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Tools;
