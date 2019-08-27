import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div style={{ height: "64px" }} />
        {children}
        <div className="flex-grow-1" />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
