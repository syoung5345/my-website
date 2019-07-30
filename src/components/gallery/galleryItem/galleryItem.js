import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styles from './galleryItem.module.css';
import { Component } from 'react';

// class GalleryItem extends Component {
    
// }

const GalleryItem = props => (
    <div className={styles.item} to={props.to}>
        {/* <Img fluid={props.img.book.childImageSharp.fluid} className={styles.grow} alt={props.title} /> */}
        <p className={styles.view}>{props.title}</p>
   </div>
//     <Link 
//         className={styles.item}
//         to={props.to}>
//             <img src={props.img} className={styles.grow} alt={props.title} />
//             <p className={styles.view}>{props.title}</p>
//    </Link>
)

export default GalleryItem;