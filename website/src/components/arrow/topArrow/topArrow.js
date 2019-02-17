import React from 'react';

import styles from './topArrow.module.css';

const TopArrow = props => (
    <a href={`/#${props.to}`} className={styles.arrow}></a>
)

export default TopArrow;