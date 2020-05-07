import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';

const info = {
    title: "ew Orleans Travel Website",
    date: "October 2018",
    type: "School project rebrand",
    overview: "SkillTrax is an internal website for InfoWorks, a software consulting company, in Nashville, TN. I interned at InfoWorks in the summer of 2019. SkillTrax is an application to track the skills and certifications of employees within the company. It is used to help assign consultants to projects.",
    challenge: "Learning how to use new technologies to develop the website and implement the design into it.",
    goal: "Redesign the existing site and develop version 1 of the site.",
    solution: "Lots of hard work and a summer of learning new things.",
    deliverables: ["Website"],
    prev: "",
    next: ""
}

const Nola = props => (
    <Work info={info}
        title="New Orleans Travel Website"
        description="This website is a redesign of the New Orleans travel website. I redesigned the tag lines, visuals, and overall brand of the site."
        
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
    >
        <Img fluid={props.data.home.childImageSharp.fluid} />
        <Img fluid={props.data.explore.childImageSharp.fluid} />
        <Img fluid={props.data.nightlife.childImageSharp.fluid} />
    </Work>
)

export default Nola;

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