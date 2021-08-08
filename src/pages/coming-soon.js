import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

const ComingSoonPage = () => {
  const { backgroundImage, logo } = useStaticQuery(graphql`{
  backgroundImage: file(relativePath: {eq: "carousel-hero/citraland-1.jpg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
  logo: file(relativePath: {eq: "ADL-icon.png"}) {
    childImageSharp {
      gatsbyImageData(width: 250, layout: FIXED)
    }
  }
}
`)
  return (
    <React.Fragment>
      <SEO title="Coming Soon!" />
      <div className="position-relative w-100" style={{ height: "100vh" }}>
        <GatsbyImage
          image={backgroundImage.childImageSharp.gatsbyImageData}
          className="position-absolute w-100"
          style={{ top: "0", left: "0", height: "100%" }} />
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
          <GatsbyImage image={logo.childImageSharp.gatsbyImageData} className="mx-auto" />
          <h1 className="display-4 text-center">
            We're rebuilding our website
          </h1>
          <p className="lead text-center">
            For inquiries or questions,{" "}
            <a
              href="mailto:indonesia@adlpartnership.com"
              className="text-light text-decoration-none"
            >
              click here or email indonesia@adlpartnership.com
            </a>
          </p>
          <p className="text-center">
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
  );
}

export default ComingSoonPage
