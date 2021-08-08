import React, { useEffect } from "react"
import Layout from "../components/layout"
import CarouselHero from "../components/carouselHero"
import { graphql, navigate } from "gatsby"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Welcome" />
      <Layout>
        <CarouselHero data={data.featured.edges} />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage

export const query = graphql`
  {
    featured: allWpPortfolio(
      filter: { includeInFeaturedHomePage: { includeInHomePage: { eq: true } } }
    ) {
      edges {
        node {
          id
          title
          slug
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
  }
`
