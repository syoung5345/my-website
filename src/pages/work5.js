import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work5 = props => (
    <Work 
        title="Bike Searcy"
        description="This project was a collaboration. My team consisted of Kaylee Lockenour, Haydin Hall, and Sydney Duckels, and myself. The goal was to create a logo and brand identity, way finding, ads, and event promotions for biking in the city of Searcy, AR. I worked on the logo, way finding, and some of the ads. We brainstormed our ideas together and then divded out the work."
        prev="work4"
        next="work6"
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