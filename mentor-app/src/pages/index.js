import React from 'react';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Section from '../components/Section';

import colors from '../colors';

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const grow = keyframes`
  from {
    transform: scale(.8, .8);
  }

  to {
    transform: scale(1, 1);
  }
`;

const StyledH1 = styled.h1`
  font-size: 48px;
  letter-spacing: .02rem;
  line-height: 48px;
  margin-bottom: 30px;
  max-width: 960px;
  text-align: center;
  animation: ${grow} 1.8s linear;
`;

const StyledButton = styled.button`
  background-color: transparent;
  font-size: 24px;
  padding: 10px;
  margin-top: 30px;
  transition: .3s all ease-in-out;
  animation: ${fade} 4s linear;

  &:hover {
    color: ${colors.blue};
    cursor: pointer;
  }

  &:hover a {
    color: ${colors.blue};
  }
`;

const StyledLink = styled(Link)`
  transition: .3s all ease-in-out;
`;

const IndexSection = styled(Section)`
  align-items: center;
  color: ${colors.blue};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />

    <IndexSection>
      <StyledH1>
        Hi, I'm João. Software engineer from Portugal. This is the Mentor Project.
      </StyledH1>

      <StyledLink to='/services'>
        <StyledButton>How it works</StyledButton>
      </StyledLink>
    </IndexSection>

  </Layout>
);

export default IndexPage;
