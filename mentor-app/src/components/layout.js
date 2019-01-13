import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

import './layout.css'

const StyledLayout = styled.div`
  color: #fff;
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.0875rem 1.45rem;
`;

const StyledWrapper = styled.div`
  background-color: #3079ED;
  height: 100vh;
`;

const StyledFooter = styled.footer`
  max-width: 960px;
  padding-left: 1.0875rem;
  margin: 0 auto;
  display: flex;
  width: 100%;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <StyledWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>
          {children}
        </StyledLayout>
        <StyledFooter>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
      </StyledWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
