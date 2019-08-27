import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const NewsTemplate = () => {
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
          <h1>Cita-Cita Masterplan untuk Palembang</h1>
          <p className="text-muted">{new Date().toDateString()}</p>
          <div
            className="position-relative w-100"
            style={{ paddingTop: "56.25%" }}
          >
            <Img
              className="position-absolute w-100"
              style={{ top: "0", left: "0", height: "100%" }}
              fluid={temporaryFeaturedImage.childImageSharp.fluid}
            />
          </div>
          <div
            className="mx-auto my-5"
            style={{ maxWidth: "700px", lineHeight: "25.6px" }}
          >
            <p>
              Director Lukito will serve as the keynote speaker at the Design
              Experience Series in New Zealand in August. In a presentation
              titled "Reimagining City Hubs and Connecting Communities,"
              McKenzie will discuss how a deeper understanding of urban health
              and civic cultures can help change the way we envision the future
              of transit hubs. He will also showcase two projects, one built and
              one imagined, as examples of how centers of urban life might break
              from known models. The Design Experience Series brings
              professionals from around the world together to explore trends
              that are changing the industry. The series will take place in
              three cities—Auckland, Tauranga, and Wellington—over three days in
              August.{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mt-4 mt-md-0">
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
              <div className="my-3" />
              <h5>Other Article Title</h5>
              <p className="text-muted">{new Date().toDateString()}</p>
            </div>
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <div
                className="position-relative w-100"
                style={{ paddingTop: "56.25%" }}
              >
                <Img
                  className="position-absolute w-100"
                  style={{ top: "0", left: "0", height: "100%" }}
                  fluid={temporaryFeaturedImage.childImageSharp.fluid}
                />
              </div>
              <div className="my-3" />
              <h5>Other Article Title</h5>
              <p className="text-muted">{new Date().toDateString()}</p>
            </div>
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <div
                className="position-relative w-100"
                style={{ paddingTop: "56.25%" }}
              >
                <Img
                  className="position-absolute w-100"
                  style={{ top: "0", left: "0", height: "100%" }}
                  fluid={temporaryFeaturedImage.childImageSharp.fluid}
                />
              </div>
              <div className="my-3" />
              <h5>Other Article Title</h5>
              <p className="text-muted">{new Date().toDateString()}</p>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default NewsTemplate
