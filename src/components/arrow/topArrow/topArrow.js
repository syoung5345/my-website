import React, { Component } from 'react';
import { Link } from 'gatsby';

import styles from './topArrow.module.css';

class TopArrow extends Component {

    componentDidMount() {
        window.onscroll = function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
                const topArrow = document.querySelector("#topArrow");
                if (topArrow != null) {
                    topArrow.style.opacity = 1;
                }
            } else {
                const topArrow = document.querySelector("#topArrow");
                if (topArrow != null) {
                    topArrow.style.opacity = 0;
                }
            }
        } 
    }

    render() {
        return <Link to="/" id="topArrow" className={styles.arrow}></Link>
    }
}

export default TopArrow;