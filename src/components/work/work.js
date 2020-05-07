import React from 'react';

import styles from './work.module.css';
import ProjectNav from '../project-nav/project-nav';

const Work = props => (
    <div className={styles.work}>
        <div className={styles.description}>
            <h1 className={styles.noSpace}>{props.info.title}</h1> 
            <p>{props.info.date} | {props.info.type}</p>
            <p><strong>Overview:</strong> {props.info.overview}</p>
            <p><strong>Challenge:</strong> {props.info.challenge}</p>
            <p><strong>Goal:</strong> {props.info.goal}</p>
            <p><strong>Solution:</strong> {props.info.solution}</p>
            <p>
                <strong>Deliverables:</strong> 
                <ul>
                    {props.info.deliverables.map(item => 
                        <li>{item}</li>
                    )}
                </ul>
            </p>
        </div>
            {props.children}
        <div className={styles.next}>
            <ProjectNav prev={props.prev} next={props.next} />
        </div>
    </div>
)

export default Work;