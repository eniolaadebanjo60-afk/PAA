import { Link } from 'react-router-dom'
import Partners from '../components/Partners'
import '../styles/partnership.css'

const benefits = [
  {
    icon: 'fa-solid fa-earth-africa',
    title: 'World-class expertise',
    text: 'Access to world-class expertise and resources.',
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Co-created programs',
    text: 'Co-created training programs tailored to industry needs.',
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Resilient systems',
    text: 'Shared commitment to building resilient agribusiness systems.',
  },
  {
    icon: 'fa-solid fa-bullhorn',
    title: 'Wider reach',
    text: 'Broader reach and deeper impact in communities and organizations.',
  },
]

export default function Partnership() {
  return (
    <div className="partnership-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Partnership</h1>
          <p>Strong partnerships create lasting impact in agribusiness.</p>
        </div>
      </section>

      <section className="partner-intro-section">
        <div className="section-inner partner-intro-inner">
          <div className="partner-intro-image-wrap">
            <div className="partnership-image"></div>
          </div>

          <div className="partner-intro-text">
            <div className="section-tag">Partner With Us</div>
            <h2 className="section-title">Collaboration is at the heart of what we do</h2>
            <p>
              Collaboration is at the heart of Premier AgriBusiness Academy. We
              believe that strong partnerships create lasting impact in
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
            <Link to="/contact-us" className="btn-primary">
              Become a partner &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What Our Partnerships Bring</div>
            <h2 className="section-title">Better together</h2>
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

      <Partners />
    </div>
  )
}