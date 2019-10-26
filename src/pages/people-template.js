import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const PeopleTemplatePage = () => {
  const { temporaryFeaturedImage } = useStaticQuery(graphql`
    {
      temporaryFeaturedImage: file(
        relativePath: { eq: "people/architect.jpeg" }
      ) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <SEO title="News Details Page" />
      <Layout>
        <div className="container my-5">
          <div className="mb-5 w-50 mx-auto">
            <div
              className="position-relative w-100 "
              style={{ paddingTop: "56.25%" }}
            >
              <Img
                className="position-absolute w-100"
                style={{ top: "0", left: "0", height: "100%" }}
                fluid={temporaryFeaturedImage.childImageSharp.fluid}
              />
            </div>
          </div>
          <h1 className="text-center">Lukito Nugroho</h1>
          <p className="text-center text-muted">Partner</p>

          <div
            className="mx-auto my-5"
            style={{ maxWidth: "700px", lineHeight: "25.6px" }}
          >
            <p>
              Lukito has more than 18 years of experience in architectural and
              urban planning projects throughout Southeast Asia and the Middle
              East, covering mixed-use, commercial, hospitality, residential and
              master planning projects. Prior to joining ADL in 2017, he was
              based in Singapore since 2000 and worked for renowned
              international consultancy firms, involved in managing both private
              and public sector projects as well as spearheaded the business
              development in the region.
            </p>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default PeopleTemplatePage
