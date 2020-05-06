import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work5 = props => (
    <Work 
        title="Bike Searcy"
        description="This project was a collaboration. My team consisted of Kaylee Lockenour, Haydin Hall, and Sydney Duckels, and myself. The goal was to create a logo and brand identity, way finding, ads, and event promotions for biking in the city of Searcy, AR. I worked on the logo, way finding, and some of the ads. We brainstormed our ideas together and then divded out the work."

        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
    >
        <Img fluid={props.data.stickers.childImageSharp.fluid} />
        <Img fluid={props.data.ads.childImageSharp.fluid} />
    </Work>
)

export default Work5;

export const work5Query = graphql `
query {
    stickers: file(relativePath: { eq: "Benny-sticker-mockup.png" }) {
        ...fluidImage
    }
    ads: file(relativePath: { eq: "Benny-ads.png" }) {
        ...fluidImage
    }
}
`;