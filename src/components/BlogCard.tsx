import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "gatsby";

export default function BlogCard({
  imgSrc,
  title = "Title",
  category = "Category",
  slug,
}) {
  return (
    <Center py={6}>
      <Link to={slug}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          _hover={{
            transform: "scale(1.05)",
            boxShadow: "2xl",
          }}
          transition="0.2s ease-in-out"
        >
          <Box
            as="div"
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            overflow={"hidden"}
          >
            <GatsbyImage
              // src={
              //   imgSrc
              //     ? imgSrc
              //     : "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              // }
              alt="img"
              objectFit="cover"
              //   style={{ objectFit: "cover" }}
              image={imgSrc}
            />
          </Box>
          <Stack>
            <Text
              color={"blue.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              {category}
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
