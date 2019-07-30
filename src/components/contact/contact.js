import React from 'react';

import styles from './contact.module.css';

const Contact = () => (
    <p className={styles.contact}>
        Get in touch
        <a href="mailto:syoung5@harding.edu" className="link">Contact me</a> 
    </p>
)

export default Contact;