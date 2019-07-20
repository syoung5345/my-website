//http://squeamish-country.surge.sh/

import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Title from "../components/title/title";
import Logo from '../components/logo/logo';
import Gallery from '../components/gallery/gallery';
import DownArrow from '../components/arrow/downArrow/downArrow';
import TopArrow from '../components/arrow/topArrow/topArrow';
import Contact from '../components/contact/contact';

import styles from './index.module.css';

const IndexPage = (props) => {
  const images = [
    {title: 'Book Covers', link: 'work1'}, 
    {title: 'Travel Website', link: 'work2'}, 
    {title: 'Zion Brochure', link: 'work3'}, 
    {title: 'Cotopaxi Website', link: 'work4'},
    {title: 'Bike Searcy Branding', link: 'work5'}, 
    {title: 'PSA Child Hunger', link: 'work6'}
  ]


  return (
  <Layout id="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.header}>
      <Logo width="200" height="200" />
      <DownArrow to="about"/>
    </div>
    <div id="about" className={styles.about}>
      <Title />
      <DownArrow to="work"/>
    </div>
    <div id="work">
      <Gallery images={images} src={props.data} />
    </div>
    <div id="contact" className={styles.contact}>
      <Contact />
      <TopArrow />
    </div>
  </Layout>
)}

export default IndexPage;

export const fluidImages = graphql `
fragment fluidImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const pageQuery1 = graphql `
query {
    bookCover: file(relativePath: { eq: "book-mockup-into-the-air.png" }) {
        ...fluidImages
    }
    nola: file(relativePath: { eq: "laptop-NOLA.png" }) {
        ...fluidImages
    }
    zion: file(relativePath: { eq: "zion-front.JPG" }) {
      ...fluidImages
    }
    mlb: file(relativePath: { eq: "home-hero.png" }) {
      ...fluidImages
    }
    benny: file(relativePath: { eq: "Benny-ad-1.png" }) {
      ...fluidImages
    }
    uno: file(relativePath: { eq: "uno-box-meals.png" }) {
      ...fluidImages
    }
}
`;
