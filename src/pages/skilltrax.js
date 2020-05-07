import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work'
import styles from './index.module.css';

const info = {
    title: "SkillTrax website",
    date: "Feburary 2019",
    type: "School project rebrand",
    overview: "SkillTrax is an internal website for InfoWorks, a software consulting company, in Nashville, TN. I interned at InfoWorks in the summer of 2019. SkillTrax is an application to track the skills and certifications of employees within the company. It is used to help assign consultants to projects.",
    challenge: "Learning how to use new technologies to develop the website and implement the design into it.",
    goal: "Redesign the existing site and develop version 1 of the site.",
    solution: "Lots of hard work and a summer of learning new things.",
    deliverables: ["Website"],
    prev: "",
    next: ""
}

const Skilltrax = props => (
    <Work info={info}>
        <section>
            <Img  fluid={props.data.skilltrax1.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax2.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax3.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax4.childImageSharp.fluid} />
        </section>
    </Work>
)

export default Skilltrax;

export const fluidImage = graphql `
fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
}
`;

export const pageQuery = graphql `
query {
    skilltrax1: file(relativePath: { eq: "skilltrax-1.png" }) {
        ...fluidImage
    }
    skilltrax2: file(relativePath: { eq: "skilltrax-2.png" }) {
        ...fluidImage
    }
    skilltrax3: file(relativePath: { eq: "skilltrax-3.png" }) {
        ...fluidImage
    }
    skilltrax4: file(relativePath: { eq: "skilltrax-4.png" }) {
        ...fluidImage
    }
}
`;