import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work3 = props => (
    <Work 
        title="Zion Brochure"
        description="This brochure promotes and informs of the outdoor climbing trips that Zion will be hosting in the near future. These trips will allow people to learn “the ropes” of climbing outdoors."
       
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
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