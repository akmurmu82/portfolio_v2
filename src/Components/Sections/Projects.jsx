import {
  Box,
  Text,
  Flex,
  Image,
  Stack,
  ButtonGroup,
  Button,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useTheme } from "@chakra-ui/react";
import TodoistCloneImage from "../../Resources/Todoist_clone.png";
import GroceryHubImage from "../../Resources/GroceryHub.png";

function Projects() {
  const theme = useTheme();
  const projects = [
    {
      id: 1,
      image: TodoistCloneImage,
      name: "Todoist clone",
      isIndividualProject: true,
      desc: "Discover my Todoist clone, a productivity app mirroring the renowned task management tool. This project underscores my front-end development expertise, featuring React, state management, and responsive design. Impressively, I crafted this application within a mere 7 days, exemplifying my commitment to efficient and top-notch solution delivery.",
      techStack: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
        "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      ],
      links: [
        {
          id: 1,
          platform:
            "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg",
          deployedLinks: "https://heartfelt-alfajores-94d7dc.netlify.app/",
        },
        {
          id: 2,
          platform: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          deployedLinks: "https://github.com/akmurmu83/todoist-clone2",
        },
      ],
    },
    {
      id: 2,
      image: GroceryHubImage,
      name: "GroceryHub clone",
      isIndividualProject: false,
      desc: "GroceryHub, India's premier online grocery store, within an impressive 7-day development period. This user-friendly platform boasts features like sorting and filtering, seamless cart functionality, and an intuitive admin panel for efficient management. Explore GroceryHub for a fast, convenient, and feature-rich online shopping experience.",
      techStack: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
        "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
        "https://e7.pngegg.com/pngimages/602/440/png-clipart-javascript-open-logo-number-js-angle-text-thumbnail.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
      ],
      links: [
        {
          id: 1,
          platform:
            "https://ayushmanbh.netlify.app/static/media/netlify.c779369f.svg",
          deployedLinks: "https://velvety-chebakia-b2faa1.netlify.app/",
        },
        {
          id: 2,
          platform: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          deployedLinks: "https://github.com/akmurmu82/Grocery_Hub",
        },
      ],
    },
  ];
  function ProjectCard({
    image,
    name,
    desc,
    techStack,
    links,
    isIndividualProject,
  }) {
    return (
      <Flex
        boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
        direction="column"
        gap={["5px", "10px"]}
        border="1px solid #fff"
        color="#fff"
        p="5px"
        bg={theme.color.primary}
      >
        <Image src={image} alt={name} />
        <Flex direction="column" gap={["5px", "10px"]}>
          <HStack alignItems="flex-end">
            <Text fontSize={["1.2em", "1.5em", "2em"]} lineHeight="1">
              {name}
            </Text>
            <Text>
              {isIndividualProject
                ? "( Individual Project )"
                : "( Group Project )"}
            </Text>
          </HStack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <ButtonGroup alignItems="center">
              {links.map((link) => (
                <>
                  <Text
                    color={theme.color.secondary}
                    fontFamily={theme.fonts.primary}
                  >
                    {link.id === 1 ? "Live link:" : "Code base:"}
                  </Text>
                  <Button as="a" href={link.deployedLinks} target="_blank">
                    <Image
                      border="1px solid #fff"
                      borderRadius="5px"
                      p={["2px", "3px"]}
                      w={["25px", "40px"]}
                      src={link.platform}
                    />
                  </Button>
                </>
              ))}
            </ButtonGroup>
          </Stack>
          <Text
            fontSize={["12px", "16px"]}
            lineHeight="1.2"
            fontFamily={theme.fonts.primary}
          >
            {desc}
          </Text>
          <Flex alignItems="center" color={theme.color.secondary} as="b">
            <Text fontSize={["12px", "16px"]} fontFamily={theme.fonts.primary}>
              Tech-Stack:
            </Text>
            <Stack direction="row" ml="5px">
              {techStack.map((item) => (
                <Image
                  border="1px solid #fff"
                  borderRadius="5px"
                  p={["2px", "3px"]}
                  w={["25px", "40px"]}
                  h={["25px", "40px"]}
                  src={item}
                />
              ))}
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return (
    <>
      <Box h="50px" id="projects"></Box>
      <Box h="auto" mt="30px">
        <Text
          fontSize="30px"
          mt="30px"
          as="u"
          fontFamily={theme.fonts.primary}
          mb="30px"
        >
          Projects
        </Text>
        <Flex
          p={["5px 10px", "10px", "20px"]}
          border="1px solid #fff"
          w={["90%", , "90%"]}
          m="auto"
          display="grid"
          justifyContent="space-around"
          gap={["20px", "20px"]}
          mt="30px"
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              name={project.name}
              desc={project.desc}
              techStack={project.techStack}
              links={project.links}
              isIndividualProject={project.isIndividualProject}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Projects;
