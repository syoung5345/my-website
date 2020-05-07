import React from 'react';
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

//import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';
// import styles from './flexGallery.module.css';
// import './card.css';

//const imgTitles = ['Book Covers', 'Travel Website', 'Zion Brochure', 'Cotopaxi Website','Bike Searcy Branding', 'PSA Child Hunger'];
const links = ['bookcovers', 'nola', 'zion', 'cotopaxi', 'hungerpsa', 'cfi', 'annualreport', 'skilltrax'];

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

                    <Link to="skilltrax" className={styles.item}>
                        <Img fluid={props.img.skilltrax.childImageSharp.fluid} alt="SkillTrax website"/>
                    </Link>
                    <Link to="annualreport" className={styles.item}>
                        <Img fluid={props.img.ar.childImageSharp.fluid} alt="annual report"/>
                    </Link>
                    <Link to="bookcovers" className={styles.item}>
                        <Img fluid={props.img.bookCover.childImageSharp.fluid} alt="book covers"/>
                    </Link>
                    <Link to="csr" className={styles.item}>
                        <Img fluid={props.img.csr.childImageSharp.fluid} alt="Corporate Social Responsibility Poster"/>
                    </Link>
                    <Link to="cotopaxi" className={styles.item}>
                        <Img fluid={props.img.cotopaxi.childImageSharp.fluid} alt="Cotopaxi website"/>
                    </Link>
                    <Link to="zion" className={styles.item}>
                        <Img fluid={props.img.zion.childImageSharp.fluid} alt="zion brochure"/>
                    </Link>
                    <Link to="nola" className={styles.item}>
                        <Img fluid={props.img.nola.childImageSharp.fluid} alt="nola website"/>
                    </Link>
                    <Link to="hungerpsa" className={styles.item}>
                        <Img fluid={props.img.uno.childImageSharp.fluid} alt="PSA child hunger"/>
                    </Link>
                </div>
            </div>
)

export default Gallery;
