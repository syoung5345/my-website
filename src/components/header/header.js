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

  //Adds an event listener when the component is mount.
  componentDidMount() {
    this.setState({prevScrollpos: window.pageXOffset});
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
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
      <nav className={`navbar ${this.state.visible ? '' : 'navbar--hidden'}`}>
        <Link to="/#about" className="link">About</Link>
        <Link to="/#work" className="link">Work</Link>
        <Link to="/#contact" className="link">Contact</Link>
      </nav>
    )
  }
}

// const Header = ({ siteTitle }) => (
//   <nav className="navbar">
//     <Link to="/#work" className="link">Work</Link>
//     <Link to="/#contact" className="link">Contact</Link>
//   </nav>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
