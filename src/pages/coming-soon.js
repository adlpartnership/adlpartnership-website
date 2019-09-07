import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const ComingSoonPage = () => {
  const { backgroundImage, logo } = useStaticQuery(graphql`
    {
      backgroundImage: file(
        relativePath: { eq: "carousel-hero/citraland-1.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "ADL-icon.png" }) {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <SEO title="Coming Soon!" />
      <div className="position-relative w-100" style={{ height: "100vh" }}>
        <Img
          className="position-absolute w-100"
          style={{ top: "0", left: "0", height: "100%" }}
          fluid={backgroundImage.childImageSharp.fluid}
        />
        <div
          className="position-absolute w-100"
          style={{
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
            background: "rgba(0,0,0,0.35)",
          }}
        />
        <div
          className="position-absolute d-flex flex-column justify-content-center text-light"
          style={{
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            height: "100%",
          }}
        >
          <Img className="mx-auto" fixed={logo.childImageSharp.fixed} />
          <h1 className="display-4 text-center">
            We're rebuilding our website
          </h1>
          <p className="lead text-center">
            For inquiries or questions,{" "}
            <a
              href="mailto:lukito@adlpartnership.com"
              className="text-light text-decoration-none"
            >
              click here or email lukito@adlpartnership.com
            </a>
          </p>
          <p className="text-center small">
            Built with{" "}
            <a
              href="https://sawirstudio.com"
              className="text-light text-decoration-none"
            >
              Sawir Studio
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ComingSoonPage
