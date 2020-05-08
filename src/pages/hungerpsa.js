import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Work from '../components/work/work';
import styles from './index.module.css';

const info = {
    title: "PSA: Child Hunger",
    date: "September 2017",
    type: "School project",
    overview: "A Personal Service Announcement or PSA is intended to draw a viewer in instantly and then leave them with a sense of purpose of the next steps they could take to fight a problem in the world.",
    challenge: "How to make a PSA campaign that people will notice?",
    goal: "Make a PSA campaign for child hunger that will get people's attention and make them want to take action.",
    solution: "Social media ads that make a play off of Uno. The use of Uno is ironi because Uno is a light-hearted and fun game, but child hunger is a serious, sad thing that is happening in the world. The stark difference between these makes the message stronger and resonate more.",
    deliverables: ["PSA campaign"],
    prev: "",
    next: ""
}

const HungerPsa = props => (
    <Work info={info}>
        <div className={styles.description}>
            <div className={styles.container}>
                <Img className={styles.long} fluid={props.data.cards.childImageSharp.fluid} />

                <Img className={styles.tall} fluid={props.data.psa1.childImageSharp.fluid} />
                <Img className={styles.tall} fluid={props.data.psa2.childImageSharp.fluid} />
                <Img className={styles.tall} fluid={props.data.psa3.childImageSharp.fluid} />

                <Img className={styles.big} fluid={props.data.box.childImageSharp.fluid} />
                <Img className={styles.small} fluid={props.data.nkh.childImageSharp.fluid} />
                <p className={styles.small}>
                    For this project I picked No Kid Hungry to be the sponsor. They are an organization that strives to end child hunger in the America through education, fundraisers, and many more things. 
                </p>
            </div>
        </div>
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
    nkh: file(relativePath: { eq: "nkh.jpg" }) {
        ...fluidImage
    }

    psa1: file(relativePath: { eq: "psa-insta-1.jpg" }) {
        ...fluidImage
    }
    psa2: file(relativePath: { eq: "psa-insta-2.jpg" }) {
        ...fluidImage
    }
    psa3: file(relativePath: { eq: "psa-insta-3.png" }) {
        ...fluidImage
    }
}
`;