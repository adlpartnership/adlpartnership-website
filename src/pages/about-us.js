import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <SEO title="About Us" />
      <Layout>
        <div className="container my-5">
          <div className="row">
            <div className="col-12 col-md-4">
              <h1 style={{ fontFamily: "Gotham", fontWeight: "700" }}>
                <span className="text-danger">excite</span>
                <span className="text-muted">.calm</span>.think
              </h1>
              <blockquote className="blockquote">
                <p>
                  Architecture is not only about shelter, nor a simple
                  enclosure. It has to excite one,calm one, and make one think.
                </p>
              </blockquote>
            </div>
            <div
              className="col-12 col-md-8 mt-4 mt-md-0 "
              style={{ color: "#999999" }}
            >
              <p>
                ADL (Architecture Design Laboratory) was founded in Singapore in
                2015 by a group of architects, who are passionate about
                architecture and urban planning to form a unique design firm.
                The firm brings in collective international and local experience
                of the global-local team with strong design research culture to
                deliver quality design solution.
              </p>
              <p>
                Based in Singapore, Jakarta and Surabaya – Indonesia, ADL
                comprises of architectural design and planning professionals who
                have worked in renowned international design firms with
                experience across regions, bringing a unique blend of global
                exposure yet fully attuned to the local culture.
              </p>
              <p>
                The partners believe that good design should be simple, easy to
                comprehend. It should create spaces that are comfortable,
                practical yet leaving deep impressions for the users by
                balancing functional requirements with design creativity. The
                design process should be the collaboration among all
                stakeholders to accommodate different needs.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default AboutUsPage
