import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const tags = [
  "All",
  "Architectural Project",
  "Master Planning Project",
  "Mixed-Use Development",
  "Office",
  "Residential",
  "Retail",
  "Transport-Oriented Development",
  "Hospitality",
]

const temporaryProjectData = [
  `CitraLand Palembang Master Plan`,
  `Tanjung Barat Station TOD`,
  `Bekasi Station TOD Visioning Master Plan`,
  `Graha Wisata Residence Sidoarjo Master Plan`,
  `Kaltim Post Office Tower`,
  `Grand City Balikpapan Master Plan`,
  `Golf City at Jababeka Cikarang Master Plan`,
  `CitraLand Tallasa Makassar Master Plan`,
  `Denver Apartment at CitraLand Surabaya`,
  `Tanjung Lesung Master Plan`,
  `Tamansari Urbano Residence`,
  `CitraLand Barsa City`,
]

const ProjectsPage = ({ data }) => {
  return (
    <React.Fragment>
      <SEO title="Projects" />
      <Layout>
        <ul
          className="nav project-navigation-filter py-2"
          style={{ flexWrap: "nowrap", whiteSpace: "nowrap" }}
        >
          {tags.map(tag => {
            return (
              <li className="nav-item">
                <Link className="nav-link text-muted font-weight-light" to="#">
                  {tag}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="divider" />
        <div className="container-fluid">
          <div className="row project-thumbnail">
            {data.allPortfolio.edges.map((project, index) => {
              return (
                <div className="col-6 col-md-4 col-lg-3" key={`${index}`}>
                  <Link to={`/${project.node.slug}`}>
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <Img
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        fluid={
                          project.node.featured_media.localFile.childImageSharp
                            .fluid
                        }
                        alt={project.node.featured_media.alt_text}
                      />
                      <div
                        className="position-absolute w-100 overlay"
                        style={{ bottom: "0" }}
                      >
                        <h4>{project.node.title}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
            {/*{temporaryProjectData.map((project, index) => {
              return (
                <div className="col-6 col-md-4 col-lg-3" key={`${index}`}>
                  <Link to={`/project-template`}>
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <Img
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        fluid={temporaryImage.childImageSharp.fluid}
                      />
                      <div
                        className="position-absolute w-100 overlay"
                        style={{ bottom: "0" }}
                      >
                        <h4>{project}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}*/}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    allPortfolio: allWordpressWpPortfolio {
      edges {
        node {
          id
          title
          slug
          featured_media {
            alt_text
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
