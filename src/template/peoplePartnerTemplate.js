import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const PeoplePartnerTemplatePage = ({ data }) => {
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
          <div className="row d-flex justify-content-center align-items-end">
            <div className="col-12 col-md-6">
              <div className="w-100 w-md-50 mx-auto">
                <div
                  className="position-relative w-100 "
                  style={{ paddingTop: "56.25%" }}
                >
                  <GatsbyImage
                    image={
                      data.people.featuredImage.node.localFile.childImageSharp
                        .gatsbyImageData
                    }
                    className="position-absolute w-100"
                    style={{ top: "0", left: "0", height: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-3 mt-md-0 h-100">
              <h1
                className="text-left h5"
                dangerouslySetInnerHTML={{ __html: data.people.title }}
              ></h1>
              <p
                className="text-left text-muted m-0"
                style={{ lineHeight: "1.2rem" }}
              >
                {data.people.peopleData &&
                  data.people.peopleData.professionalTitle}
              </p>
            </div>
          </div>

          <div
            className="mx-auto my-3"
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

export default PeoplePartnerTemplatePage

export const query = graphql`
  query($slug: String) {
    people: wpPeoplePartner(slug: { eq: $slug }) {
      title
      peopleData {
        professionalTitle
      }
      content
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
`
