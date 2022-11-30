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
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Image,
  useColorModeValue,
  List,
  ListIcon,
  ListItem,
  Spacer,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
//@ts-ignore
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { Logo } from "../images/Logo";

export default function contact() {
  const LinkIcon = (href, aria, icon) => {
    return (
      <OutboundLink target="_blank" href={href}>
        <IconButton
          aria-label={aria}
          variant="ghost"
          size="lg"
          isRound={true}
          _hover={{ bg: useColorModeValue("pink.400", "pink.400") }}
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
        bg={useColorModeValue("blue.50", "blue.400")}
        boxShadow="xl"
        // color="white"
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box p={4}>
          <Flex direction={{ sm: "column", md: "row", lg: "row" }}>
            <Box mr={{ sm: 0, md: 12, lg: 28 }}>
              <Heading>Pojďme spolu něco tvořit!</Heading>

              <Text mt={4}>
                <b>Neváhej se mě kontaktovat třeba z těchto důvodů:</b>
              </Text>
              <List ml={4}>
                <ListItem>
                  <ListIcon
                    as={BsFillArrowRightCircleFill}
                    color={useColorModeValue("blue.500", "pink.400")}
                  />
                  Jsi podnikavý a rád tvoříš 🏗️
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillArrowRightCircleFill}
                    color={useColorModeValue("blue.500", "pink.400")}
                  />
                  Potřebuješ zbrusu nový <i>~blazing fast~</i> web 🚀
                </ListItem>
                <ListItem>
                  <ListIcon
                    as={BsFillArrowRightCircleFill}
                    color={useColorModeValue("blue.500", "pink.400")}
                  />
                  ... a nebo jakýkoliv jiný důvod 😜
                </ListItem>
              </List>

              <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} ml={2}>
                <VStack pl={0} spacing={3} alignItems="flex-start">
                  <OutboundLink
                    target="_blank"
                    href={"mailto:kontakt@mareksvitek.cz/"}
                  >
                    <Button
                      size="md"
                      variant="link"
                      colorScheme="white"
                      justifyContent={"start"}
                      leftIcon={<MdEmail size="20px" />}
                    >
                      kontakt@mareksvitek.cz
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
              <HStack
                mt={{ lg: 10, md: 10 }}
                spacing={5}
                px={5}
                alignItems="flex-start"
              >
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

            <Flex direction="column">
              <Box
                mt={{ sm: 10 }}
                position={"relative"}
                height={"auto"}
                rounded={"2xl"}
                width={"auto"}
                // overflow={'hidden'}
              >
                <VStack>
                  <Image
                    boxShadow={"lg"}
                    alt={"Hero Image"}
                    align={"center"}
                    fit={"cover"}
                    // w={'auto'}
                    // h={'100%'}
                    boxSize="150px"
                    borderRadius="full"
                    src="../images/hero.png"
                  />
                  <Logo variant={"twoLines"} />
                </VStack>
              </Box>
              <Box
                position={"relative"}
                height={"auto"}
                rounded={"2xl"}
                width={"auto"}
                mt={8}
                // overflow={'hidden'}
              >
                <VStack>
                  <Image
                    boxShadow={"lg"}
                    alt={"Dog"}
                    align={"center"}
                    fit={"cover"}
                    // w={'auto'}
                    // h={'100%'}
                    boxSize="150px"
                    borderRadius="full"
                    src="../images/dog.jpg"
                  />
                  <VStack spacing={4}>
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
                        position: "absolute",
                        fontSize: "1.2em",
                        fontWeight: 500,
                        transform: "rotate(-10deg) translateY(-2px)",
                      }}
                    >
                      Annie
                    </Text>
                  </VStack>
                </VStack>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
}
