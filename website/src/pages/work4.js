import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Work4 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Cotopaxi Website</h1>
            <p>
            This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away.
            </p>
            <Img fluid={props.data.home.childImageSharp.fluid} />
            <Img fluid={props.data.libre.childImageSharp.fluid} />
            <Img fluid={props.data.libreDetails.childImageSharp.fluid} />
        </div>
)

export default Work4;

export const fluidImage4 = graphql `
fragment fluidImage4 on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}`;

export const work4Query = graphql `
query {
    home: file(relativePath: { eq: "cotopaxi-home.png" }) {
        ...fluidImage4
    }
    libre: file(relativePath: { eq: "libre.png" }) {
        ...fluidImage4
    }
    libreDetails: file(relativePath: { eq: "libre-details.png" }) {
        ...fluidImage4
    }
}`;