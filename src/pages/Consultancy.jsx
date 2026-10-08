import { Link } from 'react-router-dom'
import '../styles/consultancy.css'

const expertise = [
  {
    icon: 'fa-solid fa-sitemap',
    title: 'Organizational Development',
    text: 'Strengthening systems, teams, and structures for agribusiness success.',
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    title: 'Capacity Building',
    text: 'Designing and delivering bespoke training programs aligned with institutional goals.',
  },
  {
    icon: 'fa-solid fa-users-gear',
    title: 'Workforce Development',
    text: 'Equipping employees with leadership, technical, and soft skills for improved performance.',
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    title: 'Program Support & Advisory',
    text: 'Supporting agribusiness companies, donor agencies, and development projects with strategic insights.',
  },
]

export default function Consultancy() {
  return (
    <div className="consultancy-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Consultancy</h1>
          <p>Insightful consultancy, practical solutions, lasting impact.</p>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-inner intro-inner">
          <div className="intro-text">
            <div className="section-tag">Consultancy Services</div>
            <h2 className="section-title">Beyond training individuals</h2>
            <p>
              At Premier AgriBusiness Academy, we go beyond training
              individuals. We collaborate with organizations, institutions, and
              industry leaders to deliver tailored consultancy solutions. Our
              consultancy services focus on strengthening agribusiness systems,
              building organizational capacity, and driving sustainable impact
              across the agricultural value chain.
            </p>
            <p>
              We have partnered with respected organizations such as the
              International Institute of Tropical Agriculture (IITA), the US
              SOY Excellence Center, and the Amo Group of Companies, providing
              expertise in program design, training delivery, and workforce
              development.
            </p>
          </div>

          <div className="intro-image-wrap">
            <div className="consultancy-image"></div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our consultancy expertise</h2>
            <p className="section-subtitle">
              We combine industry knowledge with practical solutions to help
              organizations thrive in a rapidly evolving agribusiness
              landscape.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <div className="expertise-card" key={item.title}>
                <div className="expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-inner cta-inner">
          <div className="cta-text">
            <h2>Need a tailored solution for your organization?</h2>
            <p>Talk to our team about your goals and how we can help.</p>
          </div>
          <Link to="/contact-us" className="btn-white">
            Contact us &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </div>
  )
}