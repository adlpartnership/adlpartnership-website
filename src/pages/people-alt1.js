import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
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
  const { featuredImage, placeholder } = useStaticQuery(graphql`{
  featuredImage: file(relativePath: {eq: "people/architect.jpeg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  placeholder: file(relativePath: {eq: "people/Hangga.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`)
  return (
    <React.Fragment>
      <SEO title="People" />
      <Layout>
        <div className="position-relative">
          <GatsbyImage
            image={featuredImage.childImageSharp.gatsbyImageData}
            className="featured-image-people-page" />
          <div
            className="position-absolute d-flex flex-column justify-content-center text-light text-center container"
            style={{
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              maxWidth: "700px",
            }}
          >
            <h1 className="display-4">The Partnership of Experts.</h1>
            <p>
              Whilst the team pursues design excellence through creative
              solutions, the team does not lose sights of the need for sound
              project management.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <blockquote className="block-quote text-center">
            <h4 className="font-weight-light">
              A successful project is completed on time and under budget while
              creatively solving design challenges.
            </h4>
          </blockquote>
          <p>
            Before a project begins, the team leaders develop workplans that
            address task, staffing, and schedule requirements. These leaders
            then use comprehensive planning tools to adjust the workplans
            throughout the project. In doing so the team is able to focus on the
            critical issues at the right time, delivering cost effective as well
            as creative solutions for the clients.
          </p>
        </div>

        <div className="container my-5">
          <div className="row">
            {temporaryDataProfile.map((profile, index) => {
              return (
                <div key={`${index}`} className="col-12 col-lg-6 mb-5 mb-lg-0">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <GatsbyImage image={placeholder.childImageSharp.gatsbyImageData} className="w-100" />
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
              );
            })}
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
}
export default PeoplePage
