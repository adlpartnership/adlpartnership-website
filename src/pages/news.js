import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const temporaryNewsData = [
  "Face Time: Lukito",
  "ADL Presents Architect 2019",
  "Hangga Wins at international Architect Design Award 2019",
]

const NewsPage = () => {
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
      <SEO title="News" />
      <Layout>
        <div className="container my-5">
          <Link to="/news-template" className="text-dark text-decoration-none">
            <div className="row mx-auto">
              <div className="col-12 col-md-8">
                <p className="text-muted">★ Featured News</p>
                <h1 className="display-3">{temporaryNewsData[0]}</h1>
                <p className="m-0">Author Name</p>
                <p className="text-muted small">{new Date().toDateString()}</p>
              </div>
              <div className="col-12 col-md-4">
                <div
                  className="position-relative w-100"
                  style={{ paddingTop: "100%" }}
                >
                  <Img
                    className="position-absolute w-100"
                    style={{ top: "0", left: "0", height: "100%" }}
                    fluid={temporaryFeaturedImage.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>
          </Link>
          <div className="my-5 py-3" />
          <h2 className="text-center">Happening in ADL Partnership</h2>
          <div className="my-5" />
          <div className="row">
            {temporaryNewsData.map(article => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <Link
                    to="/news-template"
                    className="text-dark text-decoration-none"
                  >
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <Img
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        fluid={temporaryFeaturedImage.childImageSharp.fluid}
                      />
                    </div>
                    <div className="my-3" />
                    <h4>{article}</h4>
                    <p className="m-0">Author Name</p>
                    <p className="text-muted small">
                      {new Date().toDateString()}
                    </p>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default NewsPage
