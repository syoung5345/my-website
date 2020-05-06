import React from 'react';

import styles from './work.module.css';
import ProjectNav from '../project-nav/project-nav';

const Work = props => (
    <div className={styles.work}>
        <div className={styles.description}>
            <h1 className={styles.noSpace}>{props.title}</h1> 
            <p>{props.date}</p>
            <p><strong>Goal:</strong> {props.goal}</p>
            <p>
                <strong>Deliverables:</strong> 
                <ul>
                    {props.deliverables.map(item => 
                        <li>{item}</li>
                    )}
                </ul>
            </p>
            <p><strong>Outcome:</strong> {props.outcome}</p>
            <p><strong>Impact:</strong> {props.impact}</p>
        </div>
            {props.children}
        {/* <ProjectNav prev={props.prev} next={props.next} /> */}
    </div>
)

export default Work;