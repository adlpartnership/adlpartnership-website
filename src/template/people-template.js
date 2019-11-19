import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const PeopleTemplatePage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO
        title={data.people.title}
        description={data.people.content
          .replace(/<p>/g, "")
          .replace(/<\/p>/g, "")}
      />
      <Layout>
        <div className="container my-5 mx-auto" style={{ maxWidth: "700px" }}>
          <div className="mb-5 w-100 w-md-50 mx-auto">
            <div
              className="position-relative w-100 "
              style={{ paddingTop: "56.25%" }}
            >
              <Img
                className="position-absolute w-100"
                style={{ top: "0", left: "0", height: "100%" }}
                fluid={
                  data.people.featured_media.localFile.childImageSharp.fluid
                }
              />
            </div>
          </div>
          <h1
            className="text-center"
            dangerouslySetInnerHTML={{ __html: data.people.title }}
          ></h1>
          <p className="text-center text-muted">
            {data.people.professional_title}
          </p>

          <div
            className="mx-auto my-5"
            style={{ maxWidth: "700px", lineHeight: "25.6px" }}
            dangerouslySetInnerHTML={{ __html: data.people.content }}
          ></div>
          <Link
            to="/people"
            className="text-center mx-auto d-block text-dark text-decoration-none"
          >
            Back to people
          </Link>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default PeopleTemplatePage

export const query = graphql`
  query($slug: String) {
    people: wordpressWpPeople(slug: { eq: $slug }) {
      title
      professional_title
      content
      featured_media {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
