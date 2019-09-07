import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ComingSoonPage = () => {
  const { backgroundImage } = useStaticQuery(graphql`
    {
      backgroundImage: file(
        relativePath: { eq: "carousel-hero/citraland-1.jpg" }
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
      <SEO title="Oops, Sorry!" />
      <Layout>
        <div className="container my-5 text-center">
          <div className="position-relative w-100">
            <Img
              className="position-absolute w-100"
              style={{ top: "0", left: "0", height: "100%" }}
              fluid={backgroundImage.childImageSharp.fluid}
            />
            <div className="position-absolute">
              <h1 className="text-center">We're rebuilding our website</h1>
              <p className="lead">
                For inquiries or question, email{" "}
                <a
                  href="mailto:lukito@adlpartnership.com"
                  className="text-dark text-decoration-none"
                >
                  Lukito@adlpartnership.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ComingSoonPage
