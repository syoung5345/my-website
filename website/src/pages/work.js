import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

const Work = ({location}) => (
    <Layout>
        <p>wORK
        </p>
        <img src={location.state.image} alt="profile" />
    </Layout>
)

export default Work;