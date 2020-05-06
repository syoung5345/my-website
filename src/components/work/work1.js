import React from 'react';

import styles from './work.module.css';
import ProjectNav from '../project-nav/project-nav';

const Work1 = props => (
    <div className={styles.work}>
        <div className={styles.title}>
            <h1>{props.title}</h1> 
            <p>{props.date}</p>
            <p><strong>Goal:</strong> {props.goal}</p>
            <p><strong>Services:</strong> {props.services}</p>
            <p><strong>Outcome:</strong> {props.outcome}</p>
            <p><strong>Impact:</strong> {props.impact}</p>
        </div>
            {props.children}
        <ProjectNav prev={props.prev} next={props.next} />
    </div>
)

export default Work1;