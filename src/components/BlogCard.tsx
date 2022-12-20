import * as React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
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
          w={{ md: "md", sm: "sm", lg: "lg" }}
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
            <Image
              alt="img"
              objectFit="cover"
              objectPosition={"center -40px"}
              // style={{ objectFit: "cover" }}
              src={imgSrc}
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
