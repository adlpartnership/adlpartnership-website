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
  query MyQuery {
    featured: allWordpressWpPortfolio(
      filter: { acf: { include_in_home_page: { eq: true } } }
    ) {
      edges {
        node {
          id
          title
          slug
          featured_media {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
