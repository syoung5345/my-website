import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "New Orleans Travel Website",
    date: "October 2018",
    type: "School project rebrand",
    overview: "This website is a redesign of the New Orleans travel website. I redesigned the tag lines, visuals, and overall brand of the site.",
    challenge: "How to redesign a travel website to show off the best parts of the city?",
    goal: "Redesign the existing website to highlight the unique aspects of New Orleans in a more engaging mannor than the existing website.",
    solution: "Provide more variety in the layout of the images and other content as well as using a yellow line throughout to draw the viewer through the site and add some needed consistency.",
    deliverables: ["Website"],
    prev: "",
    next: ""
}

const Nola = props => (
    <Work info={info}>
        <div className={styles.description}>
            <h4>Home page:</h4>
            <Img fluid={props.data.home.childImageSharp.fluid} />

            <div className={styles.space}>
                <h4>Explore page:</h4>
                <Img fluid={props.data.explore.childImageSharp.fluid} />
            </div>

            <div className={styles.space}>
                <h4>Nightlife page:</h4>
                <Img fluid={props.data.nightlife.childImageSharp.fluid} />
            </div>
        </div>
    </Work>
)

export default Nola;

export const work3Query = graphql `
query {
    home: file(relativePath: { eq: "NOLA-home.png" }) {
        ...fluidImage
    }
    explore: file(relativePath: { eq: "NOLA-explore.jpg" }) {
        ...fluidImage
    }
    nightlife: file(relativePath: { eq: "NOLA-nightlife.png" }) {
        ...fluidImage
    }
}
`;