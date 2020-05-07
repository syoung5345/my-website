import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "Book Cover Series",
    date: "Feburary 2019",
    type: "School project rebrand",
    overview: "I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in like-minded readers.",
    challenge: "How to convey the essence of a book in just the cover? It must get the viewers attention immediately while simultaneously being abstract so that it is not too boring or obvious.",
    goal: "Redesign a book cover series that feels unified and shows the uniqueness of each book.",
    solution: "The concept for these book covers was to combine nature with a man-made item used in each of the books. In each of these books, people are trying to overcome nature. These covers are portraying this idea. The man-made items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story.",
    deliverables: ["Printed book cover series"],
    prev: "",
    next: ""
}

const BookCovers = props => (
    <Work info={info}>
        <section className={styles.container}>
            <Img className={styles.big} fluid={props.data.Book1.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.Book3.childImageSharp.fluid} />
            <Img className={styles.span2} fluid={props.data.Book2.childImageSharp.fluid} />
            <Img className={styles.long} fluid={props.data.Book2.childImageSharp.fluid} />
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