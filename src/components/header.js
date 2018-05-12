import React from 'react'
import Link from 'gatsby-link'
import banner from '../assets/fern.jpg'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#333',
      marginBottom: '0',
      paddingTop: '1.0875rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 980,
        
      }}
    >
      <h1 className='bannerTitle'>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 className='bannersubtitle'
      style={{
        marginTop: 15,
        paddingBottom: 15,
        color: 'white',
        paddingLeft: '1.45rem',
      }}>
      Nicole Sharkey, EAMP, LAc
      </h4>
      <img className='bannerHeader' src={banner} alt='ferns' />
    </div>
  </div>
)

export default Header
