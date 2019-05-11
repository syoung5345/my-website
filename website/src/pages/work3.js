import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './index.module.css';

const Work3 = props => (
        <div className={styles.work}>
            <div>
                <Link to="/#work" className={styles.back}>back</Link>
            </div>
            <h1>Zion Brochure</h1>
            <p>
            This brochure promotes and informs of the outdoor climbing trips that Zion will be hosting in the near future. These trips will allow people to learn “the ropes” of climbing outdoors.
            </p>
            <Img fluid={props.data.front.childImageSharp.fluid} />
            <Img fluid={props.data.inside.childImageSharp.fluid} />
            <Img fluid={props.data.rightView.childImageSharp.fluid} />
            <Img fluid={props.data.leftView.childImageSharp.fluid} />
        </div>
)

export default Work3;

export const fluidImage3 = graphql `
fragment fluidImage3 on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const work3Query = graphql `
query {
    front: file(relativePath: { eq: "zion-front.JPG" }) {
        ...fluidImage3
    }
    inside: file(relativePath: { eq: "zion-inside.JPG" }) {
        ...fluidImage3
    }
    rightView: file(relativePath: { eq: "zion-right-view.JPG" }) {
        ...fluidImage3
    }
    leftView: file(relativePath: { eq: "zion-left-view.JPG" }) {
        ...fluidImage3
    }
}
`;