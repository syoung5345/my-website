import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './galleryItem.module.css';

const GalleryItem = props => (
    <Link 
        className={styles.item}
        to={props.to}>
            <img src={props.img} className={styles.grow}/>
            {/* <p className={styles.title}>{props.title} →</p> */}
            <p className={styles.view}>{props.title}</p>
   </Link>
)

export default GalleryItem;