import React from 'react'
import Nicole from '../assets/nicolebio2.jpg'

const AboutPage = () => (
  <div>
    <h2>About Nicole</h2>
    <img
      style={{
        display: 'inline',
        float: 'right',
        marginLeft: '24px',
        marginTop: '4px',
        height: '310px',
      }}
      src={Nicole}
      alt="portrait"
    />
    <p>
      Nicole received her master’s degree from the Seattle Institute of Oriental
      Medicine(SIOM). She is trained in traditional Chinese acupuncture,
      Japanese acupuncture, Chinese herbal medicine, Chinese nutritional
      therapy, Auricular (ear) acupuncture, Tui Na (Chinese medical massage), Qi
      Gong (movement therapy), Chinese medical language and detox acupuncture
      for the treatment of addictions. Prior to becoming an acupuncturist,
      Nicole received her BA in Sociology and Peace and Conflict Studies from
      Brandeis University. She spent several years working in the non-profit
      healthcare field, and has worked with children and adults with physical
      and learning disabilities as a personal care assistant and teacher.
    </p>
    <br />
    <h3>Certifications:</h3>
    <ul>
      <li>Masters degree in Acupuncture and Oriental Medicine (MAcOM)</li>
      <li>
        Diplomate in Oriental Medicine (Acupuncture and Chinese Herbal Medicine)
        from the National Certification Commission for Acupuncture and Oriental
        Medicine (NCCAOM)
      </li>
      <li>
        National Association for Detox Acupuncture (NADA) certification for the
        treatment of addictions
      </li>
      <li>
        Licensed East Asian Medicine Practitioner (EAMP) in Washington State:
        Licensed to practice acupuncture and East Asian Medicine
      </li>
    </ul>
    <br/>
  </div>
)

export default AboutPage
