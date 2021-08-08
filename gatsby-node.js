/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  console.log("starting")
  const { createPage } = actions
  console.log("starting create Page")
  const portfolioTemplate = path.resolve("./src/template/project-template.js")
  console.log("Portfolio created Page")
  const newsTemplate = path.resolve("./src/template/news-template.js")
  console.log("News created Page")
  const peopleTemplate = path.resolve("./src/template/people-template.js")
  console.log("People created Page")
  const peoplePartnerTemplate = path.resolve(
    "./src/template/peoplePartnerTemplate.js"
  )
  console.log("Partner created Page")
  console.log("Querying")
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
  console.log("building portfolio")
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
  console.log("building news")

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
  console.log("building people")

  res.data.people.edges.forEach(person => {
    createPage({
      component: peopleTemplate,
      path: `/people/${person.node.slug}`,
      context: {
        slug: person.node.slug,
      },
    })
  })
  console.log("building partner")

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
