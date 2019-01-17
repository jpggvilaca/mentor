import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledBox = styled.div`
  background-color: rgb(100,151,177,.7);
  margin-top: 60px;
  padding: 30px;
  max-width: 480px;

  p + p {
    margin-top: 5px;
  }
`;

const StyledH1 = styled.h1`
  margin-bottom: 30px;
`;

const StyledH5 = styled.h5`
  font-size: 18px;
  margin-bottom: 45px;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid #fff;
  padding: 10px;
  margin-top: 30px;
  transition: .3s all ease-in-out;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }

  &:hover a {
    color: rgb(100,151,177);
  }
`;

const StyledLink = styled(Link)`
  transition: .3s all ease-in-out;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />

    <StyledBox>
      <StyledH1>Hello</StyledH1>

      <StyledH5>Having trouble coding? We're here to help</StyledH5>

      <p>Don't know what to learn next?</p>
      <p>Stuck with bugs?</p>
      <p>Need code reviews?</p>
      <p>Need to practice for your next interview?</p>

      <StyledButton>
        <StyledLink to='/howitworks'>How it works</StyledLink>
      </StyledButton>
    </StyledBox>

  </Layout>
);

export default IndexPage;
