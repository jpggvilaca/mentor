import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Services = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />

    <h1>The idea is to guide you on the right path</h1>

    <p>
          So, the main idea of this project is to guide you and to speed up your learning process.
          From my experience, having a mentor is surely crucial for better and faster
          knowledge acquirement.
        </p>

    <ul>
      <li>General computer science (language paradigms, algorithms, complexity analysis, etc)</li>
      <li>Code reviews</li>
      <li>React and it's ecossystem (redux, styled components, redux-saga, performance, etc...)</li>
      <li>Project setup (scaling, architecture, linting, etc)</li>
      <li>Express js</li>
      <li>API's</li>
      <li>GIT</li>
      <li>Mock interviews</li>
      <li>Imposter syndrome</li>
      <li>What to learn next</li>
      <li>Career path</li>
      <li>If not listed here just ask...</li>
    </ul>


      {/* <StyledH5>Having trouble coding? We're here to help</StyledH5> */}

      <p>Don't know what to learn next?</p>
      <p>Stuck with bugs?</p>
      <p>Need code reviews?</p>
      <p>Need to practice for your next interview?</p>

    <h5>"I can only show you the door. You're the one that has to walk through it."</h5>

  </Layout>
);

export default Services;
