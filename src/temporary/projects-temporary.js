import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

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

const ProjectsPage = () => {
  const { temporaryImage } = useStaticQuery(graphql`{
  temporaryImage: file(relativePath: {eq: "carousel-hero/citraland-1.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
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
                <Link className="nav-link text-muted font-weight-light">
                  {tag}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="divider" />
        <div className="container-fluid">
          <div className="row project-thumbnail">
            {temporaryProjectData.map((project, index) => {
              return (
                <div className="col-6 col-md-4 col-lg-3" key={`${index}`}>
                  <Link to={`/project-template`}>
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "100%" }}
                    >
                      <GatsbyImage
                        image={temporaryImage.childImageSharp.gatsbyImageData}
                        className="position-absolute w-100"
                        style={{ top: "0", left: "0", height: "100%" }} />
                      <div
                        className="position-absolute w-100 overlay"
                        style={{ bottom: "0" }}
                      >
                        <h4>{project}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}

export default ProjectsPage
