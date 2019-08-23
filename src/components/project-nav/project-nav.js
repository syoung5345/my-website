import React from 'react';
import { Link } from 'gatsby';

import styles from './project-nav.module.css';

const ProjectNav = props => (
    <section>
        <Link to={props.prev} className={styles.navItem}>&laquo; prev project</Link>
        <Link to={props.next} className={`${styles.navItem} ${styles.next}`}>next project &raquo;</Link>
    </section>
)

export default ProjectNav;