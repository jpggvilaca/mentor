import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Hello, my name is João and I'm originally from Portugal.</p>
    <p>Passionate about new technologies/solution and always eager to learn.</p>
    <p>I've been working a web developer for the past 5 years and I've a degree in computer science</p>
    <p>
      But the thing that I like the most is to teach and help people, and that's
      what I've been doing for the past years, at work, with friends, or online
      (stackoverflow and reddit).
    </p>
    <p>
      So, the main idea of this project is to guide you and to speed up your learning process.
      From my experience, having a mentor is surely crucial for better and faster
      knowledge acquirement.
    </p>
    <p>I hope we can improve together.</p>

    <a href="mailto:jpggvilaca@gmail.com">Email me</a>
    <p>Or book a <Link to="/book">lesson</Link></p>
  </Layout>
);

export default About;
