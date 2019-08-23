import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work4 = props => (
    <Work 
        title="Cotopaxi Website"
        description="This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away."
        prev="work3"
        next="work5"
    >
        <Img fluid={props.data.home.childImageSharp.fluid} />
        <Img fluid={props.data.libre.childImageSharp.fluid} />
        <Img fluid={props.data.libreDetails.childImageSharp.fluid} />
    </Work>
)

export default Work4;

export const work4Query = graphql `
query {
    home: file(relativePath: { eq: "cotopaxi-home.png" }) {
        ...fluidImage
    }
    libre: file(relativePath: { eq: "libre.png" }) {
        ...fluidImage
    }
    libreDetails: file(relativePath: { eq: "libre-details.png" }) {
        ...fluidImage
    }
}`;