import { Carousel } from "react-responsive-carousel"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

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
      >
        {images.edges.map(image => {
          return (
            <React.Fragment key={`${image.node.id}`}>
              <Img
                fluid={image.node.childImageSharp.fluid}
                className={`image-carousel`}
              />
              <Link to={`/projects/${image.node.name}`}>
                <p className="legend">{image.node.name}</p>
              </Link>
            </React.Fragment>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}

export default CarouselHero
