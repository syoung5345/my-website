import React from 'react';
import { Link } from 'gatsby';

import styles from './index.module.css';

import intoThinAir from '../images/book-mockup-into-the-air.png';
import eigerDreams from '../images/book-mockup-eiger-dreams.png';
import intoTheWild from '../images/book-mockup-into-the-wild.png';

const Work1 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Book Covers</h1>
            <p>
            The concept for these book covers was to combine nature with a man-made item used in each of the books. In all of these books, people are trying to overcome nature in one way or another. These covers are portraying this idea. The different items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story.
            </p>
            <img src={intoThinAir} alt="book cover"/>
            <img src={intoTheWild} alt="book cover1"/>
            <img src={eigerDreams} alt="book cover2"/>
        </div>
)

export default Work1;