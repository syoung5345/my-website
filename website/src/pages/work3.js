import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import styles from './index.module.css';

import front from '../images/zion-front.jpg';
import inside from '../images/zion-inside.jpg';
import rightView from '../images/zion-right-view.jpg';
import leftView from '../images/zion-left-view.jpg'

const Work3 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Zion Brochure</h1>
            <p>
            This brochure promotes and informs of the outdoor climbing trips that Zion will be hosting in the near future. These trips will allow people to learn “the ropes” of climbing outdoors.
            </p>
            <img src={front} alt="front"/>
            <img src={inside} alt="inside"/>
            <img src={rightView} alt="right view"/>
            <img src={leftView} alt="left view"/>
        </div>
)

export default Work3;