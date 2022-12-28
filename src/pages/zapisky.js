import * as React from "react";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import BlogCard from "../components/BlogCard.tsx";
import {
  Wrap,
  WrapItem,
  Center,
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import { graphql, Link } from "gatsby";
import Seo from "../components/seo";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Template>
      <Wrap
        align="center"
        justify="center"
        spacing={4}
        h="full"
        overflow={"visible"}
        maxW={"100vw"}
        px={{ base: 0, md: 8, lg: 12 }}
      >
        {posts.map((post) => (
          <WrapItem>
            <BlogCard
              key={post.frontmatter.title}
              title={post.frontmatter.title}
              imgSrc={post.fields.image}
              slug={post.fields.slug}
              category={post.frontmatter.category}
            />
          </WrapItem>
        ))}
        <WrapItem>
          <Center py={6}>
            <Link to={"/digitalnizahrada"}>
              <Box
                maxW={"445px"}
                w={{ md: "md", sm: "sm", lg: "lg" }}
                bg={useColorModeValue("white", "gray.900")}
                boxShadow={"xl"}
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
                  <StaticImage
                    alt="img"
                    objectFit="cover"
                    objectPosition={"center -40px"}
                    // style={{ objectFit: "cover" }}
                    src={"../images/garden.jpg"}
                  />
                </Box>
                <Stack>
                  <Text
                    color={"green.500"}
                    textTransform={"uppercase"}
                    fontWeight={800}
                    fontSize={"sm"}
                    letterSpacing={1.1}
                  >
                    Všechny zápisky
                  </Text>
                  <Heading
                    color={useColorModeValue("gray.700", "white")}
                    fontSize={"2xl"}
                    fontFamily={"body"}
                  >
                    Moje digitální zahrada 🌱
                  </Heading>
                </Stack>
              </Box>
            </Link>
          </Center>
        </WrapItem>
      </Wrap>
    </Template>
  );
};

export default BlogIndex;

export const Head = () => <Seo title="Zápisky | Marek Svitek - Svíťa" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fields: { public: { eq: true } } }
    ) {
      nodes {
        fields {
          slug
          image
        }

        frontmatter {
          category
          title
        }
      }
    }
  }
`;
