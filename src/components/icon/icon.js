import React from 'react';

import styles from './icon.module.css';

const Icon = props => (
    <a href={props.href} target="_blank" className={styles.icon}>
        {props.children}
    </a>
)

export default Icon;