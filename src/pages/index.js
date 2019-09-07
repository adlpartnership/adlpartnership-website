import React, { useEffect } from "react"
import Layout from "../components/layout"
import CarouselHero from "../components/carouselHero"
import { graphql, navigate } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <React.Fragment>
      <SEO title="Welcome" />
      <Layout>
        <CarouselHero />
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
