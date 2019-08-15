import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from '../logo/logo';
import "./header.css";

// let prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   let currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     const navbar = document.querySelector(".navbar");
//     if (navbar != null) {
//       navbar.style.opacity = 1;
//     }
//   } else {
//     const navbar = document.querySelector(".navbar");
//     if (navbar != null) {
//       navbar.style.opacity = 0;
//     }
//   }
//   prevScrollpos = currentScrollPos;
// } 

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    {/* <Link to="/">
      <Logo width="50" height="50" />
    </Link> */}
    <Link to="/#about" className="link">About</Link>
    <Link to="/#work" className="link">Work</Link>
    <Link to="/#contact" className="link">Contact</Link>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
