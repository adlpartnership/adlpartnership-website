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

const NewsPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="News" />
      <Layout>
        <div className="container my-5">
          <Link
            to={`/${data.news.edges[0].node.slug}`}
            className="text-dark text-decoration-none"
          >
            <div className="row mx-auto">
              <div className="col-12 col-md-8">
                <p className="text-muted">★ Featured News</p>
                <h1
                  className="h1 font-weight-light"
                  dangerouslySetInnerHTML={{
                    __html: data.news.edges[0].node.title,
                  }}
                ></h1>

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
                    fluid={
                      data.news.edges[0].node.featured_media.localFile
                        .childImageSharp.fluid
                    }
                  />
                </div>
              </div>
            </div>
          </Link>
          <div className="my-5 py-3" />
          <h2 className="text-center">Happening in ADL Partnership</h2>
          <div className="my-5" />
          <div className="row">
            {data.news.edges.slice(1).map(article => {
              return (
                <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                  <Link
                    to={`/${article.node.slug}`}
                    className="text-dark text-decoration-none"
                  >
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <Img
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        fluid={
                          article.node.featured_media.localFile.childImageSharp
                            .fluid
                        }
                      />
                    </div>
                    <div className="my-3" />
                    <h4
                      dangerouslySetInnerHTML={{ __html: article.node.title }}
                    ></h4>
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

export const query = graphql`
  {
    news: allWordpressPost {
      edges {
        node {
          title
          slug
          date(formatString: "YYYY MM,DD")
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
    }
  }
`
