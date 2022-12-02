import * as React from "react";
import "../style.sass";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { Helmet } from "react-helmet";
import { Text, Center, Wrap, WrapItem } from "@chakra-ui/react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";

// import "@fontsource/open-sans/600-normal.css"
// import "@fontsource/open-sans/700-normal.css"
// import "@fontsource/open-sans/800-normal.css"

const Page = () => {
  const data = useStaticQuery(graphql`
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
  `);
  const postsTemp = data.allMarkdownRemark.edges;
  const posts = postsTemp.map((edge) => edge.node);
  console.log(posts);
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
          {posts.map(
            (post) => (
              console.log(post),
              console.log("hi"),
              console.log(post.frontmatter.image),
              (
                <WrapItem>
                  <BlogCard
                    key={post.frontmatter.title}
                    title={post.frontmatter.title}
                    imgSrc={post.image.childImageSharp.gatsbyImageData}
                    slug={post.frontmatter.slug}
                    category={post.frontmatter.category}
                  />
                </WrapItem>
              )
            )
          )}
        </Wrap>
      </Template>
    </>
  );
};
export default Page;
