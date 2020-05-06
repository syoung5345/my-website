import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const BookCovers = props => (
    <Work 
        title="Book Covers"
        description="The concept for these book covers was to combine nature with a man-made item used in each of the books. In all of these books, people are trying to overcome nature in one way or another. These covers are portraying this idea. The different items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story."
        
        title="Book Covers"
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
    >
        <section className={styles.container}>
            <Img className={styles.big} fluid={props.data.Book1.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.Book2.childImageSharp.fluid} />
            <Img className={styles.span2} fluid={props.data.Book2.childImageSharp.fluid} />
            <Img className={styles.long} fluid={props.data.Book3.childImageSharp.fluid} />
        </section>
    </Work>
)

export default BookCovers;

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