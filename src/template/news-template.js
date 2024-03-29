import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

const NewsTemplatePage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title={`${data.news.title}`} />
      <Layout>
        <div className="container my-5 mx-auto" style={{ maxWidth: "700px" }}>
          <p className="text-muted text-center">{data.news.date}</p>
          <h1
            dangerouslySetInnerHTML={{ __html: data.news.title }}
            className="text-center h3"
          ></h1>
          <div
            className="position-relative w-100 "
            style={{ paddingTop: "56.25%" }}
          >
            <GatsbyImage
              image={
                data.news.featuredImage.node.localFile.childImageSharp
                  .gatsbyImageData
              }
              className="position-absolute w-100"
              style={{ top: "0", left: "0", height: "100%" }}
            />
          </div>
          <div
            className="mx-auto my-5"
            style={{ maxWidth: "700px", lineHeight: "25.6px" }}
            dangerouslySetInnerHTML={{ __html: data.news.content }}
          ></div>
          {/*
          <div className="row">
            <div className="col-12 col-md-4 mt-4 mt-md-0">
              <div
                className="position-relative w-100 "
                style={{ paddingTop: "56.25%" }}
              >
                <Img
                  className="position-absolute w-100"
                  style={{ top: "0", left: "0", height: "100%" }}
                  fluid={
                    data.news.featured_media.localFile.childImageSharp.fluid
                  }
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
                  fluid={
                    data.news.featured_media.localFile.childImageSharp.fluid
                  }
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
                  fluid={
                    data.news.featured_media.localFile.childImageSharp.fluid
                  }
                />
              </div>
              <div className="my-3" />
              <h5>Other Article Title</h5>
              <p className="text-muted">{new Date().toDateString()}</p>
            </div>
          </div> */}
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default NewsTemplatePage

export const query = graphql`
  query($slug: String) {
    news: wpPost(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM YYYY")
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
