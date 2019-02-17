import React from 'react';

import Icon from '../icon/icon';
import styles from './title.module.css';

const Title = () => (
    <div className={styles.title}>
        <h1>Samuel Young</h1>
        <p>Developer | Designer | Adventurer</p>   
        <div>
            <Icon src="fab fa-github" />    
        </div> 
    </div>
)

export default Title;