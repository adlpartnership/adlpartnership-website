import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { MdEmail } from "react-icons/md"
import { FaLinkedin } from "react-icons/fa"

const temporaryDataProfile = [
  {
    name: "Hangga Swandaru Hadi",
    title: "Partner",
    education: [
      "Bachelor Of Architecture Engineering, ITB Bandung, Indonesia",
      "MSc in Urbanism, TU Delft, The Netherlands",
    ],
    contactInfo: [
      { type: "email", link: "mailto:hangga@adlpartnership.com" },
      {
        type: "linkedIn",
        link: "https://www.linkedin.com/in/hangga-hadi-35b8b77b",
      },
    ],
    bio:
      "Mr. Hadi is an urban designer with 10 years experience in urban design and master planning as well as architecture projects throughout China, South East Asia and Middle East. His scope of project involvement includes waterfront, urban redevelopment, new township development, theme park; urban design guidelines, resort master planning and broad range of projects from small to large scale. Prior to joining ADL in 2015, Mr. Hadi has worked with both architecture and planning/ urban design teams in Singapore, UAE and Indonesia.",
  },
  {
    name: "Lukito",
    title: "Partner",
    education: [
      "Bachelor Of Architecture Engineering, ITB Bandung, Indonesia",
      "MSc in Urbanism, TU Delft, The Netherlands",
    ],
    contactInfo: [
      { type: "email", link: "mailto:hangga@adlpartnership.com" },
      {
        type: "linkedIn",
        link: "https://www.linkedin.com/in/hangga-hadi-35b8b77b",
      },
    ],
    bio:
      "Mr. Hadi is an urban designer with 10 years experience in urban design and master planning as well as architecture projects throughout China, South East Asia and Middle East. His scope of project involvement includes waterfront, urban redevelopment, new township development, theme park; urban design guidelines, resort master planning and broad range of projects from small to large scale. Prior to joining ADL in 2015, Mr. Hadi has worked with both architecture and planning/ urban design teams in Singapore, UAE and Indonesia.",
  },
]

const PeoplePage = () => {
  const { featuredImage, placeholder } = useStaticQuery(graphql`
    {
      featuredImage: file(relativePath: { eq: "people/architect.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      placeholder: file(relativePath: { eq: "people/Hangga.png" }) {
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
      <SEO title="People" />
      <Layout>
        <div className="container mt-5 text-center">
          <h1 className="display-4 text-center font-weight-light">Our Team</h1>

          <p>
            Our team brings together ideas, creativity, technical expertise and
            attention to details that enhances the planning, design and
            construction process. We collaborate, challenge ideas and think
            out-of-the-box to provide the best design solutions for our clients.
          </p>
        </div>

        <div className="container my-5">
          <div className="people-grid">
            <div className="people-content"></div>
          </div>
        </div>

        <div className="container my-5">
          <div className="row">
            {temporaryDataProfile.map((profile, index) => {
              return (
                <div key={`${index}`} className="col-12 col-lg-6 mb-5 mb-lg-0">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <Img
                        className="w-100"
                        fluid={placeholder.childImageSharp.fluid}
                      />
                    </div>
                    <div className="col-12 col-md-8">
                      <h2 className="mt-4 mt-lg-0 font-weight-light">
                        {profile.name}
                      </h2>
                      <p className="small text-muted">{profile.title}</p>
                      {profile.education.map(education => {
                        return (
                          <p className="small text-muted p-0 m-0">
                            {education}
                          </p>
                        )
                      })}
                      <div className="mt-2" />
                      {profile.contactInfo.map(link => {
                        return (
                          <a
                            href={link.link}
                            className="mr-1 text-danger"
                            style={{ fontSize: "1.5rem" }}
                          >
                            {link.type === "email" && <MdEmail />}
                            {link.type === "linkedIn" && <FaLinkedin />}
                          </a>
                        )
                      })}
                      <p className="text-muted mt-4">{profile.bio}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}
export default PeoplePage
