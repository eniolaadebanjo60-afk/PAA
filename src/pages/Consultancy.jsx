import '../styles/consultancy.css'

const expertise = [
  {
    name: 'Organizational Development',
    text: 'strengthening systems, teams, and structures for agribusiness success.',
  },
  {
    name: 'Capacity Building',
    text: 'designing and delivering bespoke training programs aligned with institutional goals.',
  },
  {
    name: 'Workforce Development',
    text: 'equipping employees with leadership, technical, and soft skills for improved performance.',
  },
  {
    name: 'Program Support & Advisory',
    text: 'supporting agribusiness companies, donor agencies, and development projects with strategic insights.',
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
            <h2 className="services-heading">Consultancy Services</h2>
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

            <p className="services-subhead">Our Consultancy Expertise Includes:</p>
            <ul className="services-list">
              {expertise.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong> – {item.text}
                </li>
              ))}
            </ul>

            <p>
              At Premier AgriBusiness Academy, we combine industry knowledge
              with practical solutions to help organizations thrive in a
              rapidly evolving agribusiness landscape.
            </p>
          </div>

          <div className="services-image-wrap">
            <div className="services-image"></div>
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