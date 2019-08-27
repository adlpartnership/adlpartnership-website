import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { GiDeadHead } from "react-icons/gi"

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <SEO title="Oops, Sorry!" />
      <Layout>
        <div className="container my-5 text-center">
          <GiDeadHead size={"10rem"} />
          <h1 className="text-center">Sorry!</h1>
          <p className="lead">
            We probably made mistake linking the page you were looking for...
          </p>
          <p>Can you send us a feedback which page is missing?</p>
          <a href="#" className="text-dark text-decoration-none">
            Click here
          </a>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
