import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

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

const Cotopaxi = props => (
    <Work info={info}
        title="Cotopaxi Website"
        description="This redesign was focused on bringing stronger visual impact and more user engagement to interest the viewer right away."
        
        goal="I chose three books by Jon Krakauer for my book series. Krakauer is a climber and adventurer and draws in readers who are interested in these things as well. "
        deliverables={["Printed book covers for book series"]}
        outcome="I learned much about Nike and their style. In addition, I implemented an annual report, a CSR poster series, and an interactive version of the annual report."
        impact="I learned to create designs within Nike's style guidelines while still braching out from what they normally do."
        date="November 2019"
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