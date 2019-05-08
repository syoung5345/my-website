import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './galleryItem.module.css';

import intoThinAir from '../../../images/book-mockup-into-the-air.png';
import eigerDreams from '../../../images/book-mockup-eiger-dreams.png';
import intoTheWild from '../../../images/book-mockup-into-the-wild.png';

const GalleryItem = props => (
    <Link 
        className={styles.item}
        to={props.to}>
            <img src={props.img}/>
            <div className={styles.item__overlay}>
                <div>View →</div>
            </div>
   </Link>
)

export default GalleryItem;