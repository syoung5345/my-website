import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/logo-gray.svg';
import './logo.css';

const Logo = ({height, width}) => (
    <img 
        src={logo} 
        alt="logo" 
        height="150em"
        width="150em"
        className="logo" />
);

Logo.propTypes = {
    width: PropTypes.string,
    hight: PropTypes.string
}
  
Logo.defaultProps = {
    width: 100,
    height: 100
}

export default Logo;
