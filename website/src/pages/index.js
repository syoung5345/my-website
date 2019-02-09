import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Title from "../components/title";
import Logo from '../components/logo/logo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Logo width="300" height="300" />
    <Title />
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
