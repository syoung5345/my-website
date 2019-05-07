import React from 'react';

import styles from './contact.module.css';

const Contact = () => (
    <p className={styles.contact}>
        Get in touch
        <a href="mailto:syoung5@harding.edu" className={styles.email}>syoung5@harding.edu</a> 
    </p>
)

export default Contact;