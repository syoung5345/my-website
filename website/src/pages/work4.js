import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import styles from './index.module.css';

import home from '../images/cotopaxi-home.png';
import libre from '../images/libre.png';
import libreDetails from '../images/libre-details.png';

const Work3 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Cotopaxi Website</h1>
            <p>
                This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away.
            </p>
            <img src={home} alt="home"/>
            <img src={libre}  alt="libre"/>
            <img src={libreDetails}  alt="libre details"/>
        </div>
)

export default Work3;