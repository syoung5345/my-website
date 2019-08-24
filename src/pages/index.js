//1. back button goes to home on pages 
//2. programatically create pages from data
//3. update card styles
//4. update contact styling
//5. remove white background from pictures
//6. add layout for pages 
//7. captions for images/more explanation about project
//8. make card grid have no horizontal scroll on mobile

import React from "react";
import { graphql } from 'gatsby';

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Title from "../components/title/title";
import Logo from '../components/logo/logo';
import Gallery from '../components/gallery/gallery';
import TopArrow from '../components/arrow/topArrow/topArrow';
import DownArrow from '../components/arrow/downArrow/downArrow';
import Contact from '../components/contact/contact';

import styles from './index.module.css';

const IndexPage = (props) => (
  <Layout id="home">
    <SEO 
      title="Home" 
      keywords={[
        `gatsby`, 
        `application`, 
        `react`, 
        `Samuel Young`, 
        `Developer`,
        'Designer',
        'Adventurer',
        'Graphic Design',
        'Portfolio',
        'Web Design',
        'Web Development'
      ]} />
    <section className={styles.header} style={{'marginTop': 0}}>
      <Logo width="200" height="200" />
      <Title />
      <DownArrow to="work" />
    </section>
    <section id="work">
      <Gallery src={props.data} />
    </section>
    <section id="contact" className={styles.contact}>
      <Contact />
    </section>
    <TopArrow />
  </Layout>
)

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
    bookCover: file(relativePath: { eq: "book-mockup-into-thin-air.png" }) {
        ...fluidImages
    }
    nola: file(relativePath: { eq: "laptop-NOLA.png" }) {
        ...fluidImages
    }
    zion: file(relativePath: { eq: "zion-front.jpg" }) {
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
