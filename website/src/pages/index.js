import React, { Component } from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Title from "../components/title/title";
import Logo from '../components/logo/logo';
import Gallery from '../components/gallery/gallery';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className={styles.header}>
      <Logo width="300" height="300" />
      
    </div>
    <div id="about"><Title /></div>
    <div id="work" className="work">
      <Gallery />
    </div>
    <div id="contact">
    
    </div>
  </Layout>
)

export default IndexPage;
