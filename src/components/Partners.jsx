import { Link } from 'react-router-dom'
import Partners from '../components/Partners'
import '../styles/partnership.css'

const benefits = [
  {
    icon: 'fa-solid fa-earth-africa',
    title: 'World-Class Expertise',
    text: 'Access to global networks, industry leaders, and cutting-edge agribusiness resources.'
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Co-Created Programs',
    text: 'Tailored training and consultancy solutions built specifically around your organizational goals.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Resilient Systems',
    text: 'A shared commitment to building sustainable and resilient agribusiness ecosystems.'
  },
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Wider Reach',
    text: 'Amplify your impact and expand your footprint across communities and organizations.'
  },
]

export default function Partnership() {
  return (
    <div className="partnership-page">
      <section className="page-hero partnership-hero">
        <div className="section-inner">
          <h1>Partnership</h1>
        </div>
      </section>

      <section className="partner-intro-section">
        <div className="section-inner partner-intro-inner">
          <div className="partner-intro-text">
            <h2 className="partner-intro-heading">Partner with Us</h2>
            <p>
              Collaboration is at the heart of Premier AgriBusiness Academy.
              We believe that strong partnerships create lasting impact in
              agribusiness, education, and workforce development. By working
              with global institutions, industry leaders, and development
              agencies, we deliver programs that are relevant, practical, and
              transformative.
            </p>
            <p>
              We are proud to have partnered with organizations such as the
              International Institute of Tropical Agriculture (IITA), the US
              SOY Excellence Center, and the Amo Group of Companies to drive
              capacity building and sustainable growth across the agricultural
              value chain.
            </p>
          </div>

          <div className="partner-intro-image-wrap">
            <div className="partner-intro-image"></div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What We Bring</div>
            <h2 className="section-title">Why Partner With Us?</h2>
          </div>

          <div className="benefits-grid">
            {benefits.map((item) => (
              <div className="benefit-card" key={item.title}>
                <div className="benefit-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-cta-section">
        <div className="section-inner partners-cta-inner">
          <div className="partners-cta-text">
            <h2>Ready to create lasting impact?</h2>
            <p>Join forces with us to drive agricultural transformation across Africa.</p>
          </div>
          <Link to="/contact-us" className="btn-white">
            Become a Partner &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      <div className="partners-slider-wrap">
        <Partners />
      </div>
    </div>
  )
}