import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
  function handleOnSubmit(e) {
    e.preventDefault()
  }
  return (
    <React.Fragment>
      <SEO title="Contact Us" />
      <Layout>
        <div className="container my-5">
          <h1 className="display-4 text-uppercase text-center">Contact Us</h1>
          <div className="my-3" />
          <div className="row">
            <div className="col-12">
              <form
                onSubmit={handleOnSubmit}
                className="text-center mx-auto"
                style={{ maxWidth: "700px" }}
              >
                <div className="form-row">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Your Message"
                    ></textarea>
                  </div>
                </div>
                <button
                  className="btn btn-danger mt-3 mx-auto btn-lg"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ContactPage
