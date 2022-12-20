import * as React from "react";
import "@fontsource/open-sans";
import Template from "../components/Template.tsx";
import BlogCard from "../components/BlogCard.tsx";
import { Wrap, WrapItem } from "@chakra-ui/react";

import { graphql } from "gatsby";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  return (
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
              imgSrc={post.fields.image}
              slug={post.fields.slug}
              category={post.frontmatter.category}
            />
          </WrapItem>
        ))}
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
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
