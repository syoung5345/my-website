import React from 'react';
import { Link } from 'gatsby';

import styles from './topArrow.module.css';

const TopArrow = props => (
    <Link to="/" className={styles.arrow}></Link>
)

export default TopArrow;