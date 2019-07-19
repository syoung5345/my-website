import React, { Component } from 'react';
import { useStaticQuery, StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import GalleryItem from './galleryItem/galleryItem';
import styles from './gallery.module.css';

const imgTitles = ['Book Covers', 'Travel Website', 'Zion Brochure', 'Cotopaxi Website','Bike Searcy Branding', 'PSA Child Hunger'];
const links = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6'];

const Gallery = (props) => (
            <div>
                <h2 className={styles.title}>Work</h2>
                <div className={styles.gallery}>
                    {/* {gallery} */}
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
    // <div>
    //     <h1 className={styles.title}>Work</h1>

    //         {pages.map(page => {
    //             return <div 
    //                         to={page.link}
    //                         key={page.link}>
    //                         <Img fluid={page.img} alt={page.title} />
    //                         {/* <p>{page.title}</p> */}
    //                 </div>
                
    //         })}

            {/* <StaticQuery 
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
            /> */}
//     </div>
// )

export default Gallery;

export const fluidImageGallery = graphql `
fragment fluidImageGallery on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const galleryQuery = graphql `
query {
    cards: file(relativePath: { eq: "retro-uno-all.png" }) {
        ...fluidImageGallery
    }
    box: file(relativePath: { eq: "uno-box-meals.png" }) {
        ...fluidImageGallery
    }
}
`;