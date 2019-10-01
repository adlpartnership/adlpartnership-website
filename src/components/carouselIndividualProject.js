import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"
import carouselIndividualStyles from "./carouselIndividualProject.module.css"

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
        className={carouselIndividualStyles.slide}
      >
        {dataImage.map(image => {
          return (
            <div
              className="position-relative w-100"
              style={{ paddingTop: "75%" }}
            >
              <Img
                className="position-absolute w-100"
                style={{
                  top: "0",
                  left: "0",
                  height: "100%",
                }}
                fluid={image.guid.localFile.childImageSharp.fluid}
                alt={image.guid.alt_text}
              />
            </div>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}
export default CarouselIndividualProject
