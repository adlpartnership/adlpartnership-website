/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const portfolioTemplate = path.resolve("./src/template/project-template.js")
  const res = await graphql(`
    query {
      portfolio: allWordpressWpPortfolio {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.portfolio.edges.forEach(portfolio => {
    createPage({
      component: portfolioTemplate,
      path: `/${portfolio.node.slug}`,
      context: {
        slug: portfolio.node.slug,
      },
    })
  })
}
