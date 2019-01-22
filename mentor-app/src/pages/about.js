import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section, { SectionTitle } from '../components/Section';

import colors from '../colors';

const AboutTitle = styled(SectionTitle)`
  color: ${colors.black};
  margin: 20px 0;
  width: 100%;
`;

const AboutSection = styled(Section)`
  background-color: #d3d3d3;
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  background-image: url(./background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex: 1 1 50%;
`;

const Bottom = styled.div`
  color: ${colors.black};
  background-color: ${colors.white};
  flex: 1 1 50%;
  padding: 40px 10px 20px;

  p + p {
    margin-top: 20px;
  }
`;

const About = () => (
  <Layout>
    <SEO title="About" />

    <AboutSection>
      <AboutTitle>About</AboutTitle>

      <Top />

      <Bottom>
        <p>Hi I'm João.</p>
        <p>
          Passionate about new technologies/solution and always eager to learn.
          I've been working a web developer for the past 5 years and I've a 
          degree in computer science.
        </p>
        <p>
          I've been working a web developer for the past 5 years and I've a 
          degree in computer science
        </p>
        <p>
          I also like to teach and help people, and that's what I've been doing
          for the past years, at work, with friends, or online
          (stackoverflow and reddit).
        </p>
      </Bottom>
    </AboutSection>
  </Layout>
);

export default About;
