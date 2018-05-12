import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'
import './index.css'

const Layout = ({ children, data }) => (
  <div
    style={{
      background: 'white',
      margin: '0 auto',
      maxWidth: 980,
      padding: '0px',
      paddingTop: 0,
    }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'This is the website of Nicole Sharkey Licenced Acupuncturist',
        },
        {
          name: 'keywords',
          content: 'acupuncture, chinese, medecine, fremont, seattle',
        },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Menu />
    <div className='paragraphSizing'>
      {children()}
    </div>
    <Footer siteTitle={data.site.siteMetadata.title} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
