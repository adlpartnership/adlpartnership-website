import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const ServicesPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Services" />
      <Layout>
        <div className="position-relative">
          <Img
            fluid={data.featuredImage.childImageSharp.fluid}
            className="featured-image-people-page"
          />
          <div
            className="position-absolute d-flex flex-column justify-content-center text-light text-center container"
            style={{
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              maxWidth: "700px",
            }}
          >
            <h1 className="display-4">
              Comprehensive Architectural Design and Master Planning
            </h1>
          </div>
        </div>
        <div className="container my-5">
          <div className="mx-auto" style={{ maxWidth: "700px" }}>
            <p>
              ADL provides comprehensive architectural design and master
              planning, starting from the feasibility study / visioning stage,
              master planning / urban design, architectural design
              conceptualization to design development, construction
              documentation and supports during construction stages. The firm
              emphasizes both in the strong conceptualization and development of
              details to ensure that the design is buildable and the end product
              is of high-quality design.
            </p>
            <p>
              The firm’s key sectors expertise in urban developments,
              particularly in mixed-use, retail, residential, office,
              hospitality, healthcare, master planning and transit-oriented
              developments.
            </p>
            <p>
              ADL provides structure engineering and landscape design services
              through our alliances, providing broader and more comprehensive
              services to our Clients. ADL also collaborates with other renowned
              firms/institutions, both national and international, to provide
              multi-disciplinary services.{" "}
            </p>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}
export default ServicesPage

export const query = graphql`
  {
    featuredImage: file(relativePath: { eq: "people/architect.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
