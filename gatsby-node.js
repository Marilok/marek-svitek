/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`);

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage, createRedirect } = actions;

  createRedirect({
    fromPath: "/digitalnizahrada/*",
    toPath:
      "https://publish.obsidian.md/serve?url=www.mareksvitek.cz/digitalnizahrada/*",
    isPermanent: true,
    force: true,
    statusCode: 200,
  });
  
  createRedirect({
    fromPath: "/je-bitcoin-lepsi-nez-fiat/*",
    toPath:
      "https://mareksvitek.cz/Je%20Bitcoin%20lep%C5%A1%C3%AD%20ne%C5%BE%20FIAT.docx",
    isPermanent: true,
    force: true,
    statusCode: 200,
  });

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { title: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
            public
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].id;

      if (post.fields.public) {
        createPage({
          path: post.fields.slug,
          component: blogPost,
          context: {
            id: post.id,
            previousPostId,
            nextPostId,
          },
        });
      }
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug,
    });

    createNodeField({
      name: `image`,
      node,
      value: node.frontmatter.image,
    });

    createNodeField({
      name: `public`,
      node,
      value: node.frontmatter.public ? node.frontmatter.public : false,
    });
  }
};

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      public: Boolean
    }
  `);
};

// const { createRemoteFileNode } = require("gatsby-source-filesystem");

// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;

//   createTypes(`
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       image: File @link(from: "fields.localFile")
//     }

//     type Frontmatter {
//       title: String!
//       image: String
//     }
//   `);
// };

// exports.onCreateNode = async ({
//   node,
//   actions: { createNode, createNodeField },
//   createNodeId,
//   getCache,
// }) => {
//   // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
//   if (
//     node.internal.type === "MarkdownRemark" &&
//     node.frontmatter.image !== null
//   ) {
//     const fileNode = await createRemoteFileNode({
//       url: node.frontmatter.image, // string that points to the URL of the image
//       parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
//       createNode, // helper function in gatsby-node to generate the node
//       createNodeId, // helper function in gatsby-node to generate the node id
//       getCache,
//     });

//     // if the file was created, extend the node with "localFile"
//     if (fileNode) {
//       createNodeField({ node, name: "localFile", value: fileNode.id });
//     }
//   }
// };
