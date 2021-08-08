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
  const newsTemplate = path.resolve("./src/template/news-template.js")
  const peopleTemplate = path.resolve("./src/template/people-template.js")
  const peoplePartnerTemplate = path.resolve(
    "./src/template/peoplePartnerTemplate.js"
  )
  const res = await graphql(`
    query {
      portfolio: allWpPortfolio {
        edges {
          node {
            slug
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
      news: allWpPost {
        edges {
          node {
            slug
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
      people: allWpPeople {
        edges {
          node {
            slug
          }
        }
      }
      peoplePartner: allWpPeoplePartner {
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
      path: `/projects/${portfolio.node.slug}`,
      context: {
        slug: portfolio.node.slug,
        categories: portfolio.node.categories.nodes[0].slug,
      },
    })
  })
  res.data.news.edges.forEach(news => {
    createPage({
      component: newsTemplate,
      path: `/news/${news.node.slug}`,
      context: {
        slug: news.node.slug,
        categories: news.node.categories.nodes[0].slug,
      },
    })
  })
  res.data.people.edges.forEach(person => {
    createPage({
      component: peopleTemplate,
      path: `/people/${person.node.slug}`,
      context: {
        slug: person.node.slug,
      },
    })
  })
  res.data.peoplePartner.edges.forEach(person => {
    createPage({
      component: peoplePartnerTemplate,
      path: `/people/${person.node.slug}`,
      context: {
        slug: person.node.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        "global.GENTLY": false,
      }),
    ],
  })
}
