import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from '../components/logo/logo';

const Header = ({ siteTitle }) => (
  <header>
    <Link to="/">
      <Logo width="50" height="50" />
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
