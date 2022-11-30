import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Link,
  Flex,
  Spacer,
  Tag,
  HStack,
  TagLeftIcon,
  TagLabel,
} from "@chakra-ui/react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

export default function blogPostWithImage(props) {
  const renderTags = (tags) => {
    return (
      <HStack spacing={4}>
        {tags.map((tag, index) => (
          <Tag colorScheme={tag.color}>
            <TagLabel key={index}>
              <span>#</span>
              {tag.name}
            </TagLabel>
          </Tag>
        ))}
      </HStack>
    );
  };
  return (
    <Box
      maxW={"445px"}
      w={"full"}
      minW={"350px"}
      h={"400px"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"lg"}
      rounded={"md"}
      p={6}
      transition="0.2s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "2xl",
      }}
      overflow={"hidden"}
    >
      <OutboundLink
        target={props.link ? "_blank" : ""}
        href={props.link ? props.link : "#"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image
            align={"center"}
            w={"100%"}
            h={"100%"}
            fit={"cover"}
            alt="Project Image"
            src={props.imgSrc}
          />
        </Box>
      </OutboundLink>
      <Stack>
        <Flex>
          <Box>{props.tags ? renderTags(props.tags) : null}</Box>
          <Spacer />
          <Box>
            <Text color={"gray.500"}>{props.date}</Text>
          </Box>
        </Flex>
        <OutboundLink
          href={props.link ? props.link : "#"}
          target={props.link ? "_blank" : ""}
        >
          <Link>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {props.title}
            </Heading>
          </Link>
        </OutboundLink>
        <Text color={"gray.500"}>{props.description}</Text>
      </Stack>
    </Box>
  );
}
