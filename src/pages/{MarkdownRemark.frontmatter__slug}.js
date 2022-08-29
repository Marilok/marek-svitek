import { graphql } from "gatsby";
import * as React from "react";
import Template from "../components/Template.tsx";
import { Helmet } from "react-helmet";
import { Prose } from "@nikolovlazar/chakra-ui-prose";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#01579B" />
        <meta charSet="utf-8" />
        <html lang="cs" />
        <title>{frontmatter.title}</title>
        <meta name="description" content="Ahoj!  &#128075; &#128187;" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta name="theme-color" content="#01579B" />
      </Helmet>
      <Template>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: html }} />
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
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
