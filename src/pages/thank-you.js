import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const ThankyouSuccessPage = () => {
  return (
    <React.Fragment>
      <SEO title="Thank you for contacting us!" />
      <Layout>
        <div className="container my-5 text-center">
          <h1 className="display-4">Thank you for contacting us!</h1>
          <p className="lead">
            <Link
              to="/"
              className="text-decoration-none text-danger"
              style={{ cursor: "pointer" }}
            >
              Click here
            </Link>{" "}
            to go back to our website.
          </p>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ThankyouSuccessPage
