import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Work5 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Bike Searcy</h1>
            <p>
            This project was a collaboration. My team consisted of Kaylee Lockenour, Haydin Hall, and Sydney Duckels, and myself. The goal was to create a logo and brand identity, way finding, ads, and event promotions for biking in the city of Searcy, AR. 
                 I worked on the logo, way finding, and some of the ads. We brainstormed our ideas together and then divded out the work.
            </p>
            <Img fluid={props.data.stickers.childImageSharp.fluid} />
            <Img fluid={props.data.ads.childImageSharp.fluid} />
        </div>
)

export default Work5;

export const fluidImage5 = graphql `
fragment fluidImage5 on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const work4Query = graphql `
query {
    stickers: file(relativePath: { eq: "Benny-sticker-mockup.png" }) {
        ...fluidImage5
    }
    ads: file(relativePath: { eq: "Benny-ads.png" }) {
        ...fluidImage5
    }
}
`;