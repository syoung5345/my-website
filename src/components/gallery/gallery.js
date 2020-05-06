import React from 'react';
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

//import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';
// import styles from './flexGallery.module.css';
// import './card.css';

//const imgTitles = ['Book Covers', 'Travel Website', 'Zion Brochure', 'Cotopaxi Website','Bike Searcy Branding', 'PSA Child Hunger'];
const links = ['bookcovers', 'work2', 'work3', 'work4', 'work5', 'work6', 'annualreport', 'skilltrax'];

const Gallery = (props) => (
            <div>
                <h2 className={styles.title}>Work</h2>

                <div className={styles.gallery}>

                    {/* <div className={styles.card}>
                        <div className={styles.header}>
                            <Link to={links[7]}>
                                <Img fluid={props.img.skilltrax.childImageSharp.fluid} alt="SkillTrax website"/>
                            </Link>
                        </div>
                        <div className={styles.header}>
                            Title of Project
                        </div>
                    </div> */}

                    <Link to={links[7]} className={styles.item}>
                        <Img fluid={props.img.skilltrax.childImageSharp.fluid} alt="SkillTrax website"/>
                    </Link>
                    <Link to={links[6]} className={styles.item}>
                        <Img fluid={props.img.ar.childImageSharp.fluid} alt="annual report"/>
                    </Link>
                    <Link to={links[0]} className={styles.item}>
                        <Img fluid={props.img.bookCover.childImageSharp.fluid} alt="book covers"/>
                    </Link>
                    <Link to={links[1]} className={styles.item}>
                        <Img fluid={props.img.nola.childImageSharp.fluid} alt="nola website"/>
                    </Link>
                    <Link to={links[2]} className={styles.item}>
                        <Img fluid={props.img.zion.childImageSharp.fluid} alt="zion brochure"/>
                    </Link>
                    <Link to={links[3]} className={styles.item}>
                        <Img fluid={props.img.mlb.childImageSharp.fluid} alt="mlb website"/>
                    </Link>
                    <Link to={links[4]} className={styles.item}>
                        <Img fluid={props.img.benny.childImageSharp.fluid} alt="bike searcy"/>
                    </Link>
                    <Link to={links[5]} className={styles.item}>
                        <Img fluid={props.img.uno.childImageSharp.fluid} alt="PSA child hunger"/>
                    </Link>
                </div>
            </div>
)

export default Gallery;
