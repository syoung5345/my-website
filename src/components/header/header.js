import React, { Component, classnames } from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import Logo from '../logo/logo';
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
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

  // componentDidMount() {
  //   //this.prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     this.currentScrollPos = window.pageYOffset;
  //     if (this.prevScrollpos > this.currentScrollPos) {
  //       const navbar = document.querySelector(".navbar");
  //       if (navbar != null) {
  //         navbar.style.opacity = 1;
  //       }
  //     } else {
  //       const navbar = document.querySelector(".navbar");
  //       if (navbar != null) {
  //         navbar.style.opacity = 0;
  //       }
  //     }
  //     this.prevScrollpos = this.currentScrollPos;
  //   } 
  // }

  render() {
    return (
      <nav className={`navbar ${this.state.visible ? '' : 'navbar--hidden'}`}>
        {/* <Link to="/">
          <Logo width="50" height="50" />
        </Link> */}
        {/* <Link to="/#about" className="link">About</Link> */}
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
