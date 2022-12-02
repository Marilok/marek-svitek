import { graphql } from "gatsby";
import * as React from "react";
import Template from "../components/Template.tsx";
import { Helmet } from "react-helmet";
import { Prose } from "@nikolovlazar/chakra-ui-prose";
import { Heading, Container, useColorModeValue } from "@chakra-ui/react";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  console.log(markdownRemark);
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
        <Prose py={4}>
          <Container
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"md"}
            maxW="5xl"
            p={8}
          >
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
  query Post($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
