import { Carousel } from "../../node_modules/react-responsive-carousel"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import carouselHeroStyles from "./carouselHero.module.scss"
const CarouselHero = () => {
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
        {images.edges.map(image => {
          return (
            <React.Fragment key={`${image.node.id}`}>
              <Img
                fluid={image.node.childImageSharp.fluid}
                className={`image-carousel`}
              />
              <Link to={`/project-template`}>
                <h1 className={`legend ${carouselHeroStyles.styledLegend}`}>
                  {image.node.name}
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
