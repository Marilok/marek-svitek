const { createRemoteFileNode } = require("gatsby-source-filesystem");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      image: File @link(from: "fields.localFile")
    }

    type Frontmatter {
      title: String!
      image: String
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "MarkdownRemark" &&
    node.frontmatter.image !== null
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.image, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    });

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }
};

// const path = require("path");

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions, reporter }) => {
//   const { createPage } = actions;

//   // Query for markdown nodes to use in creating pages.
//   const result = await graphql(
//     `
//       {
//         allMarkdownRemark(limit: 1000) {
//           edges {
//             node {
//               id
//               frontmatter {
//                 path
//               }
//             }
//           }
//         }
//       }
//     `
//   );

//   // Handle errors
//   if (result.errors) {
//     reporter.panicOnBuild(`Error while running GraphQL query.`);
//     return;
//   }

//   // Create pages for each markdown file.
//   const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);
//   result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//     const path = node.frontmatter.path;
//     const id = node.id;
//     createPage({
//       path,
//       component: blogPostTemplate,
//       // In your blog post template's graphql query, you can use pagePath
//       // as a GraphQL variable to query for data from the markdown file.
//       context: {
//         pageId: id,
//         pagePath: path,
//       },
//     });
//   });
// };
