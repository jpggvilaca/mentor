import React from 'react';

import styled from 'styled-components';

import Image from '../components/Image';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Card = styled.div`
  border: 1px solid #fff;
  display: flex;
  padding: 20px;
  align-items: center;
  flex-direction: column;
  height: 280px;
  width: 200px;
`;

const ImageWrapper = styled.div`
  background-image: url(./avatar.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0;
`;

const SocialIcons = styled.ul`
  display: flex;
`;

const Icon = styled(Image)`
  height: 44px;
  width: 44px;
`;

const Mentors = () => (
  <Layout>
    <SEO title="Mentors" />
    <h1>Mentors</h1>
    
    <Card>
      <ImageWrapper />
      <Text>João Vilaça</Text>
      <Text>Frontend Developer</Text>
      <Text>React, JS, HTML, CSS</Text>
      <SocialIcons>
        <Icon path={"github.png"} />
      </SocialIcons>
    </Card>
  </Layout>
)

export default Mentors
