import React, { useState, useEffect } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import queryString from "query-string"

const tags = [
  "Architecture",
  "Master Plan",
  "Mixed-Use",
  "Office",
  "Residential",
  "Retail",
  "Transit Oriented Development",
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

const ProjectsPage = props => {
  const [classActive, setActive] = useState(8)
  const [filterTag, setFilterTag] = useState("")
  const filteredProjects = props.data.allPortfolio.edges.filter(portfolio => {
    return portfolio.node.categories.nodes
      .map(category => category.name)
      .join()
      .toLowerCase()
      .includes(filterTag.toLowerCase())
  })

  useEffect(() => {
    props.location.state.tag != undefined &&
      setFilterTag(props.location.state.tag)
  }, [props.location.state])
  return (
    <React.Fragment>
      <SEO title="Projects" />
      <Layout>
        <ul
          className="nav project-navigation-filter py-2"
          style={{ flexWrap: "nowrap", whiteSpace: "nowrap" }}
        >
          <li className="nav-item">
            <p
              className={`nav-link font-weight-light m-0 ${
                classActive === 8 ? `text-danger` : `text-muted`
              }`}
              onClick={() => (setFilterTag(""), setActive(8))}
              style={{ cursor: "pointer" }}
            >
              All
            </p>
          </li>
          {tags.map((tag, index) => {
            return (
              <li className="nav-item">
                <p
                  className={`nav-link font-weight-light m-0 ${
                    index === classActive ? `text-danger` : `text-muted`
                  }`}
                  onClick={() => (setFilterTag(tag), setActive(index))}
                  style={{ cursor: "pointer" }}
                >
                  {tag}
                </p>
              </li>
            )
          })}
        </ul>
        <div className="divider" />
        <div className="container-fluid">
          <div className="row project-thumbnail">
            {filteredProjects.map((project, index) => {
              return (
                <div className="col-6 col-md-4 col-lg-3" key={`${index}`}>
                  <Link to={`/projects/${project.node.slug}`}>
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <GatsbyImage
                        image={
                          project.node.featuredImage.node.localFile
                            .childImageSharp.gatsbyImageData
                        }
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }}
                        alt={project.node.featuredImage.node.altText}
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
    allPortfolio: allWpPortfolio {
      edges {
        node {
          id
          title
          slug
          categories {
            nodes {
              name
            }
          }
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
    }
  }
`
