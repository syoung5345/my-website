import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const Work = props => (
    <Layout>
        <Link to="/">back</Link>
        <p>Work {props.title}</p>
    </Layout>
)

export default Work;