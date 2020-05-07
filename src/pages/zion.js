import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const info = {
    title: "Zion Brochure",
    date: "August 2018",
    type: "School project",
    overview: "Zion is a rock climbing and event center in Searcy, AR. This project was done pro bono. So, what better business to choose than a non-profit?",
    challenge: "How to design a brochure that fits in with the rock climbing vibes but still communicates the information clearly and effectivly.",
    goal: "Design a brochure for Zion that promotes and explains the outdoor trips that they provide to customers.",
    solution: "I used pictures from past outdoor climbing trips and an angled front cover to give more visual interest. For the information, I used a step-by-step approach to present the information clearly and succinctly.",
    deliverables: ["Brochure"],
    prev: "",
    next: ""
}

const Zion = props => (
    <Work info={info}>
        <Img fluid={props.data.front.childImageSharp.fluid} />
        <Img fluid={props.data.inside.childImageSharp.fluid} />
        <Img fluid={props.data.rightView.childImageSharp.fluid} />
        <Img fluid={props.data.leftView.childImageSharp.fluid} />
    </Work>
)

export default Zion;

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