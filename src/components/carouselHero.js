import { Carousel } from "../../node_modules/react-responsive-carousel"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import carouselHeroStyles from "./carouselHero.module.scss"
const CarouselHero = ({ data }) => {
  const { images } = useStaticQuery(graphql`
    {
      images: allFile(filter: { relativeDirectory: { eq: "carousel-hero" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        useKeyboardArrows
        showArrows={true}
        emulateTouch
        className={`${carouselHeroStyles.styledControlDots}`}
      >
        {data.map(image => {
          return (
            <React.Fragment key={`${image.node.id}`}>
              <Img
                fluid={
                  image.node.featured_media.localFile.childImageSharp.fluid
                }
                className={`image-carousel`}
              />
              <Link to={`/${image.node.slug}`}>
                <h1 className={`legend ${carouselHeroStyles.styledLegend}`}>
                  {image.node.title}
                </h1>
              </Link>
            </React.Fragment>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}

export default CarouselHero
