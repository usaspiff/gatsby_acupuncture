import React from 'react'
import Link from 'gatsby-link'
import Intake from '../documents/intake_and_consent_to_treatment.pdf'
import Privacy from '../documents/patient-privacy-disclosure.pdf'
import Insurance from '../documents/insurance_information.pdf'
import AutoInsurance from '../documents/auto_insurance_info.pdf'

const patientForms = () => (
  <div>
    <h2>Patient Forms</h2>
    <p>
      If possible, please read and complete these forms prior to your first
      appointment. If you are unable to bring these forms with you, I will
      provide them to you at the clinic. Please arrive 15-20 minutes early to
      ensure that you have enough time to fill them out before your treatment.
    <br />
    <br />
      <a href={Intake}>
        Intake and Consent to Treatment
      </a>
    <br />
      <a href={Privacy}>Patient Privacy Disclosure</a>
    <br />     
      <a href={Insurance}>Insurance Information</a>
    <br />
    <br />
    If you are paying through PIP (auto accidents), please
    complete <a href={AutoInsurance}>this form</a> and bring it with your to your first session. If you are unable to open these documents, 
    <a href="https://get.adobe.com/reader/"> click here</a> to download the free
    Adobe Reader.
    </p>
  </div>
)

export default patientForms