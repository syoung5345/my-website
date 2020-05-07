import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "Cotopaxi Website Redesign",
    date: "November 2019",
    type: "School project",
    overview: "Cotopaxi is an outdoor clothing brand that focuses on fitnesss and sustainability. ",
    challenge: "How to redesign a website that already looks good and functions well.",
    goal: "Redesign the Cotopaxi website to match the aesthetic of their brand more closely.",
    solution: "I emphasized Cotopaxi's stunning photography by using more pictures and making them larger. In addition, I simplified the look by removing parts that distracted from the products.",
    deliverables: ["Website"],
    prev: "",
    next: ""
}

const Cotopaxi = props => (
    <Work info={info}
        description="This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away."
    >

        <div className={styles.description}>
            <div >
                <h3>Home page:</h3>
                <Img fluid={props.data.home.childImageSharp.fluid} />
            </div>

            <div className={styles.space}>
                <h3>Product page:</h3>
                <Img fluid={props.data.libre.childImageSharp.fluid} />
            </div>

            <div className={styles.space}>
                <h3>Product details page:</h3>
                <Img fluid={props.data.libreDetails.childImageSharp.fluid} />
            </div>
        </div>
    </Work>
)

export default Cotopaxi;

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