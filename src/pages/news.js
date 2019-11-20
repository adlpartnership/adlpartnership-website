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
        <div className="container my-5 mx-auto" style={{ maxWidth: "700px" }}>
          <h1 className="h3 font-weight-light text-center mb-5">
            News + Event
          </h1>
          {data.news.edges.map((post, index) => {
            return (
              <React.Fragment key={`${index}`}>
                <div className="row my-3">
                  <div className="col-12 col-md-6">
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <Img
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        fluid={
                          post.node.featured_media.localFile.childImageSharp
                            .fluid
                        }
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <Link
                      to={post.node.slug}
                      className="font-weight-light text-decoration-none"
                    >
                      <p
                        className="text-small text-muted"
                        style={{ fontSize: "1rem" }}
                      >
                        {post.node.date}
                      </p>
                      <h5 className="font-weight-normal text-dark">
                        {post.node.title}
                      </h5>
                      <p
                        className="text-small text-muted"
                        style={{ lineHeight: "1.1rem" }}
                        dangerouslySetInnerHTML={{
                          __html:
                            post.node.content
                              .replace(/<p>/g, "")
                              .replace(/<\/p>/g)
                              .substr(0, 60) + "... read more",
                        }}
                      ></p>
                    </Link>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
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
          date(formatString: " MMMM DD, YYYY")
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
    }
  }
`
