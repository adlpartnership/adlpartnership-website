import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import CarouselIndividualProject from "../components/carouselIndividualProject"

const ProjectTemplate = props => {
  const { portfolio, relatedPortfolio } = props.data
  let images = []
  for (let i = 1; i <= 10; i++) {
    images.push(portfolio.portfolioImages[`image${i}`])
  }
  images = images.filter((image, index) => image != null)
  const categories = portfolio.categories.nodes.map(category => category.name)
  return (
    <React.Fragment>
      <SEO title={portfolio.title} />
      <Layout>
        <div className="container my-5">
          <CarouselIndividualProject dataImage={images} />
          <div className="my-5" />
          <h1
            className="h4 font-weight-light"
            dangerouslySetInnerHTML={{ __html: portfolio.title }}
          ></h1>

          <p
            className="text-muted"
            dangerouslySetInnerHTML={{
              __html: "Categories: " + categories.join(", "),
            }}
          ></p>

          <div className="my-3" />
          <div className="row">
            <div className="col-12 col-md-7">
              <div
                className="text-muted"
                dangerouslySetInnerHTML={{ __html: portfolio.content }}
              />
            </div>
            <div className="col-12 col-md-5">
              <p>
                {portfolio.projectDetails.client && (
                  <>
                    Client: 
                    <span>portfolio.projectDetails.client</span>
                    <br />
                  </>
                )}

                {portfolio.projectDetails.siteArea && (
                  <>
                    Site area: 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.projectDetails.siteArea
                          .replace(/m2/g, " ")
                          .replace(/ha/g, " "),
                      }}
                    ></span>
                    {portfolio.projectDetails.siteArea.includes("m2") ? (
                      <React.Fragment>
                        m<sup>2</sup>
                      </React.Fragment>
                    ) : (
                      "ha"
                    )}
                  </>
                )}

                {portfolio.projectDetails.gfa && (
                  <React.Fragment>
                    <br />
                    GFA:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.projectDetails.gfa
                          .replace(/m2/g, " ")
                          .replace(/ha/g, " "),
                      }}
                    ></span>
                    {portfolio.projectDetails.gfa.includes("m2") ? (
                      <React.Fragment>
                        m<sup>2</sup>
                      </React.Fragment>
                    ) : (
                      "ha"
                    )}
                    <br />
                  </React.Fragment>
                )}

                {portfolio.projectDetails.scopeOfService && (
                  <>
                    Scope of Services:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.projectDetails.scopeOfService,
                      }}
                    ></span>
                    <br />
                  </>
                )}

                {portfolio.projectDetails.currentStatus && (
                  <>
                    Current Status:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.projectDetails.currentStatus,
                      }}
                    ></span>
                    {portfolio.projectDetails.currentStatus === "Completed" ? (
                      ""
                    ) : (
                      <React.Fragment>
                        <br />
                        Completion date:{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: portfolio.projectDetails.completionDate,
                          }}
                        ></span>
                      </React.Fragment>
                    )}
                  </>
                )}
              </p>
            </div>
          </div>
          <div className="my-3" />
          <div>
            <h4>See Related Projects</h4>
            <div className="my-3" />
            <div className="row">
              {relatedPortfolio.edges.map(portfolio => {
                return (
                  <div
                    className="col-12 col-md-4 mt-5 mt-md-0"
                    key={`${portfolio.node.id}`}
                  >
                    <Link
                      to={`/projects/${portfolio.node.slug}`}
                      className="text-dark text-decoration-none"
                    >
                      <div
                        className="position-relative w-100"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <GatsbyImage
                          image={
                            portfolio.node.featuredImage.node.localFile
                              .childImageSharp.gatsbyImageData
                          }
                          className="position-absolute w-100"
                          style={{ top: "0", left: "0", height: "100%" }}
                          alt={portfolio.node.featuredImage.node.alt_text}
                        />
                      </div>
                      <div className="my-2" />
                      <h6
                        className="font-weight-light"
                        dangerouslySetInnerHTML={{
                          __html: portfolio.node.title,
                        }}
                      ></h6>
                    </Link>
                  </div>
                )
              })}
              {/*{temporaryImages.edges.map(image => {
                return (
                  <div className="col-12 col-md-4">
                    <Link
                      to="/project-template"
                      className="text-dark text-decoration-none"
                    >
                      <div
                        className="position-relative w-100"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <Img
                          className="position-absolute w-100"
                          style={{ top: "0", left: "0", height: "100%" }}
                          fluid={image.node.childImageSharp.fluid}
                        />
                      </div>
                      <div className="my-2" />
                      <h6 className="font-weight-light">
                        Other Project Individual
                      </h6>
                    </Link>
                  </div>
                )
              })}*/}
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}
export default ProjectTemplate

export const query = graphql`
  query($slug: String, $categories: String) {
    relatedPortfolio: allWpPortfolio(
      limit: 3
      filter: {
        categories: { nodes: { elemMatch: { slug: { eq: $categories } } } }
      }
    ) {
      edges {
        node {
          id
          slug
          title
          featuredImage {
            node {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH)
                }
              }
            }
          }
        }
      }
    }
    portfolio: wpPortfolio(slug: { eq: $slug }) {
      title
      content
      projectDetails {
        client
        completionDate
        currentStatus
        gfa
        scopeOfService
        siteArea
      }
      categories {
        nodes {
          id
          name
        }
      }
      portfolioImages {
        image1 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image2 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image3 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image4 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image5 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image6 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image7 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image8 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image9 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
        image10 {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
