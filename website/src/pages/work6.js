import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import styles from './index.module.css';

import cards from '../images/retro-uno-all.png';
import box from '../images/uno-box-meals.png';

const Work6 = props => (
    <Layout>
        <div className={styles.work}>
            <Link to="/#work">back</Link>
            <h1>PSA-Child Hunger</h1>
            <p>
                 By showing UNO playing cards that speak to hunger choices, child hunger is portrayed in a light-hearted, but striking way. UNO cards are familiar and have a sense of family. The use of older UNO cards will resonate with the main target audience, people ages 30-50. Uno is thought of as a game for younger kids, but can be played by kids of all ages. In the same way hunger affects kids of all ages. 
                 The second idea is to have these custom UNO cards printed out really big (1ft. By 2ft.) to show the breadth of the problem. These can be put in grocery stores, nursing homes, restaurants, and shopping areas. Their sheer size and familiarity in an unusual setting will attract attention and cause people to check them out.
            </p>
            <img src={box} width="70%" height="70%" alt="box"/>
            <img src={cards}  alt="cards"/>
        </div>
    </Layout>
)

export default Work6;