import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './header'

import './layout.css'

const StyledLayout = styled.div`
  color: #fff;
  background-image: url(./background.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 10px;
  padding-left: 30px;
  height: calc(100vh - 70px);
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
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <StyledLayout>
          {children}
        </StyledLayout>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
