import React from 'react';

import styles from './downArrow.module.css';

const DownArrow = props => (
    <a href={`/#${props.to}`} className={styles.arrow}></a>
)

export default DownArrow;