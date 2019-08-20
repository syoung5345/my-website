import React, { Component, classnames } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from '../logo/logo';
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: 0,
      visible: true
    };
  }

  //Adds an event listener when the component is mounted
  componentDidMount() {
    this.setState({prevScrollpos: window.pageXOffset});
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmounted
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <nav className={`navbar ${this.state.visible ? '' : 'navbar--hidden'} wrapper`}>
        <Link to="/#about" className={`link-underline link`}>About</Link>
        <Link to="/#work" className={`link-underline link`}>Work</Link>
        <Link to="/#contact" className={`link-underline link`}>Contact</Link>
      </nav>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
