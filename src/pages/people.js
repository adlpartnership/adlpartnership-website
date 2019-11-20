import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useMediaQuery } from "react-responsive"

const PeoplePage = () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767.98px)",
  })
  const { people, peoplePartner, supportStaff } = useStaticQuery(graphql`
    {
      supportStaff: file(relativePath: { eq: "people/support staff.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      people: allWordpressWpPeople(sort: { order: ASC, fields: date }) {
        edges {
          node {
            slug
            title
            professional_title
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
      peoplePartner: allWordpressWpPeoplePartner {
        edges {
          node {
            slug
            title
            professional_title
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
  `)
  const peoplePartnerGroup = peoplePartner.edges.map((partner, index) => {
    return (
      <React.Fragment key={`${index}`}>
        <Link to={`/${partner.node.slug}`}>
          <div className="position-relative h-100" style={{ margin: "1px" }}>
            <Img
              className="position-absolute w-100"
              style={{ top: "0", left: "0", height: "100%" }}
              fluid={
                partner.node.featured_media.localFile.childImageSharp.fluid
              }
              alt={partner.node.featured_media.alt_text}
            />
            <div
              className="position-absolute w-100 overlay"
              style={{ bottom: "0" }}
            >
              <h6 className="ml-2 mb-0">{partner.node.title}</h6>
              <p className="ml-2" style={{ fontSize: "14px" }}>
                {partner.node.professional_title}
              </p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    )
  })

  const peoplePartnerGroupMobile = peoplePartner.edges.map((partner, index) => {
    return (
      <React.Fragment key={`${index}`}>
        <Link to={`/${partner.node.slug}`}>
          <div
            className="position-relative w-100"
            style={{ paddingTop: "100%" }}
          >
            <Img
              className="position-absolute w-100"
              style={{ top: "0", left: "0", height: "100%" }}
              fluid={
                partner.node.featured_media.localFile.childImageSharp.fluid
              }
              alt={partner.node.featured_media.alt_text}
            />
            <div
              className="position-absolute w-100 overlay"
              style={{ bottom: "0" }}
            >
              <h6 className="ml-2 mb-0 ">{partner.node.title}</h6>
              <p className="ml-2 " style={{ fontSize: "14px" }}>
                {partner.node.professional_title}
              </p>
            </div>
          </div>
        </Link>
      </React.Fragment>
    )
  })

  const peopleGroup = people.edges.map((person, index) => {
    if (person.node.title !== null) {
      return (
        <React.Fragment key={`${index}`}>
          <Link to={`/${person.node.slug}`}>
            <div
              className="position-relative w-100"
              style={{ paddingTop: "75%", margin: "1px" }}
            >
              <Img
                className="position-absolute w-100"
                style={{ top: "0", left: "0", height: "100%" }}
                fluid={
                  person.node.featured_media.localFile.childImageSharp.fluid
                }
                alt={person.node.featured_media.alt_text}
              />
              <div
                className="position-absolute w-100 overlay"
                style={{ bottom: "0" }}
              >
                <h6 className="ml-2 mb-0">{person.node.title}</h6>
                <p className="ml-2" style={{ fontSize: "14px" }}>
                  {person.node.professional_title}
                </p>
              </div>
            </div>
          </Link>
        </React.Fragment>
      )
    }
  })

  const peopleGroupMobile = people.edges.map((person, index) => {
    if (person.node.title !== null) {
      return (
        <React.Fragment key={`${index}`}>
          <Link to={`/${person.node.slug}`}>
            <div
              className="position-relative w-100"
              style={{ paddingTop: "100%" }}
            >
              <Img
                className="position-absolute w-100"
                style={{ top: "0", left: "0", height: "100%" }}
                fluid={
                  person.node.featured_media.localFile.childImageSharp.fluid
                }
                alt={person.node.featured_media.alt_text}
              />
              <div
                className="position-absolute w-100 overlay"
                style={{ bottom: "0" }}
              >
                <h6 className="ml-2 mb-0">{person.node.title}</h6>
                <p className="ml-2" style={{ fontSize: "14px" }}>
                  {person.node.professional_title}
                </p>
              </div>
            </div>
          </Link>
        </React.Fragment>
      )
    }
  })

  if (isMobile) {
    return (
      <React.Fragment>
        <SEO
          title="People"
          description="Our team brings together ideas, creativity, technical expertise and
            attention to details that enhances the planning, design and
            construction process. We collaborate, challenge ideas and think
            out-of-the-box to provide the best design solutions for our clients."
        />
        <Layout>
          <div
            className="container my-5 text-center mx-auto"
            style={{ maxWidth: "850px" }}
          >
            <h1 className="h5 text-center font-weight-light">Our Team</h1>

            <p>
              Our team brings together ideas, creativity, technical expertise
              and attention to details that enhances the planning, design and
              construction process. We collaborate, challenge ideas and think
              out-of-the-box to provide the best design solutions for our
              clients.
            </p>
          </div>
          <div className="row no-gutters project-thumbnail m-0 p-0">
            {peoplePartnerGroupMobile
              .concat(peopleGroupMobile)
              .map((person, index) => {
                return (
                  <div key={`${index}`} className="col-6 m-0 p-0">
                    {person}
                  </div>
                )
              })}
            <div className="col-6 m-0 p-0">
              <Link to="/people">
                <div
                  className="position-relative w-100"
                  style={{ paddingTop: "100%" }}
                >
                  <Img
                    className="position-absolute w-100"
                    style={{ top: "0", left: "0", height: "100%" }}
                    fluid={supportStaff.childImageSharp.fluid}
                    alt="support staff"
                  />
                  <div
                    className="position-absolute w-100 overlay"
                    style={{ bottom: "0" }}
                  >
                    <h6 className="ml-2 mb-0">CAD/Support Staff</h6>
                    <p className="ml-2" style={{ fontSize: "14px" }}></p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <SEO
          title="People"
          description="Our team brings together ideas, creativity, technical expertise and
            attention to details that enhances the planning, design and
            construction process. We collaborate, challenge ideas and think
            out-of-the-box to provide the best design solutions for our clients."
        />
        <Layout>
          <div
            className="container my-5 text-center mx-auto"
            style={{ maxWidth: "850px" }}
          >
            <h1 className="display-4 text-center font-weight-light">
              Our Team
            </h1>

            <p>
              Our team brings together ideas, creativity, technical expertise
              and attention to details that enhances the planning, design and
              construction process. We collaborate, challenge ideas and think
              out-of-the-box to provide the best design solutions for our
              clients.
            </p>
          </div>

          <div className="container mx-auto mb-5" style={{ maxWidth: "900px" }}>
            <div className="row no-gutters project-thumbnail m-0 p-0">
              <div className="col-4 m-0 p-0">{peoplePartnerGroup[0]}</div>
              <div className="col-8 m-0 p-0">
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[0]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[1]}</div>
                </div>
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[2]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[3]}</div>
                </div>
              </div>
            </div>
            <div className="row no-gutters project-thumbnail m-0 p-0">
              <div className="col-8 m-0 p-0">
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[4]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[5]}</div>
                </div>
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[6]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[7]}</div>
                </div>
              </div>
              <div className="col-4 m-0 p-0">{peoplePartnerGroup[1]}</div>
            </div>
            <div className="row no-gutters project-thumbnail m-0 p-0">
              <div className="col-4 m-0 p-0">{peoplePartnerGroup[2]}</div>
              <div className="col-8 m-0 p-0">
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[8]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[9]}</div>
                </div>
                <div className="row m-0 p-0 no-gutters">
                  <div className="col-6 m-0 p-0">{peopleGroup[10]}</div>
                  <div className="col-6 m-0 p-0">{peopleGroup[11]}</div>
                </div>
              </div>
            </div>
            <div className="row no-gutters project-thumbnail m-0 p-0">
              {peopleGroup.slice(12).map(person => {
                return <div className="col-4 m-0 p-0">{person}</div>
              })}
              <div className="col-4 m-0 p-0">
                <Link to="/people">
                  <div
                    className="position-relative w-100"
                    style={{ paddingTop: "75%" }}
                  >
                    <Img
                      className="position-absolute w-100"
                      style={{ top: "0", left: "0", height: "100%" }}
                      fluid={supportStaff.childImageSharp.fluid}
                      alt="support staff"
                    />
                    <div
                      className="position-absolute w-100 overlay"
                      style={{ bottom: "0" }}
                    >
                      <h6 className="ml-2 mb-0">CAD/Support Staff</h6>
                      <p className="ml-2" style={{ fontSize: "14px" }}></p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* <div className="container mx-auto" style={{ maxWidth: "700px" }}>
          <div className="row project-thumbnail">
            <div className="people-grid-partner">{peopleGroup[0]}</div>
            <div className="people-grid-staff">
              {peopleGroup[1]}
              {peopleGroup[2]}
            </div>
          </div>
        </div>
        {peopleGroup.length > 0 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-partner">{peopleGroup[0]}</div>
              <div className="people-grid-staff">
                {peopleGroup[1]}
                {peopleGroup[2]}
              </div>
            </div>
          </div>
        )}
        {peopleGroup.length > 3 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-staff">
                {peopleGroup[4]}
                {peopleGroup[5]}
              </div>
              <div className="people-grid-partner">{peopleGroup[3]}</div>
            </div>
          </div>
        )}
        {peopleGroup.length > 6 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-partner">{peopleGroup[6]}</div>
              <div className="people-grid-staff">
                {peopleGroup[7]}
                {peopleGroup[8]}
              </div>
            </div>
          </div>
        )}
        {peopleGroup.length > 9 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-staff">
                {peopleGroup[10]}
                {peopleGroup[11]}
              </div>
              <div className="people-grid-partner">{peopleGroup[9]}</div>
            </div>
          </div>
        )}
        {peopleGroup.length > 12 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-partner">{peopleGroup[12]}</div>
              <div className="people-grid-staff">
                {peopleGroup[13]}
                {peopleGroup[14]}
              </div>
            </div>
          </div>
        )}
        {peopleGroup.length > 15 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-staff">
                {peopleGroup[16]}
                {peopleGroup[17]}
              </div>
              <div className="people-grid-partner">{peopleGroup[15]}</div>
            </div>
          </div>
        )}

        {peopleGroup.length > 18 && (
          <div className="container mx-auto" style={{ maxWidth: "700px" }}>
            <div className="row project-thumbnail">
              <div className="people-grid-partner">{peopleGroup[18]}</div>
              <div className="people-grid-staff">
                {peopleGroup[19]}
                {peopleGroup[120]}
              </div>
            </div>
          </div>
        )}*/}
        </Layout>
      </React.Fragment>
    )
  }
}
export default PeoplePage
