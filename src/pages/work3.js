import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work3 = props => (
    <Work 
        title="Zion Brochure"
        description="This brochure promotes and informs of the outdoor climbing trips that Zion will be hosting in the near future. These trips will allow people to learn “the ropes” of climbing outdoors."
        prev="work2"
        next="work4"
    >
        <Img fluid={props.data.front.childImageSharp.fluid} />
        <Img fluid={props.data.inside.childImageSharp.fluid} />
        <Img fluid={props.data.rightView.childImageSharp.fluid} />
        <Img fluid={props.data.leftView.childImageSharp.fluid} />
    </Work>
)

export default Work3;

export const work3Query = graphql `
query {
    front: file(relativePath: { eq: "zion-front.jpg" }) {
        ...fluidImage
    }
    inside: file(relativePath: { eq: "zion-inside.jpg" }) {
        ...fluidImage
    }
    rightView: file(relativePath: { eq: "zion-right-view.jpg" }) {
        ...fluidImage
    }
    leftView: file(relativePath: { eq: "zion-left-view.jpg" }) {
        ...fluidImage
    }
}
`;