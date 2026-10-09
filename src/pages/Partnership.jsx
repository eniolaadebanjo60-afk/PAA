import Partners from '../components/Partners'
import '../styles/partnership.css'

const benefits = [
  'Access to world-class expertise and resources',
  'Co-created training programs tailored to industry needs',
  'Shared commitment to building resilient agribusiness systems',
  'Broader reach and deeper impact in communities and organizations',
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

            <p className="partner-subhead">What Our Partnerships Bring:</p>
            <ul className="partner-list">
              {benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="partner-intro-image-wrap">
            <div className="partner-intro-image"></div>
          </div>
        </div>
      </section>

      <Partners />
    </div>
  )
}