import { Link } from 'react-router-dom'
import '../styles/consultancy.css'

const expertise = [
  {
    icon: 'fa-solid fa-sitemap',
    name: 'Organizational Development',
    text: 'Strengthening systems, teams, and structures for agribusiness success.',
  },
  {
    icon: 'fa-solid fa-chalkboard-user',
    name: 'Capacity Building',
    text: 'Designing and delivering bespoke training programs aligned with institutional goals.',
  },
  {
    icon: 'fa-solid fa-users-gear',
    name: 'Workforce Development',
    text: 'Equipping employees with leadership, technical, and soft skills for improved performance.',
  },
  {
    icon: 'fa-solid fa-handshake-angle',
    name: 'Program Support & Advisory',
    text: 'Supporting agribusiness companies, donor agencies, and development projects with strategic insights.',
  },
]

export default function Consultancy() {
  return (
    <div className="consultancy-page">
      <section className="page-hero consultancy-hero">
        <div className="section-inner">
          <h1>Consultancy</h1>
        </div>
      </section>

      <section className="services-section">
        <div className="section-inner services-inner">
          <div className="services-text">
            <h2 className="services-heading">Beyond Training</h2>
            <p>
              At Premier Agribusiness Academy, we go beyond training
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
            
            <div className="services-cta">
              <p>Need a tailored solution for your organization?</p>
              <Link to="/contact-us" className="btn-primary">
                Talk to our team &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="services-image-wrap">
            <div className="services-image"></div>
          </div>
        </div>
      </section>

      <section className="expertise-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">What We Do</div>
            <h2 className="section-title">Our Consultancy Expertise</h2>
            <p className="section-sub" style={{ color:'#000', fontWeight:'400', margin: '0 auto' }}>
              We combine industry knowledge with practical solutions to help organizations thrive in a rapidly evolving agribusiness landscape.
            </p>
          </div>

          <div className="expertise-grid">
            {expertise.map((item) => (
              <div className="expertise-card" key={item.name}>
                <div className="expertise-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band-section">
        <div className="cta-band-overlay"></div>
        <div className="cta-band-content">
          <h2>Insightful consultancy, Practical<br />solutions, Lasting impact</h2>
        </div>
      </section>
    </div>
  )
}