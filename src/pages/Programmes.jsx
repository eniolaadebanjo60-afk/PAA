import '../styles/programmes.css'

const courses = [
  'Creative Thinking and Problem-Solving for Decision-Making',
  'Supply Chain and Logistics Management',
  'Poultry Value Chain Analysis',
  'Agronomy, Aquaculture, and Poultry Production Management',
  '“Farming Farmers Farms” — a philosophy and methodology for agricultural transformation',
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
    name: 'US Soybean Export Council (USSEC)',
    text: 'Training in poultry, aquaculture, and feed management',
  },
  {
    name: 'International Institute of Tropical Agriculture (IITA)',
    text: 'Joint programs in crop production and human capacity development',
  },
  {
    name: 'Nigeria Institute of Animal Science (NIAS)',
    text: 'Support for livestock sector transformation',
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
      <section className="page-hero programmes-hero">
        <div className="section-inner">
          <h1>Programmes</h1>
        </div>
      </section>

      <section className="programs-section">
        <div className="section-inner programs-inner">
          <div className="programs-text">
            <h2 className="programs-heading">Our Programs</h2>
            <p className="programs-lead">
              Our programs are delivered through in-person training sessions,
              hybrid models, and strategic outreach in collaboration with
              government and private institutions.
            </p>
            <p className="programs-lead">Our core training tracks focus on:</p>
            <ul className="programs-list">
              {courses.map((course) => (
                <li key={course}>{course}</li>
              ))}
            </ul>
          </div>

          <div className="programs-image-wrap">
            <div className="programs-image"></div>
          </div>
        </div>
      </section>

      <section className="partnerships-impact-section">
        <div className="section-inner pi-inner">
          <div className="pi-image-wrap">
            <div className="pi-image"></div>
          </div>

          <div className="pi-text">
            <div className="pi-block">
              <h2>Strategic Partnerships</h2>
              <p className="pi-lead">
                We work with global and local institutions to enhance training
                quality and relevance:
              </p>
              <ul className="pi-list">
                {alliances.map((a) => (
                  <li key={a.name}>
                    <strong>{a.name}</strong> – {a.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pi-block">
              <h2>Impact and Reach</h2>
              <p className="pi-lead">
                Since its inception up to May 2025, Premier Agribusiness
                Academy has trained over <strong>3,000 participants</strong>{' '}
                through a combination of virtual and in-person classes. Our
                programs emphasize small group learning, maintaining an average
                class size of 25 to foster deep understanding and immediate
                application. Our alumni have reported significant improvements
                in:
              </p>
              <ul className="pi-list">
                {improvements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}