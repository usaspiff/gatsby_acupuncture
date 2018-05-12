import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ siteTitle }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '0',
    }}
  >
    <footer
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h4 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            margin: '0 auto',
          }}
        >
          {siteTitle}
        </Link>
      </h4>
      <p  
          style={{
          marginTop: 15,
          marginBottom: 15,
          color: 'white',
        }}
      >
        © 2018 Nicole Sharkey
      </p>
      
    </footer>
  </div>
)

export default Footer
