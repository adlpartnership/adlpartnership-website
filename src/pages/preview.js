import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { Link } from "gatsby"
import WPAPI from "wpapi"
import querystring from "query-string"
import SEO from "../components/seo"
import { Carousel } from "react-responsive-carousel"

export default function PreviewPage({ location }) {
  const [ready, setReady] = useState(false)
  const [content, setContent] = useState()
  const [professionalTitle, setProfessionalTitle] = useState("")
  const [title, setTitle] = useState("")
  const [src, setSrc] = useState("")
  const [alt, setAlt] = useState("")
  const [type, setType] = useState("")
  const [date, setDate] = useState("")
  const [wpCategories, setCategories] = useState([])
  const [acf, setAcf] = useState()
  const [carousel, setCarousel] = useState([])
  useEffect(() => {
    const type = querystring.parse(location.search).type
    setType(type)
    const id = Number(querystring.parse(location.search).id)
    const wp = new WPAPI({
      endpoint: "https://adminadlpartnership.sawirstudio.com/wp-json",
      username: "adlpartnership",
      password: "qwer@123",
    })
    if (type === "people") {
      wp.people = wp.registerRoute("wp/v2", "/people/(?P<id>)")
      wp.people()
        .id(id)
        .auth()
        .then(res => {
          wp.media()
            .id(res.featured_media)
            .then(media => {
              setAlt(media.alt_text)
              setSrc(media.source_url)
            })
          setContent(res.content.rendered)
          setProfessionalTitle(res["professional-title"])
          setTitle(res.title.rendered)
          setReady(true)
        })
    } else if (type === "people_partner") {
      wp.peoplePartner = wp.registerRoute("wp/v2", "/people_partner/(?P<id>)")
      wp.people()
        .id(id)
        .auth()
        .then(res => {
          wp.media()
            .id(res.featured_media)
            .then(media => {
              setAlt(media.alt_text)
              setSrc(media.source_url)
            })
          setContent(res.content.rendered)
          setProfessionalTitle(res["professional-title"])
          setTitle(res.title.rendered)
          setReady(true)
        })
    } else if (type === "post") {
      wp.posts()
        .id(id)
        .auth()
        .then(res => {
          wp.media()
            .id(res.featured_media)
            .then(media => {
              setAlt(media.alt_text)
              setSrc(media.source_url)
            })
          setDate(res.date)
          setContent(res.content.rendered)
          setTitle(res.title.rendered)
          setReady(true)
        })
    } else if (type === "portfolio") {
      wp.portfolio = wp.registerRoute("wp/v2", "/portfolio/(?P<id>)")
      wp.portfolio()
        .id(id)
        .auth()
        .then(res => {
          res.categories.map(category => {
            wp.categories()
              .id(category)
              .then(result => {
                setCategories(wpCategories.concat(result.name))
              })
          })
          console.log(res)
          setAcf(res.acf)
          res.images.map(image => setCarousel(carousel.concat(image.guid)))
          wp.media()
            .id(res.featured_media)
            .then(media => {
              console.log(media)
              setAlt(media.alt_text)
              setSrc(media.source_url)
            })
          setContent(res.content.rendered)
          setTitle(res.title.rendered)
          setReady(true)
        })
    }
  }, [])
  if (ready) {
    if (type === "people" || type === "people_partner") {
      return (
        <React.Fragment>
          <SEO title={title} />
          <Layout>
            <div
              className="container my-5 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <div className="mb-5 w-100 w-md-50 mx-auto">
                <div
                  className="position-relative w-100 "
                  style={{ paddingTop: "56.25%" }}
                >
                  <img
                    className="position-absolute w-100 "
                    style={{
                      top: "0",
                      left: "0",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={src}
                    alt={alt}
                  />
                </div>
              </div>
              <h1
                className="text-center h3"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>
              <p className="text-center text-muted">{professionalTitle}</p>

              <div
                className="mx-auto my-5"
                style={{ maxWidth: "700px", lineHeight: "25.6px" }}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
              <Link
                to="/people"
                className="text-center mx-auto d-block text-dark text-decoration-none"
              >
                Back to people
              </Link>
            </div>
          </Layout>
        </React.Fragment>
      )
    } else if (type === "post") {
      return (
        <React.Fragment>
          <SEO title={`${title}`} />
          <Layout>
            <div
              className="container my-5 mx-auto"
              style={{ maxWidth: "700px" }}
            >
              <p className="text-muted text-center">{date}</p>
              <h1 className="text-center">{title}</h1>
              <div
                className="position-relative w-100 "
                style={{ paddingTop: "56.25%" }}
              >
                <img
                  className="position-absolute w-100"
                  style={{ top: "0", left: "0", height: "100%" }}
                  src={src}
                  alt={alt}
                />
              </div>
              <div
                className="mx-auto my-5"
                style={{ maxWidth: "700px", lineHeight: "25.6px" }}
                dangerouslySetInnerHTML={{ __html: content }}
              ></div>
            </div>
          </Layout>
        </React.Fragment>
      )
    } else if (type === "portfolio") {
      return (
        <React.Fragment>
          <SEO title={title} />
          <Layout>
            <div className="container my-5">
              <Carousel
                showThumbs={false}
                infiniteLoop
                autoPlay
                showStatus={false}
                useKeyboardArrows
                showArrows={true}
                emulateTouch
                showIndicators={false}
              >
                {carousel.map(image => {
                  return (
                    <div
                      className="position-relative w-100"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <img
                        className="position-absolute w-100"
                        style={{
                          top: "0",
                          left: "0",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        src={image}
                      />
                    </div>
                  )
                })}
              </Carousel>
              <div className="my-5" />
              <h1
                className="h4 font-weight-light"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h1>

              <p
                className="text-muted"
                dangerouslySetInnerHTML={{
                  __html: "Categories: " + wpCategories.join(", "),
                }}
              ></p>

              <div className="my-3" />
              <div className="row">
                <div className="col-12 col-md-7">
                  <div
                    className="text-muted"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
                <div className="col-12 col-md-5">
                  <p>
                    Client: 
                    <span
                      dangerouslySetInnerHTML={{ __html: acf.client }}
                    ></span>
                    <br /> Site area: 
                    <span
                      dangerouslySetInnerHTML={{
                        __html: acf.site_area
                          .replace(/m2/g, " ")
                          .replace(/ha/g, " "),
                      }}
                    ></span>
                    {acf.site_area.includes("m2") ? (
                      <React.Fragment>
                        m<sup>2</sup>
                      </React.Fragment>
                    ) : (
                      "ha"
                    )}
                    {acf.gfa !== "" ? (
                      <React.Fragment>
                        <br />
                        GFA:{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: acf.gfa
                              .replace(/m2/g, " ")
                              .replace(/ha/g, " "),
                          }}
                        ></span>
                        {acf.gfa.includes("m2") ? (
                          <React.Fragment>
                            m<sup>2</sup>
                          </React.Fragment>
                        ) : (
                          "ha"
                        )}
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                    <br />
                    Scope of Services:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: acf.scope_of_service,
                      }}
                    ></span>
                    <br />
                    Current Status:{" "}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: acf.current_status,
                      }}
                    ></span>
                    {acf.current_status === "Completed" ? (
                      ""
                    ) : (
                      <React.Fragment>
                        <br />
                        Completion date:{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html: acf.completion_date,
                          }}
                        ></span>
                      </React.Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Layout>
        </React.Fragment>
      )
    }
  } else {
    return (
      <React.Fragment>
        <SEO title="Loading" />
        <Layout>
          <div className="container my-5">
            <h1 className="text-center">Loading...</h1>
          </div>
        </Layout>
      </React.Fragment>
    )
  }
}
