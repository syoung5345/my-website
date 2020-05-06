import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import work1 from '../components/work/work1'
import styles from './index.module.css';

const Work1 = props => (
    <Work 
        title="Book Covers"
        description="The concept for these book covers was to combine nature with a man-made item used in each of the books. In all of these books, people are trying to overcome nature in one way or another. These covers are portraying this idea. The different items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story."
        prev="work6"
        next="work2"
    >
        {/* <work1 /> */}
        <section className={styles.container}>
            <Img className={styles.big} fluid={props.data.Book1.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.Book2.childImageSharp.fluid} />
            <Img className={styles.span2} fluid={props.data.Book2.childImageSharp.fluid} />
            <Img className={styles.long} fluid={props.data.Book3.childImageSharp.fluid} />
        </section>
    </Work>
)

export default Work1;

export const fluidImage = graphql `
fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const pageQuery = graphql `
query {
    Book1: file(relativePath: { eq: "book-mockup-into-thin-air.png" }) {
        ...fluidImage
    }
    Book2: file(relativePath: { eq: "book-mockup-into-the-wild.png" }) {
        ...fluidImage
    }
    Book3: file(relativePath: { eq: "book-mockup-eiger-dreams.png" }) {
        ...fluidImage
    }
}
`;