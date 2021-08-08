import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { MdMenu, MdSearch } from "react-icons/md"
import { NavDropdown } from "react-bootstrap"
import { navigate } from "@reach/router"

const Navbar = props => {
  const [openCollapsedMenu, setOpenCollapsedMenu] = useState(false)
  const [search, setSearch] = useState("")
  function searchIt(e) {
    e.preventDefault()
    navigate(`/search?s=${search}`)
    window.location.reload()
  }
  const { logo } = useStaticQuery(graphql`{
  logo: file(relativePath: {eq: "ADL-icon.png"}) {
    childImageSharp {
      gatsbyImageData(height: 30, layout: FIXED)
    }
  }
}
`)
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <Link to="/" className="navbar-brand">
            <GatsbyImage image={logo.childImageSharp.gatsbyImageData} alt="ADL Logo" />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setOpenCollapsedMenu(!openCollapsedMenu)}
          >
            <MdMenu size={"2rem"} color={"#AAAAAA"} />
          </button>
          <div
            className={`collapse navbar-collapse bg-white ${openCollapsedMenu &&
              `show`}`}
          >
            <ul className={`navbar-nav mr-auto text-uppercase align-items-end`}>
              <li className="nav-item dropdown ">
                <Link
                  to="/projects"
                  className="nav-link dropdown-toggle"
                  activeClassName="active dropdown-toggle"
                >
                  Projects
                </Link>
                <div className="dropdown-menu shadow">
                  <Link className="dropdown-item" to="/projects">
                    All
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "architectural" }}
                  >
                    Architecture
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "master plan" }}
                  >
                    Master Plan
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "mixed-use" }}
                  >
                    Mixed-Use Development
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "office" }}
                  >
                    Office
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "residential" }}
                  >
                    Residential
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "retail" }}
                  >
                    Retail
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "transit oriented development" }}
                  >
                    Transit Oriented Development
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projects"
                    state={{ tag: "hospitality" }}
                  >
                    Hospitality
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className="nav-link"
                  activeClassName="active"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className="nav-link"
                  activeClassName="active"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/people"
                  className="nav-link"
                  activeClassName="active"
                >
                  People
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link" activeClassName="active">
                  News
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
            <form
              className="form-inline my-2 my-lg-0 justify-content-end"
              onSubmit={searchIt}
            >
              <input
                className="form-control mr-sm-2 search-input"
                type="search"
                placeholder="Search in ADL"
                onChange={e => setSearch(e.target.value)}
              />
              <button className="btn my-2 my-sm-0 p-0" type="submit">
                <MdSearch size={"1.5rem"} />
              </button>
            </form>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar
