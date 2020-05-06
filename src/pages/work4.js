import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work4 = props => (
    <Work 
        title="Cotopaxi Website"
        description="This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away."
        
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
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