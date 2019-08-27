import React from "react"
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <React.Fragment>
      <div className="bg-dark text-light py-3">
        <div className="container">
          <h6 className="text-center">ADL Partnership</h6>
          <ul className="footer-social-icons">
            <li>
              <a href="#">
                <FaFacebookSquare />
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <div className="my-3" />
          <p className="text-center text-muted small">
            ⓒ {new Date().getFullYear().toString()} ADL Partnership. All Rights
            Reserved. Built with{" "}
            <a
              href="https://sawirstudio.com"
              target="_blank"
              rel="nofollow noreferrer"
              className="text-muted text-decoration-none"
            >
              Sawir Studio
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Footer
