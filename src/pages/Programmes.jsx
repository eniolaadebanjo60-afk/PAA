import CountUp from '../components/CountUp'
import '../styles/programmes.css'

const courses = [
  'Creative Thinking and Problem-Solving for Decision-Making',
  'Supply Chain and Logistics Management',
  'Poultry Value Chain Analysis',
  'Agronomy, Aquaculture, and Poultry Production Management',
  '"Farming Farmers Farms": a philosophy and methodology for agricultural transformation',
  'Advanced Stress Management for Agribusiness Professionals',
  'Strategic Techniques for Managing Upward',
  'Leading and Navigating Organisational Change',
  'Black Soldier Fly Farming for Sustainable Aquaculture Feed',
  'Strengthening Organisational Resilience in Agribusiness',
  'Integrating HR Strategy with Business Objectives',
  'HR Approaches to Fraud Prevention and Management',
  'HQCCP Certification Programme',
  'Comprehensive Agronomy and Crop Production Training',
  'Excellence in Service Quality Management',
  'Agribusiness Leadership, Management & Entrepreneurship',
  'Poultry Production Masterclass (Breeders, Layers & Broilers)',
  'Leadership and Workplace Communication Programme',
  'Building and Managing High-Performance C-Suite Teams',
  'Soybean Extrusion and Processing Techniques',
  'Unlocking Agribusiness Grants and Funding Opportunities',
  'Good Manufacturing Practices (GMP) for Agribusiness',
  'Project Management Essentials for Agribusiness',
  'Effective Project Delivery in Agribusiness Organisations',
]

const alliances = [
  {
    icon: 'fa-solid fa-wheat-awn',
    name: 'US Soybean Export Council (USSEC)',
    text: 'Training in poultry, aquaculture, and feed management.',
  },
  {
    icon: 'fa-solid fa-seedling',
    name: 'International Institute of Tropical Agriculture (IITA)',
    text: 'Joint programs in crop production and human capacity development.',
  },
  {
    icon: 'fa-solid fa-cow',
    name: 'Nigeria Institute of Animal Science (NIAS)',
    text: 'Support for livestock sector transformation.',
  },
]

const improvements = [
  'Soybean and poultry production',
  'Feed formulation and farm management',
  'Agribusiness profitability and sustainability',
]

export default function Programmes() {
  return (
    <div className="programmes-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Programmes</h1>
          <p>
            Our programs are delivered through in-person training sessions,
            hybrid models, and strategic outreach in collaboration with
            government and private institutions.
          </p>
        </div>
      </section>

      <section className="courses-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Our Programs</div>
            <h2 className="section-title">Our core training tracks</h2>
          </div>

          <div className="course-grid">
            {courses.map((course, index) => (
              <div className="course-card" key={course}>
                <span className="course-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <p>{course}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alliances-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Strategic Partnerships</div>
            <h2 className="section-title">Working with global and local institutions</h2>
            <p className="section-sub">
              We work with global and local institutions to enhance training
              quality and relevance.
            </p>
          </div>

          <div className="alliance-grid">
            {alliances.map((item) => (
              <div className="alliance-card" key={item.name}>
                <div className="alliance-icon">
                  <i className={item.icon}></i>
                </div>
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="section-inner impact-inner">
          <div className="impact-text">
            <div className="section-tag">Impact and Reach</div>
            <h2 className="section-title">Trained across Nigeria</h2>
            <p>
              Since its inception up to May 2025, Premier Agribusiness Academy
              has trained over 3,000 participants through a combination of
              virtual and in-person classes. Our programs emphasize small group
              learning, maintaining an average class size of 25 to foster deep
              understanding and immediate application.
            </p>
            <p>Our alumni have reported significant improvements in:</p>
            <ul className="impact-list">
              {improvements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="impact-stats">
            <div className="impact-stat">
              <div className="impact-number">
                <CountUp end={3000} suffix="+" />
              </div>
              <div className="impact-label">Participants trained</div>
            </div>
            <div className="impact-stat">
              <div className="impact-number">
                <CountUp end={25} />
              </div>
              <div className="impact-label">Average class size</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}