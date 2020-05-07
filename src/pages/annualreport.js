import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "Nike Annual Report",
    date: "November 2019",
    type: "School project rebrand",
    overview: "For this project I chose Nike because it fit all the requirements and I was interesting in learning more about the brand.",
    challenge: "How to redesign the annual report while staying within the Nike styleguide? It needs to look like Nike, but also push the limits of what they normally do.",
    goal: "Redesign Nike's annual report",
    solution: "I embraced Nike's bold and athletic style by employing strong contrast with black and white as well as using big, captivating images. These things empasize Nike's style and push it farther by conveying a dynamic and active mood.",
    deliverables: ["Annual Report bound book"],
    prev: "",
    next: ""
}

const AnnualReport = props => (
    <Work info={info}>
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