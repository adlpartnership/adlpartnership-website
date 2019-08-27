import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import CarouselIndividualProject from "../components/carouselIndividualProject"

const ProjectTemplate = () => {
  const { temporaryImages } = useStaticQuery(graphql`
    {
      temporaryImages: allFile(
        filter: { relativeDirectory: { eq: "carousel-hero" } }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <SEO title="Individual Project Page" />
      <Layout>
        <div className="container my-5">
          <h1 className="font-weight-light">Nama Project Individual</h1>
          <p className="text-muted">Concept Master Plan</p>
          <CarouselIndividualProject dataImage={temporaryImages.edges} />
          <div className="my-3" />
          <div className="row">
            <div className="col-12 col-md-7">
              <p className="text-muted">
                The Almaty International Medical Center puts forth a new model
                of care for Kazakhstan’s healthcare sector. This pioneering
                facility is designed to accommodate future change and expansion
                to rapidly adapt to the demands of this evolving market. With
                the opportunity to capture a demographic that often seeks
                medical treatment outside the country, the center aims to become
                the leading private hospital to offer state-of-the-art inpatient
                and outpatient services with an elevated standard of care. The
                building’s massing reflects the diverse mix of programmatic
                needs: high-throughput outpatient floors occupy a larger
                footprint at the base; diagnostic, surgical, oncology, and
                maternity care are located on the mid-level platforms; and
                inpatient units are sited on the compact upper floors. The
                design takes advantage of these variable footprints, aligning
                the program volumes along the city side of the site to amplify
                the center's urban presence along a major avenue. This alignment
                results in a terraced rear facade that gives patients and staff
                access to outdoor space, generous landscaping, and remarkable
                mountain views. From the entry driveways to the lobbies,
                gracious arrival spaces will define patients' critical first
                impression, fostering confidence and establishing a level of
                comfort that stands in contrast to the typical experience of a
                medical institution. The center further aims to provide a more
                restorative, hospitality-inspired atmosphere by balancing
                clinical efficiency with luxurious amenities.
              </p>
            </div>
            <div className="col-12 col-md-5">
              <p>
                Client: Ciputra Group
                <br /> Site area: 124.86ha
                <br /> Completion date: mid 2017
              </p>
            </div>
          </div>
          <div className="my-3" />
          <div>
            <h4>See Related Projects</h4>
            <div className="my-3" />
            <div className="row">
              {temporaryImages.edges.map(image => {
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
                      <h5 className="font-weight-light">
                        Other Project Individual
                      </h5>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}
export default ProjectTemplate
