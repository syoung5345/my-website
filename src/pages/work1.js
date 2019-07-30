import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Work1 = props => (
        <div className={styles.work}>
            <h1>Book Covers</h1>
            <p>
            The concept for these book covers was to combine nature with a man-made item used in each of the books. In all of these books, people are trying to overcome nature in one way or another. These covers are portraying this idea. The different items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story.
            </p>
            <Img fluid={props.data.Book1.childImageSharp.fluid} />
            <Img fluid={props.data.Book2.childImageSharp.fluid} />
            <Img fluid={props.data.Book3.childImageSharp.fluid} />
        </div>
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