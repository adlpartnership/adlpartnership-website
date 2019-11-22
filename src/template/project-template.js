import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import CarouselIndividualProject from "../components/carouselIndividualProject"

const ProjectTemplate = props => {
  const { portfolio, relatedPortfolio } = props.data

  const categories = portfolio.categories.map(category => {
    return category.name
  })
  return (
    <React.Fragment>
      <SEO title={portfolio.title} />
      <Layout>
        <div className="container my-5">
          <CarouselIndividualProject dataImage={portfolio.images} />
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
                Client: 
                <span
                  dangerouslySetInnerHTML={{ __html: portfolio.acf.client }}
                ></span>
                <br /> Site area: 
                <span
                  dangerouslySetInnerHTML={{
                    __html: portfolio.acf.site_area
                      .replace(/m2/g, " ")
                      .replace(/ha/g, " "),
                  }}
                ></span>
                {portfolio.acf.site_area.includes("m2") ? (
                  <React.Fragment>
                    m<sup>2</sup>
                  </React.Fragment>
                ) : (
                  "ha"
                )}
                {portfolio.acf.gfa !== "" ? (
                  <React.Fragment>
                    <br />
                    GFA:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.acf.gfa
                          .replace(/m2/g, " ")
                          .replace(/ha/g, " "),
                      }}
                    ></span>
                    {portfolio.acf.gfa.includes("m2") ? (
                      <React.Fragment>
                        m<sup>2</sup>
                      </React.Fragment>
                    ) : (
                      "ha"
                    )}
                  </React.Fragment>
                ) : (
                  ""
                )}
                <br />
                Scope of Services:{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: portfolio.acf.scope_of_service,
                  }}
                ></span>
                <br />
                Current Status:{" "}
                <span
                  dangerouslySetInnerHTML={{
                    __html: portfolio.acf.current_status,
                  }}
                ></span>
                {portfolio.acf.current_status === "Completed" ? (
                  ""
                ) : (
                  <React.Fragment>
                    <br />
                    Completion date:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: portfolio.acf.completion_date,
                      }}
                    ></span>
                  </React.Fragment>
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
                        <Img
                          className="position-absolute w-100"
                          style={{ top: "0", left: "0", height: "100%" }}
                          fluid={
                            portfolio.node.featured_media.localFile
                              .childImageSharp.fluid
                          }
                          alt={portfolio.node.featured_media.alt_text}
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
    relatedPortfolio: allWordpressWpPortfolio(
      limit: 3
      filter: { categories: { elemMatch: { slug: { eq: $categories } } } }
    ) {
      edges {
        node {
          id
          slug
          title
          featured_media {
            alt_text
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    portfolio: wordpressWpPortfolio(slug: { eq: $slug }) {
      title
      content
      images {
        guid {
          alt_text
          localFile {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      acf {
        client
        completion_date
        current_status
        gfa
        scope_of_service
        site_area
      }
      categories {
        id
        name
      }
    }
  }
`
