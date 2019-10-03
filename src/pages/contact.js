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
                className="text-center mx-auto"
                style={{ maxWidth: "700px" }}
                name="contact"
                method="POST"
                data-netlify="true"
                action="/thank-you"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
              >
                <p hidden>
                  <label>
                    Don’t fill this out if you're human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <div className="form-row">
                  <div className="col-12 col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      name="name"
                    />
                  </div>
                  <div className="col-12 col-md-6 mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      name="email"
                    />
                  </div>
                  <div className="col-12 mt-3 text-light">
                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Your Message"
                      name="message"
                    ></textarea>
                  </div>
                </div>
                <div data-netlify-recaptcha="true" />
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
