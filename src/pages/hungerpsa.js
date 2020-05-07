import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const info = {
    title: "Nike Corporate Social Responsibility Poster Series",
    date: "November 2019",
    type: "School project",
    overview: "Corporate Social Responsibility or CSR is how companies show that they are doing good in the community.",
    challenge: "How to design a CSR poster series to be different from what Nike has already done, but still in the realm of what they would actually do.",
    goal: "Design a CSR poster series that promotes a new fictional way that Nike is helping in the community.",
    solution: "Since Nike is geared toward athletes, I made the poster series to promote exercise in the community and show how Nike is helping other businesses that promote being active.",
    deliverables: ["Poster Series"],
    prev: "",
    next: ""
}

const HungerPsa = props => (
    <Work info={info}
        title="PSA: Child Hunger"
        description="By showing UNO playing cards that speak to hunger choices, child hunger is portrayed in a light-hearted, but striking way. UNO cards are familiar and have a sense of family. The use of older UNO cards will resonate with the main target audience, people ages 30-50. Uno is thought of as a game for younger kids, but can be played by kids of all ages. In the same way hunger affects kids of all ages. The second idea is to have these custom UNO cards printed out really big (1ft. By 2ft.) to show the breadth of the problem. These can be put in grocery stores, nursing homes, restaurants, and shopping areas. Their sheer size and familiarity in an unusual setting will attract attention and cause people to check them out."
        
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
    >
        <Img fluid={props.data.cards.childImageSharp.fluid} />
        <Img fluid={props.data.box.childImageSharp.fluid} />
    </Work>
)

export default HungerPsa;

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