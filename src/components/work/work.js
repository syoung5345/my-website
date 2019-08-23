import React from 'react';

import styles from './work.module.css';
import ProjectNav from '../project-nav/project-nav';

const Work = props => (
    <div className={styles.work}>
        <div className={styles.title}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
            {props.children}
        <ProjectNav prev={props.prev} next={props.next} />
    </div>
)

export default Work;