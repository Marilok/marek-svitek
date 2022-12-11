import * as React from "react";
import { Link, graphql } from "gatsby";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import Template from "../components/Template.tsx";
import { Heading, Container, useColorModeValue } from "@chakra-ui/react";

import Seo from "../components/seo";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <Template>
      <Prose py={4}>
        <Container
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"md"}
          maxW="5xl"
          p={8}
          as="article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <Heading textAlign={"center"} as="h1">
              {post.frontmatter.title}
            </Heading>
          </header>

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </Container>
      </Prose>
    </Template>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
