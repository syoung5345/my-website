import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import styles from './index.module.css';

import home from '../images/NOLA-home.png';
import explore from '../images/NOLA-explore.png';
import nightlife from '../images/NOLA-nightlife.png';

const Work2 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Travel Website-NOLA</h1>
            <p>
              This website is a redesign of the New Orleans travel website. I redesigned the tag lines, visuals, and overall brand of the site.
            </p>
            <img src={home} height="80%" width="80%" alt="NOLA home page"/>
            <img src={explore} height="80%" width="80%" alt="NOLA explore"/>
            <img src={nightlife} height="80%" width="80%" alt="NOLA Nightlife"/>
        </div>
)

export default Work2;