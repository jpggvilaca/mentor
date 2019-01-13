import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const HowItWorks = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />

    <h1>The idea is to guide you on the right path</h1>

    <ul>
      <li>General computer science (language paradigms, algorithms, complexity analysis, etc)</li>
      <li>Code quality</li>
      <li>React and it's ecossystem (redux, styled components, redux-saga, etc...)</li>
      <li>Project setup (scaling, architecture, linting, etc)</li>
      <li>Express js</li>
      <li>API's</li>
      <li>GIT</li>
      <li>Imposter syndrome</li>
      <li>If not listed here just ask...</li>
    </ul>

    <h5>"I can only show you the door. You're the one that has to walk through it."</h5>

  </Layout>
);

export default HowItWorks;
