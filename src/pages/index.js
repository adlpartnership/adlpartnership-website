import React from "react"
import Layout from "../components/layout"
import CarouselHero from "../components/carouselHero"
import { graphql } from "gatsby"
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
