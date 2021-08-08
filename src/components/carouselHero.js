import { Carousel } from "../../node_modules/react-responsive-carousel"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
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
              gatsbyImageData(layout: FULL_WIDTH)
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
        // className={`${carouselHeroStyles.styledControlDots}`}
        // className="styled-legend"
      >
        {data.map(image => {
          return (
            <React.Fragment key={`${image.node.id}`}>
              <GatsbyImage
                image={
                  image.node.featuredImage.node.localFile.childImageSharp
                    .gatsbyImageData
                }
                className={`image-carousel`}
              />
              <Link to={`/${image.node.slug}`}>
                <h1 className={`legend styled-legend`}>{image.node.title}</h1>
              </Link>
            </React.Fragment>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}

export default CarouselHero
