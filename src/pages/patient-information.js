import React from 'react'
import Link from 'gatsby-link'

const patientInfo = () => (
    <div>
        <h2>Patient Information</h2>
        <Link to="/first-visit">Your first visit and F.A.Q.</Link>
        <br />
        <Link to="/patient-forms">Patient Forms</Link>
        <br />
        <Link to="/fees">Fees</Link>
        <br />
        <Link to="/cancelation-policy">Cancelation Policy</Link>
        <br />
        <br />
    </div>
)

export default patientInfo