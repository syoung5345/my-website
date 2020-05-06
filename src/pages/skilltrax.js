import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

// import Work from '../components/work/work';
import Work1 from '../components/work/work1'
import styles from './index.module.css';

const Skilltrax = props => (
    <Work1
        title="SkillTrax website"
        goal="SkillTrax is an internal website for InfoWorks, a software consulting company, in Nashville, TN. This is the company that I interned for in the summer of 2019. SkillTrax is an application to track the skills and certifications of employees withing the company. Its intended use is for assigning consultants to projects. The goal was to redesign the existing site and implement features to improve the application further."
        services="Redesigning and programming of the website"
        outcome="SkillTrax version 1 was completed and I learned so much about taking an idea from its early stages to final version."
        impact="SkillTrax is now live at InfoWorks and currently being used by all the employees."
        date="June 2019 - August 2019"
        prev="work6"
        next="work2"
    >
        <section>
            <Img  fluid={props.data.skilltrax1.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax2.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax3.childImageSharp.fluid} />
            <Img  fluid={props.data.skilltrax4.childImageSharp.fluid} />
        </section>
    </Work1>
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