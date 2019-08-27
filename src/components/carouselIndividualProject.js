import React from "react"
import { Carousel } from "react-responsive-carousel"
import Img from "gatsby-image"

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
      >
        {dataImage.map(image => {
          return (
            <div
              className="position-relative w-100"
              style={{ paddingTop: "56.25%" }}
            >
              <Img
                className="position-absolute w-100"
                style={{ top: "0", left: "0", height: "100%" }}
                fluid={image.node.childImageSharp.fluid}
              />
            </div>
          )
        })}
      </Carousel>
    </React.Fragment>
  )
}
export default CarouselIndividualProject
