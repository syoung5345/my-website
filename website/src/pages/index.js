import React, { Component } from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Title from "../components/title";
import Logo from '../components/logo/logo';
import Gallery from '../components/gallery/gallery';

// import './index.css';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div className="header">
      <Logo width="300" height="300" />
      <Title />
    </div>
    <div id="about"></div>
    <div id="work" className="work">
      <Gallery />
    </div>
    <div id="contact">
    
    </div>
  </Layout>
)

export default IndexPage;
