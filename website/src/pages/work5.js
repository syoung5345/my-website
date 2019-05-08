import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import styles from './index.module.css';

import stickers from '../images/Benny-sticker-mockup.png';
import ads from '../images/Benny-ads.png';

const Work5 = props => (
        <div className={styles.work}>
            <Link to="/#work">back</Link>
            <h1>Bike Searcy</h1>
            <p>
                 This project was a collaboration. My team consisted of Kaylee Lockenour, Haydin Hall, and Sydney Duckels, and myself. The goal was to create a logo and brand identity, way finding, ads, and event promotions for biking in the city of Searcy, AR. 
                 I worked on the logo, way finding, and some of the ads. We brainstormed our ideas together and then divded out the work.
            </p>
            <img src={stickers}  alt="stickers"/>
            <img src={ads}  alt="ads"/>
        </div>
)

export default Work5;