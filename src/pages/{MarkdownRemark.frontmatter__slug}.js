import { graphql } from "gatsby";
import * as React from "react";
import Template from "../components/Template.tsx";
import { Helmet } from "react-helmet";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { Heading, Container } from "@chakra-ui/react";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#01579B" />
        <meta charSet="utf-8" />
        <html lang="cs" />
        <title>{frontmatter.title} | Marek Svitek</title>
        {/* <meta name="description" content="Ahoj!  &#128075; &#128187;" /> */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#01579B" />
      </Helmet>
      <Template>
        <Prose>
          <Container maxW="5xl" bg={"gray.50"} my={10} p={8}>
            <Heading textAlign={"center"} as="h1">
              {frontmatter.title}
            </Heading>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </Container>
        </Prose>
      </Template>
    </>
  );
}
export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
