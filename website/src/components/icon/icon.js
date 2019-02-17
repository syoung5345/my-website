import React from 'react';

import styles from './icon.module.css';

const Icon = props => (
    <div className={styles.icon}>
        <i className={props.src}></i>
    </div>
)

export default Icon;