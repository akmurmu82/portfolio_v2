import { Box, Button, Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import resumePath from "../../Resources/Amit-Kumar-Murmu-ResumeV3.pdf";
const resumeFileName = "Amit-Kumar-Murmu-ResumeV3.pdf";

function Home() {
  const theme = useTheme();
  return (
    <>
      <Box h="50px" id="home"></Box>
      <Box mt="auto" h="auto" p={["10px", "20px"]}>
        <Flex
          border="1px solid white"
          w={["100%", , , "80%"]}
          m="auto"
          p={["10px", "20px"]}
          alignItems={["center", "flex-start"]}
          justifyContent="space-around"
          flexDirection={["column", , "row"]}
        >
          <Flex
            direction="column"
            mb={["20px", , 0]}
            p="10px`"
            border="1px solid #fff"
            alignItems={["center", , , "left"]}
            mr={[0, , "50px"]}
          >
            <Text fontSize={["32px", , "40px"]}>Hi There,</Text>
            <Flex mb="10px">
              <Text
                as="b"
                fontSize={["22px", "32px", "36px", "40px"]}
                mr={["10px", "10px", "10px", "15px"]}
                fontFamily="'Montserrat', sans-serif"
              >
                I'm
              </Text>
              <Text
                as="b"
                fontSize={["22px", "32px", "36px", "40px"]}
                color={theme.color.primary}
                fontFamily={theme.fonts.primary}
              >
                Amit Kumar Murmu
              </Text>
            </Flex>
            <Text
              fontSize={["16px", , "18px"]}
              style={{ fontFamily: theme.fonts.primary }}
            >
              An enthusiastic Full Stack Web Developer with a strong set of
              technical as well as non-technical skills and a dedication towards
              creating useful and interactive web applications.
            </Text>
            <DownloadResumeBtn />
          </Flex>
          <Image
            w={["100%", , "400px"]}
            src="https://dresma.ai/wp-content/uploads/2022/01/mern-stack-developer.gif"
            alt="Profile pic"
          />
        </Flex>
      </Box>
    </>
  );
}

export default Home;

export function DownloadResumeBtn() {
  const theme = useTheme();
  const btnHoverStyles = {
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    fontWeight: "bold",
    transition: "all 0.5s",
  };

  const handleDownload = () => {
    // To download the resume
    const toDownload = document.createElement("a");
    toDownload.href = resumePath;
    toDownload.target = "_blank";
    toDownload.download = resumeFileName;
    toDownload.click();

    // To open the resume in new tab
    const toOpen = document.createElement("a");
    toOpen.target = "_blank";
    toOpen.href =
      "https://drive.google.com/file/d/1XxhL-VYKMVthNgEwVmMs5ZLa32aYAFUq/view?usp=sharing";
    toOpen.click();
  };
  return (
    <Button
      mt={["10px", , 0]}
      _hover={btnHoverStyles}
      bg={theme.color.buttons}
      onClick={handleDownload}
      w={["100%", "150px"]}
      p={["15px", "10px"]}
      variant="solid"
    >
      RESUME
    </Button>
  );
}
