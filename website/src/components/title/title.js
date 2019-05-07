import React from 'react';

import Icon from '../icon/icon';
import styles from './title.module.css';
import { FaGithub, FaLinkedin, FaPinterest, FaPi } from 'react-icons/fa';

const Title = () => (
    <div className={styles.title}>
        <h1>Samuel Young</h1>
        <p>Developer | Designer | Adventurer</p>   
        <div className={styles.icons}>
            <Icon href="https://github.com/syoung5345">
                <FaGithub />
            </Icon>
            <Icon href="https://www.linkedin.com/in/samuel-young-383044168/">
                <FaLinkedin />
            </Icon>
            {/* <Icon href="https://www.pinterest.com/youngsamuel722/">
                <FaPinterest />
            </Icon> */}
        </div> 
    </div>
)

export default Title;