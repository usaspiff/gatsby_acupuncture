import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>Welcome</h2>
    <p>
      <strong>Nicole Sharkey</strong> is a licensed acupuncturist and Chinese
      medical practitioner in Seattle, WA. She provides acupuncture, herbal
      medicine and dietary advice for the treatment of a wide variety of
      conditions, including:
    </p>

    <ul>
      <li>Chronic and acute pain, injury and trauma</li>
      <li>Men’s and women’s health concerns Stress, depression, and anxiety</li>
      <li>Gastrointestinal disorders Gynecological problems</li>
      <li>Immune disorders (chronic fatigue, candida, allergies, etc.)</li>
      <li>Respiratory conditions Circulatory disorders Skin conditions</li>
      <li>Addiction recovery</li>
      <li>Immune system support as preventative medicine</li>
      <li>and more.</li>
    </ul>
    <br />
    <p>
      For a complete list of conditions treated by Chinese Medicine, click&#160;
      <Link to="/acupuncture-treats">here</Link>.
    </p>
    <p>
      Acupuncture and Chinese Herbal Medicine are part of a medical system that
      is over 2,000 years old and are based on the understanding that when in
      balance, the body has the capacity to heal itself. Through her Chinese
      medical practice, Nicole aims to help her patients discover their own
      healing potential and to find practical ways to achieve their health goals
      within their unique life experiences.
    </p>
    <p>
      Nicole uses acupuncture, Chinese herbal medicine, nutritional therapy, Qi
      Gong (movement therapy), and Tui Na, (Chinese therapeutic massage). She
      use a wide array of techniques to best fit each patients, including the
      use of very gentle, and non-insertion acupuncture techniques for the
      needle-shy.
    </p>
    <p>
      To schedule an appointment, a free 30-minute in person consultation, or
      for questions about how acupuncture and Chinese medicine can help you,
      please contact Nicole by phone: <strong>(206) 335 -8017</strong>, or
      email:&#160;
      <strong>
        <a href="mailto:sharkeyacupuncture@gmail.com">
          sharkeyacupuncture@gmail.com
        </a>
      </strong>.
    </p>
  </div>
)

export default IndexPage
