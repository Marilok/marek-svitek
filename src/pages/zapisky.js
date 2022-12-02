import * as React from "react";
import "../style.sass";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { Helmet } from "react-helmet";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { graphql } from "gatsby";

const Page = ({ data: { allMarkdownRemark } }) => {
  const postsTemp = allMarkdownRemark.edges;
  const posts = postsTemp.map((edge) => edge.node);
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#01579B" />
        <meta charSet="utf-8" />
        <html lang="cs" />
        <title>Zápisky | Marek Svitek - Svíťa</title>
        <meta name="description" content="Ahoj!  &#128075; &#128187;" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#01579B" />
      </Helmet>

      <Template>
        <Wrap
          align="center"
          justify="center"
          spacing={5}
          h="full"
          overflow={"visible"}
        >
          {posts.map((post) => (
            <WrapItem>
              <BlogCard
                key={post.frontmatter.title}
                title={post.frontmatter.title}
                imgSrc={post.image.childImageSharp.gatsbyImageData}
                slug={post.frontmatter.slug}
                category={post.frontmatter.category}
              />
            </WrapItem>
          ))}
        </Wrap>
      </Template>
    </>
  );
};
export default Page;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
            category
          }
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;
