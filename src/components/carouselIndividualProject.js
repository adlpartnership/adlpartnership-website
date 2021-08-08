import React from "react"
import { Carousel } from "react-responsive-carousel"
import { GatsbyImage } from "gatsby-plugin-image"
// import carouselIndividualStyles from "./carouselIndividualProject.module.css"

const CarouselIndividualProject = ({ dataImage }) => {
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
        showIndicators={false}
        // className={carouselIndividualStyles.slide}
      >
        {dataImage.map(image => {
          return (
            <div
              className="position-relative w-100"
              style={{ paddingTop: "56.25%" }}
            >
              <GatsbyImage
                image={image.localFile.childImageSharp.gatsbyImageData}
                className="position-absolute w-100"
                style={{
                  top: "0",
                  left: "0",
                  height: "100%",
                }}
                alt={image.altText}
              />
            </div>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}
export default CarouselIndividualProject
