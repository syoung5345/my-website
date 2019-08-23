import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work2 = props => (
    <Work 
        title="New Orleans Travel Website"
        description="This website is a redesign of the New Orleans travel website. I redesigned the tag lines, visuals, and overall brand of the site."
        prev="work1"
        next="work3"
    >
        <Img fluid={props.data.home.childImageSharp.fluid} />
        <Img fluid={props.data.explore.childImageSharp.fluid} />
        <Img fluid={props.data.nightlife.childImageSharp.fluid} />
    </Work>
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