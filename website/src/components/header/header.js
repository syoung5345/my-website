import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from '../logo/logo';
import "./header.css";

const Header = ({ siteTitle }) => (
  <nav className="navbar">
    <Link to="/">
      <Logo width="50" height="50" />
    </Link>
    <Link to="/#about" className="nav-item">About</Link>
    <Link to="/#work" className="nav-item">Work</Link>
    <Link to="/#contact" className="nav-item">Contact</Link>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
