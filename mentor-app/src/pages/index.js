import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />

    <h1>Welcome</h1>

    <p>Don't know what to learn next?</p>
    <p>Stuck with bugs?</p>
    <p>Need code reviews?</p>
    <p>Need to practice for your next interview?</p>

    <p>We can help, find out <Link to='/howitworks'>how</Link></p>

  </Layout>
);

export default IndexPage;
