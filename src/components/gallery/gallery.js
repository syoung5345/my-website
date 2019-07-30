import React from 'react';
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

//import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';

//const imgTitles = ['Book Covers', 'Travel Website', 'Zion Brochure', 'Cotopaxi Website','Bike Searcy Branding', 'PSA Child Hunger'];
const links = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6'];

const Gallery = (props) => (
            <div>
                <h2 className={styles.title}>Work</h2>
                <div className={styles.gallery}>
                    <Link to={links[0]} className={styles.item}>
                        <Img fluid={props.src.bookCover.childImageSharp.fluid} alt="book covers"/>
                    </Link>
                    <Link to={links[1]} className={styles.item}>
                        <Img fluid={props.src.nola.childImageSharp.fluid} alt="nola website"/>
                    </Link>
                    <Link to={links[2]} className={styles.item}>
                        <Img fluid={props.src.zion.childImageSharp.fluid} alt="book covers"/>
                    </Link>
                    <Link to={links[3]} className={styles.item}>
                        <Img fluid={props.src.mlb.childImageSharp.fluid} alt="mlb website"/>
                    </Link>
                    <Link to={links[4]} className={styles.item}>
                        <Img fluid={props.src.benny.childImageSharp.fluid} alt="bike searcy"/>
                    </Link>
                    <Link to={links[5]} className={styles.item}>
                        <Img fluid={props.src.uno.childImageSharp.fluid} alt="PSA child hunger"/>
                    </Link>
                </div>
            </div>
)

export default Gallery;
