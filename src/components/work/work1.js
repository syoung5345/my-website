import React from 'react'
import Img from 'gatsby-image';

import styles from './work.module.css';

const work1 = props => (
    <section className={styles.wrapper}>
        <header className={styles.header}>My header</header>
        
        {/* <div className="panel">Panel A</div>
        <div className="panel">Panel B</div>
        <div className="panel tall-panel">Panel C</div>
        <div className="panel">Panel D</div> */}
        <div className={styles.panel}>Panel E</div>
        <div className={styles.panel}>Panel F</div>
        {/* <div className={`styles.panel styles.tall-panel`}>Panel G</div>
        <div className={`styles.panel styles.tall-panel`}>Panel H</div> */}
        <div className={styles.panel}>Panel I</div>
        <div className={styles.panel}>Panel J</div>
        
        <footer className={styles.footer}>My footer</footer>
    </section>
)

export default work1;