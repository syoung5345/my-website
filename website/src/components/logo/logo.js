import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../images/personal_brand_logo_black.svg';
import logo1 from '../../images/personal_brand_logo_white.svg';
import './logo.css';

const Logo = ({height, width}) => (
    <img 
        src={logo} 
        alt="logo" 
        height={height} 
        width={width} 
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
