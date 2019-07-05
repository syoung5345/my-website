import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Work2 = props => (
        <div className={styles.work}>
            <h1>Travel Website-NOLA</h1>
            <p>
            This website is a redesign of the New Orleans travel website. I redesigned the tag lines, visuals, and overall brand of the site.
            </p>
            <Img fluid={props.data.home.childImageSharp.fluid} />
            <Img fluid={props.data.explore.childImageSharp.fluid} />
            <Img fluid={props.data.nightlife.childImageSharp.fluid} />
        </div>
)

export default Work2;

export const work3Query = graphql `
query {
    home: file(relativePath: { eq: "NOLA-home.png" }) {
        ...fluidImage
    }
    explore: file(relativePath: { eq: "NOLA-explore.png" }) {
        ...fluidImage
    }
    nightlife: file(relativePath: { eq: "NOLA-nightlife.png" }) {
        ...fluidImage
    }
}
`;