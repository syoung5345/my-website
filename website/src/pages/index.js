import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Title from "../components/title/title";
import Logo from '../components/logo/logo';
import Gallery from '../components/gallery/gallery';
import DownArrow from '../components/arrow/downArrow/downArrow';
import TopArrow from '../components/arrow/topArrow/topArrow';
import Contact from '../components/contact/contact';

import styles from './index.module.css';

const IndexPage = () => (
  <Layout id="home">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.header}>
      <Logo width="200" height="200" />
      <DownArrow to="about"/>
    </div>
    <div id="about" className={styles.about}>
      <Title />
      <DownArrow to="work"/>
    </div>
    <div id="work">
      <Gallery />
    </div>
    <div id="contact" className={styles.contact}>
      <Contact />
      <TopArrow />
    </div>
  </Layout>
)

export default IndexPage;
