import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background-color: #6497b1;
  border-bottom: 2px solid #b3cde0;
  display: flex;
  height: 70px;
`;

const StyledLi = styled.li`
  color: #fff;
  margin: 0;
  margin-right: 10px;
`;

const TitleWrapper = styled.ul`
  max-width: 960px;
  padding-left: 1.0875rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const routes = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mentors', path: '/mentors' },
  { name: 'How it Works', path: '/howitworks' },
  { name: 'Book', path: '/book' },
];

const Header = () => (
  <StyledHeader>
    <TitleWrapper>
      {routes.map((route, index) =>
        <Link to={route.path} key={`route-${index}`}>
          <StyledLi>{route.name}</StyledLi>
        </Link>
      )}
    </TitleWrapper>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
