import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import work1 from '../components/work/work1'
import styles from './index.module.css';

const AnnualReport = props => (
    <Work 
        title="Nike Annual Report"
        description="The concept for these book covers was to combine nature with a man-made item used in each of the books. In all of these books, people are trying to overcome nature in one way or another. These covers are portraying this idea. The different items represent the people in each story. It appears as though the man-made items are overpowering the elements of nature because of their size, or are they? That is the question that the reader has to decide for each story."
        prev="work6"
        next="work2"
    >
        {/* <section className={styles.container}> */}
            {/* <Img className={styles.big} fluid={props.data.ar1.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.ar4.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.ar3.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.arCover.childImageSharp.fluid} />
            <Img className={styles.big} fluid={props.data.ar2.childImageSharp.fluid} /> */}

            <Img  fluid={props.data.arCover.childImageSharp.fluid} />
            <Img  fluid={props.data.ar1.childImageSharp.fluid} />
            <Img  fluid={props.data.ar2.childImageSharp.fluid} />
            <Img  fluid={props.data.ar3.childImageSharp.fluid} />
            <Img  fluid={props.data.ar4.childImageSharp.fluid} />
            <Img  fluid={props.data.ar5.childImageSharp.fluid} />
        {/* </section> */}
    </Work>
)

export default AnnualReport;

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
    arCover: file(relativePath: { eq: "ar-cover.jpg" }) {
        ...fluidImage
    }
    ar1: file(relativePath: { eq: "ar-mockup-1.jpg" }) {
        ...fluidImage
    }
    ar2: file(relativePath: { eq: "ar-mockup-2.jpg" }) {
        ...fluidImage
    }
    ar3: file(relativePath: { eq: "ar-mockup-3.jpg" }) {
        ...fluidImage
    }
    ar4: file(relativePath: { eq: "ar-letter.jpg" }) {
        ...fluidImage
    }
    ar5: file(relativePath: { eq: "ar-bs.jpg" }) {
        ...fluidImage
    }
}
`;