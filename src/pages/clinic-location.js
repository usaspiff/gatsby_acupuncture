import React from 'react'
import Link from 'gatsby-link'
import Iframe from 'react-iframe'

const location = () => (
  <div>
    <h2>Clinic Location</h2>
    <p>Phone: (206) 335-8017</p>
    <p>
      Email:
      <a href="mailto:sharkeyacupuncture@gmail.com">
        {' '}
        sharkeyacupuncture@gmail.com
      </a>
    </p>
    <p>
      <u>
        <strong>Seattle (Fremont):</strong>
      </u>
    </p>
    <p>3609 1st Ave NW Seattle, WA 98107</p>
    <div>
      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.6000302681286!2d-122.36014128459988!3d47.65333879274163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549015a91d730525%3A0xe5b093b56acb8c65!2sNicole+Sharkey%2C+EAMP%2C+L.Ac.!5e0!3m2!1sen!2sus!4v1524718200282"
        width="600px"
        height="450px"
        position="relative"
      />
    </div>
    <p>
      <strong>Hours:</strong>
      <ul>
        <li>Monday 4:30-7:30pm</li>
        <li>Tuesday 11-6 pm</li>
        <li>Thursday 9-1 pm</li>
        <li>Sunday 10-2 pm</li>
        <br />
        <li>
          The clinic is located in the Fremont neighborhood. It is accessible by
          bus lines 28 and 46. Free street parking is available around the
          clinic.
        </li>
      </ul>
      <br />
      <strong>Gift Certificates:</strong>
      <br />
      Please contact me at (206) 335-8017 or
      <a href="mailto:sharkeyacupuncture@gmail.com">
        sharkeyacupuncture@gmail.com
      </a>{' '}
      if you would like to purchase a gift certificate for a loved one.
    </p>
  </div>
)

export default location