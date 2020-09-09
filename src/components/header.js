import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.svg";
import logoText from "../images/logoTitle.svg"
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#296d98`,
      marginBottom: `0.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.4rem `,
        display: `flex`,
        justifyContent: 'flex-start',
        flexDirection: `row`,
        alignItems: `center`,
        alignContent: `center`,

      }}
    >



      <img src={logo} alt="RoboticDog Logo" style={{ height: `50px` }} />
      {/* {siteTitle} */}
      <img src={logoText} alt="logo name" style={{ marginLeft: `20px`, marginTop: `10px`, height: `50px` }} />

      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`, 
          fontWeight: 700, 
          marginLeft: '30px'
        }}
      >Home</Link>
      <Link style={{ color: 'white', fontWeight: 700, marginLeft: '30px', textDecoration: 'none' }} to="/page-2/">
       
          Lessons
  

      </Link>


    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
