import React from 'react';
import { Link } from 'gatsby';

import styles from './project-nav.module.css';

const ProjectNav = props => (
    <nav>
        <Link to={props.prev} className={styles.navItem}>&laquo; {props.prev}</Link>
        <Link to={props.next} className={`${styles.navItem} ${styles.next}`}>{props.next} &raquo;</Link>
    </nav>
)

export default ProjectNav;