import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import work1 from '../components/work/work1'
import styles from './index.module.css';

const AnnualReport = props => (
    <Work 
        title="Nike Annual Report"
        goal="The goal of this project was to learn about a company and execute a series of projects for that company. I picked Nike because I wanted to learn more about it and felt it would challenge me."
        deliverables={["Annual Report bound book", "Corporate Social Responsibility(CSR) poster series", "Interactive version of the annual report"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
    >
        {/* <section className={styles.container}> */}
            {/* <Img className={styles.big} fluid={props.data.ar1.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.ar4.childImageSharp.fluid} />
            <Img className={styles.small} fluid={props.data.ar3.childImageSharp.fluid} />
            <Img className={styles.big} fluid={props.data.ar2.childImageSharp.fluid} /> */}
        {/* </section> */}

        <section>
            <Img  fluid={props.data.arCover.childImageSharp.fluid} />
            <Img  fluid={props.data.ar1.childImageSharp.fluid} />
            <Img  fluid={props.data.ar2.childImageSharp.fluid} />
            <Img  fluid={props.data.ar3.childImageSharp.fluid} />
            <Img  fluid={props.data.ar4.childImageSharp.fluid} />
            <Img  fluid={props.data.ar5.childImageSharp.fluid} />
        </section>
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