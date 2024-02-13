import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useTheme } from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Contact() {
  const theme = useTheme();
  const contactLinks = [
    {
      icon: <PhoneIcon fontSize="20px" mr="10px" />,
      title: "8207202380",
      link: "tel:8207202380",
    },
    {
      icon: <EmailIcon fontSize="20px" mr="10px" />,
      title: "amitkumar655921@gmail.com",
      link: "mailto:amitkumar655921@gmail.com",
    },
    {
      icon: <Icon fontSize="20px" mr="10px" as={FaGithub} />,
      title: "akmurmu82",
      link: "https://github.com/akmurmu82",
    },
    {
      icon: <Icon fontSize="20px" mr="10px" as={FaLinkedin} />,
      title: "amitkumarmurmu",
      link: "https://www.linkedin.com/in/amit-kumar-murmu82/",
    },
  ];

  const cardHoverStyles = {
    background: theme.color.secondary, // Change to the desired hover background color
    color: "#fff",
    scale: "1.2",
    transition: "all 0.3s",
  };

  function ContactCard({ icon, title, link }) {
    return (
      <Button
        as="a" // Render the button as an anchor tag
        href={link}
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Add security attributes
        display="flex"
        alignItems="center"
        border="2px solid"
        p="10px"
        _hover={cardHoverStyles}
        justifyContent="space-between"
        cursor="pointer"
        textDecoration="none" // Remove default anchor tag styling
      >
        {icon}
        <Text fontSize={["14px", "18px"]} ml={["5px", "10px"]}>
          {title}
        </Text>
      </Button>
    );
  }

  return (
    <>
      <Box h="50px" id="contact"></Box>
      <Box h="auto" mt="30px">
        <Text
          fontSize="30px"
          mt="30px"
          fontFamily={theme.fonts.primary}
          as="u"
          mb="30px"
        >
          Contact
        </Text>

        <Flex
          w={["90%", "80%"]}
          m="auto"
          justifyContent="center"
          display="grid"
          gap="20px"
          mt="30px"
          p={["20px", "50px"]}
          gridTemplateColumns={["repeat(2, 1fr)"]}
        >
          {contactLinks.map((link, index) => (
            <ContactCard
              key={index}
              icon={link.icon}
              title={link.title}
              link={link.link}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}

export default Contact;
