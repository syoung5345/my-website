import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "Nike Corporate Social Responsibility Poster Series",
    date: "November 2019",
    type: "School project",
    overview: "Corporate Social Responsibility or CSR is how companies show that they are doing good in the community.",
    challenge: "How to design a CSR poster series to be different from what Nike has already done, but still in the realm of what they would actually do.",
    goal: "Design a CSR poster series that promotes a new fictional way that Nike is helping in the community.",
    solution: "Since Nike is geared toward athletes, I made the poster series to promote exercise in the community and show how Nike is helping other businesses that promote being active.",
    deliverables: ["Poster Series"],
    prev: "",
    next: ""
}

const csr = props => (
    <Work info={info}>
        <section className={styles.description}>
            <p>First concepts and designs:</p>
            <div className={styles.img}>
                <Img  fluid={props.data.csr1.childImageSharp.fluid} />
                <Img  fluid={props.data.csr2.childImageSharp.fluid} />
                <Img  fluid={props.data.csr3.childImageSharp.fluid} />
                <Img  fluid={props.data.csr4.childImageSharp.fluid} />
                <Img  fluid={props.data.csr5.childImageSharp.fluid} />
            </div>

            <div style={{ 'marginTop': '3em'}}>
                <h2>Final poster series</h2>
            </div>
            <Img  fluid={props.data.csrPoster1.childImageSharp.fluid} />
            <Img  fluid={props.data.csrPoster2.childImageSharp.fluid} />
            <Img  fluid={props.data.csrPoster3.childImageSharp.fluid} />
        </section>
    </Work>
)

export default csr;

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
    csr1: file(relativePath: { eq: "csr-process-1.png" }) {
        ...fluidImage
    }
    csr2: file(relativePath: { eq: "csr-process-2.png" }) {
        ...fluidImage
    }
    csr3: file(relativePath: { eq: "csr-process-3.jpg" }) {
        ...fluidImage
    }
    csr4: file(relativePath: { eq: "csr-process-4.png" }) {
        ...fluidImage
    }
    csr5: file(relativePath: { eq: "csr-process-5.png" }) {
        ...fluidImage
    }

    csrPoster1: file(relativePath: { eq: "csr-1.png" }) {
        ...fluidImage
    }
    csrPoster2: file(relativePath: { eq: "csr-2.png" }) {
        ...fluidImage
    }
    csrPoster3: file(relativePath: { eq: "csr-3.png" }) {
        ...fluidImage
    }
}
`;