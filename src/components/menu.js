import React from 'react'
import Link from 'gatsby-link'

const Menu = () => (
  <div>
  <nav>
  <ul className="main-nav">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Nicole</Link></li>
    <li><Link to="/chinese-medicine">Chinese Medicine</Link>
      <ul className="sub-nav">
        <li><Link to="/acupuncture-treats">What does acupuncture treat?</Link></li>
      </ul>
    </li>
    <li><Link to="/patient-information">Patient Information</Link>
      <ul className="sub-nav">
        <li><Link to="/first-visit">First visit</Link></li>
        <li><Link to="/patient-forms">Patient forms</Link></li>
        <li><Link to="/insurance">Insurance</Link></li>
        <li><Link to="/fees">Fees</Link></li>
        <li><Link to="/cancelation-policy">Cancelation policy</Link></li>
      </ul>
    </li>
    <li><Link to="/clinic-location">Clinic Location</Link></li>
    <li><Link to="/blog">Blog</Link></li>
  </ul>
</nav>
</div>

)

export default Menu
