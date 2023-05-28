import * as React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  useColorModeValue,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { MdEmail, MdLocationOn } from "react-icons/md";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
//@ts-ignore
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Logo } from "../images/Logo";
import { StaticImage } from "gatsby-plugin-image";

export default function contact() {
  const LinkIcon = (href, aria, icon) => {
    return (
      <OutboundLink target="_blank" href={href}>
        <IconButton
          aria-label={aria}
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: "pink.400" }}
          icon={icon}
        />
      </OutboundLink>
    );
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Box
        // bg={useColorModeValue('#00569b', '#00569b')
        // }
        bg={useColorModeValue("blue.50", "gray.700")}
        boxShadow="xl"
        // color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
        py={{ base: 6, md: 5 }}
      >
        <Box p={4}>
          <Flex
            direction={{ base: "column", md: "row", lg: "row" }}
            gap={{ base: "10", md: "0" }}
          >
            <Box
              mr={{ sm: 0, md: 12, lg: 28 }}
              display="flex"
              justifyContent="space-around"
              flexDirection="column"
              alignItems="left"
              style={{ gap: "var(--chakra-space-6)" }}
            >
              <Heading textAlign={{ base: "center", md: "left" }}>
                Pojďme spolu něco tvořit!
              </Heading>
              <div>
                <Text fontWeight={"bold"} mb={2}>
                  Neváhej se mě kontaktovat třeba z těchto důvodů:
                </Text>
                <List ml={4}>
                  <ListItem>
                    <ListIcon
                      as={BsFillArrowRightCircleFill}
                      color="blue.500"
                    />
                    Jsi podnikavý a rád tvoříš 🏗️
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillArrowRightCircleFill}
                      color="blue.500"
                    />
                    Potřebuješ zbrusu nový <i>~blazing fast~</i> web 🚀
                  </ListItem>
                  <ListItem>
                    <ListIcon
                      as={BsFillArrowRightCircleFill}
                      color="blue.500"
                    />
                    ... a nebo jakýkoliv jiný důvod 😜
                  </ListItem>
                </List>
              </div>
              <Box ml={2}>
                <Text fontWeight={"bold"} mb={2}>
                  Kontakty:
                </Text>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <OutboundLink
                    target="_blank"
                    href={"mailto:jsem@mareksvitek.cz/"}
                  >
                    <Button
                      size="md"
                      variant="link"
                      colorScheme="white"
                      justifyContent={"start"}
                      leftIcon={<MdEmail size="20px" />}
                    >
                      jsem@mareksvitek.cz
                    </Button>
                  </OutboundLink>

                  <OutboundLink
                    target="_blank"
                    href={
                      "https://www.zbozi.cz/vyrobek/jizdenka-do-brnenskeho-metra/?utm_source=mapy&utm_medium=odkaz_crosspromo&utm_campaign=april&utm_content=april_jizdenka_brno_metro"
                    }
                  >
                    <Button
                      justifyContent={"start"}
                      size="md"
                      colorScheme="white"
                      variant="link"
                      leftIcon={<MdLocationOn />}
                    >
                      Brno&nbsp;<i>(psss...zkus, kam vede tento odkaz 😏)</i>
                    </Button>
                  </OutboundLink>
                </VStack>
              </Box>
              <HStack spacing={5} px={5} alignItems="flex-start">
                <OutboundLink
                  target="_blank"
                  href={"https://www.linkedin.com/in/mareksvitek/"}
                >
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    icon={<BsLinkedin size="md" />}
                  />
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  href={"https://www.instagram.com/svitek.marek/"}
                >
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    icon={<BsInstagram size="md" />}
                  />
                </OutboundLink>
                <OutboundLink
                  target="_blank"
                  href={"https://github.com/Marilok/"}
                >
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    size={"lg"}
                    isRound={true}
                    icon={<BsGithub size="md" />}
                  />
                </OutboundLink>
              </HStack>
            </Box>

            <Flex direction="column" ml={{ base: "4", md: "0" }}>
              <Box
                mt={{ sm: 10 }}
                position={"relative"}
                height={"auto"}
                rounded={"2xl"}
                width={"auto"}
                // overflow={'hidden'}
              >
                <HStack>
                  <StaticImage
                    src="../images/hero.png"
                    alt="Profile picture"
                    placeholder="blurred"
                    layout="constrained"
                    width={148}
                    aspectRatio={1 / 1}
                    transformOptions={{ fit: "cover", cropFocus: "center" }}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "var(--chakra-shadows-lg)",
                    }}
                  />

                  <Logo variant={"twoLines"} />
                </HStack>
              </Box>
              <Box
                position={"relative"}
                height={"auto"}
                rounded={"2xl"}
                width={"auto"}
                mt={8}
                // overflow={'hidden'}
              >
                <HStack>
                  <StaticImage
                    src="../images/dog.jpg"
                    alt="White dog"
                    placeholder="blurred"
                    layout="constrained"
                    width={148}
                    aspectRatio={1 / 1}
                    transformOptions={{ fit: "cover", cropFocus: "center" }}
                    style={{
                      borderRadius: "50%",
                      boxShadow: "var(--chakra-shadows-lg)",
                    }}
                  />
                  <VStack ml={20}>
                    <Text
                      as={"span"}
                      style={{ fontFamily: "Barlow", fontWeight: 900 }}
                    >
                      Happiness manager
                    </Text>
                    <Text
                      as={"span"}
                      color={"pink.400"}
                      style={{
                        fontFamily: "Caveat",
                        // position: "absolute",
                        fontSize: "1.8em",
                        fontWeight: 500,
                        transform:
                          "rotate(-10deg) translateX(-20px) translateY(-2px)",
                      }}
                    >
                      Annie
                    </Text>
                  </VStack>
                </HStack>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
