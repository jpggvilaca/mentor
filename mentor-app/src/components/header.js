import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import styled from 'styled-components';

import colors from '../colors';
import routes from '../routes';

const StyledHeader = styled.header`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  height: 70px;
`;

const Li = styled.li`
  color: ${colors.gray};
  font-size: 14px;
  margin: 0;
  margin-right: 30px;
  transition: .2s all ease-in-out;

  &:hover {
    color: ${colors.blue};
  }
`;

const NavBar = styled.ul`
  max-width: 960px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`;

const Name = styled(Link)`
  color: ${colors.black};
  font-size: 16px;
  position: absolute;
  left: 40px;
`;

const Header = () => (
  <StyledHeader>
    <NavBar>
      <Li>
        <Name to='/'>MENTOR PROJECT.</Name>
      </Li>
      {routes.map((route, index) =>
        <Li key={`route-${index}`}>
          <Link to={route.path}>
            {route.name}
          </Link>
        </Li>
      )}
    </NavBar>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
