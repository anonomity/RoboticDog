import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg";
import logoText from "../images/logoTitle.svg"
import "./lessonBox.scss"
const Header = ({ siteTitle }) => (
  <header className= "header" >
    <nav className="nav">
      <img src={logo} alt="RoboticDog Logo"  className="logo" />
      {/* {siteTitle} */}
      <img src={logoText} alt="logo name" className="logoText" />

      <Link className="nav-item" to="/">
          Lessons
      </Link>
      <Link className="nav-item" to="/tags">
          Tags
      </Link>


    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
