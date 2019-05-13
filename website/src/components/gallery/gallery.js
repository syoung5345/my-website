import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';

import bookCovers from '../../images/book-mockup-into-the-air.png';
import NOLA from '../../images/laptop-NOLA.png';
import Zion from '../../images/zion-pro-bono-front.jpg';
import Cotopaxi from '../../images/home-hero.png';
import BikeSearcy from '../../images/Benny-ad-1.png';
import PSA from '../../images/uno-box-meals.png';

const images = [{img: bookCovers, title: 'Book Covers'}, {img: NOLA, title: 'Travel Website'}, 
    {img: Zion, title: 'Zion Brochure'}, {img: Cotopaxi, title: 'Cotopaxi Website'},
    {img: BikeSearcy, title: 'Bike Searcy Branding'}, {img: PSA, title: 'PSA Child Hunger'}];

const Gallery = props => (
    <div>
        <h1 className={styles.title}>Work</h1>
            <StaticQuery 
                query={graphql `
                query {
                    bookCovers: file(relativePath: { eq: "book-mockup-into-the-air.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    nola: file(relativePath: { eq: "laptop-NOLA.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    zion: file(relativePath: { eq: "zion-pro-bono-front.jpg" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    cotopaxi: file(relativePath: { eq: "home-hero.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    bikeSearcy: file(relativePath: { eq: "Benny-ad-1.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    psa: file(relativePath: { eq: "uno-box-meals.png" }) {
                        childImageSharp {
                            fluid(maxWidth: 1000) {
                              ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }`}
                render={data => (
                    <div className={styles.Gallery}>
                        <Link 
                            className={styles.item}
                            to={`work1`}>
                            <Img fluid={data.bookCovers.childImageSharp.fluid} />
                            <p className={styles.view}>Book Covers</p>
                        </Link>
                        <Link 
                            className={styles.item}
                            to={`work2`}>
                            <Img fluid={data.nola.childImageSharp.fluid} />
                            <p className={styles.view}>Travel Website</p>
                        </Link>
                        <Link 
                            className={styles.item}
                            to={`work3`}>
                            <Img fluid={data.zion.childImageSharp.fluid} />
                            <p className={styles.view}>Zion Brochure</p>
                        </Link>
                        <Link 
                            className={styles.item}
                            to={`work4`}>
                            <Img fluid={data.cotopaxi.childImageSharp.fluid} />
                            <p className={styles.view}>Cotopaxi Website</p>
                        </Link>
                        <Link 
                            className={styles.item}
                            to={`work5`}>
                            <Img fluid={data.bikeSearcy.childImageSharp.fluid} />
                            <p className={styles.view}>Bike Searcy Branding</p>
                        </Link>
                        <Link 
                            className={styles.item}
                            to={`work6`}>
                            <Img fluid={data.psa.childImageSharp.fluid} />
                            <p className={styles.view}>PSA-Child Hunger</p>
                        </Link>
                    </div>
                )}
            />
    </div>
)

export default Gallery;