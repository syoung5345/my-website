import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const Work6 = props => (
    <Work 
        title="PSA: Child Hunger"
        description="By showing UNO playing cards that speak to hunger choices, child hunger is portrayed in a light-hearted, but striking way. UNO cards are familiar and have a sense of family. The use of older UNO cards will resonate with the main target audience, people ages 30-50. Uno is thought of as a game for younger kids, but can be played by kids of all ages. In the same way hunger affects kids of all ages. The second idea is to have these custom UNO cards printed out really big (1ft. By 2ft.) to show the breadth of the problem. These can be put in grocery stores, nursing homes, restaurants, and shopping areas. Their sheer size and familiarity in an unusual setting will attract attention and cause people to check them out."
        prev="work5"
        next="work1"
    >
        <Img fluid={props.data.cards.childImageSharp.fluid} />
        <Img fluid={props.data.box.childImageSharp.fluid} />
    </Work>
)

export default Work6;

export const work6Query = graphql `
query {
    cards: file(relativePath: { eq: "retro-uno-all.png" }) {
        ...fluidImage
    }
    box: file(relativePath: { eq: "uno-box-meals.png" }) {
        ...fluidImage
    }
}
`;