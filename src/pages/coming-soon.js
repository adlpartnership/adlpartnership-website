import React from "react"

const ComingSoonPage = () => {
  return (
    <React.Fragment>
      <SEO title="Oops, Sorry!" />
      <Layout>
        <div className="container my-5 text-center">
          <GiDeadHead size={"10rem"} />
          <h1 className="text-center">We're rebuilding our wwebsite</h1>
          <p className="lead">
            For inquiries or question, email
            <a
              href="mailto:lukito@adlpartnership.com"
              className="text-dark text-decoration-none"
            >
              Lukito@adlpartnership.com
            </a>
          </p>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default ComingSoonPage
