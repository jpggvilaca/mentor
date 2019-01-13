import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, 'mentor']} />
    <h1>Hi and welcome to mentor project</h1>
    <p>Let's improve together!</p>
  </Layout>
)

export default IndexPage
