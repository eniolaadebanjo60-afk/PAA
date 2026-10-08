import CountUp from '../components/CountUp'
import '../styles/about.css'

const stats = [
  { end: 96, label: 'Participant Satisfaction' },
  { end: 92, label: 'Practical Application' },
  { end: 88, label: 'Career Growth & Advancement' },
  { end: 100, label: 'Expert & Industry Faculty' },
]

const values = [
  {
    icon: 'fa-solid fa-award',
    title: 'Excellence',
    text: 'We are committed to high standards in curriculum design, facilitation, and participant outcomes.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    text: 'We develop and deliver forward-thinking solutions based on research and evolving sector needs.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Integrity',
    text: 'We operate with honesty and transparency in all our engagements.',
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Collaboration',
    text: 'We thrive through partnerships that amplify our impact and effectiveness.',
  },
  {
    icon: 'fa-solid fa-seedling',
    title: 'Sustainability',
    text: 'We promote practices that support long-term success in agriculture and agribusiness.',
  },
]

const milestones = [
  {
    years: '2018–2019',
    title: 'Development and rollout of training programs',
    paragraphs: [
      {
        text: 'The PAA was inaugurated in 2018, even though appropriate training began in 2019. The academy began on a platform of innovative thinking and problem-solving competencies for decision-making, and it welcomed its inaugural training session in Lagos.',
      },
      {
        lead: 'Diversified training portfolio:',
        text: 'PAA has also designed and offered different training courses in agribusiness management, supply chain management, logistics, and technical agricultural skills, including poultry value chain coordination, soya bean production, aquaculture management, and feeding management.',
      },
    ],
  },
  {
    years: '2020–2023',
    title: 'Collaboration with foreign organizations',
    paragraphs: [
      {
        text: "PAA organized a study of Nigeria's poultry industry (market size, challenges, and improvement areas) and was the centre lead of the Nigeria Soy Excellence Centre between 2020 and 2023.",
      },
      {
        lead: 'Collaboration with IITA:',
        text: 'PAA collaborates with the International Institute of Tropical Agriculture for the execution of quality training in commercial agriculture and agricultural management.',
      },
      {
        lead: 'Impact and extent of training:',
        text: 'From 2020 up to September 2022, PAA had trained over 3,000 agribusiness stakeholders in the six geo-political zones of Nigeria on ToT level, in-person and self-paced hybrid, and organised several webinars on topical issues. Training has been directed towards managing directors, chief executive officers, and agribusiness experts to enhance their decision-making and organizational skills.',
      },
    ],
  },
    {
    years: '2024–2025',
    title: 'Add the title here',
    paragraphs: [
      {
        text: 'Add what happened in this period here.',
      },
    ],
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>About us</h1>
          <p>
            Nigeria's leading learning and development institution for
            agribusiness.
          </p>
        </div>
      </section>

      <section className="story-section">
        <div className="section-inner story-inner">
          <div className="story-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">Equipping people to succeed in agribusiness</h2>
            <p>
              Premier Agribusiness Academy (PAA) is Nigeria's leading learning
              and development institution, dedicated to equipping individuals
              and organizations with the skills, knowledge, and competencies
              needed to succeed in the agricultural and allied sectors.
              Established in 2018 and headquartered at the IITA COOP Guest
              House, opposite IITA, in the Moniya District of Ibadan, we
              commenced the delivery of transformative training programs in
              2019. Since then, we have grown into a trusted hub for innovative
              agribusiness capacity development.
            </p>
            <p>
              We specialize in well-researched, practical, and
              industry-relevant training that empowers farmers, agripreneurs,
              executives, and policy stakeholders to adopt modern practices and
              scale sustainable agricultural ventures.
            </p>
          </div>
          <div className="story-image-wrap">
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      <section className="story-section story-alt">
        <div className="section-inner story-inner">
          <div className="story-text">
            <div className="section-tag">History</div>
            <h2 className="section-title">Built to bridge theory and practice</h2>
            <p>
              Founded in response to the urgent need for skilled human capital
              in agriculture, Premier Agribusiness Academy was created to
              bridge the gap between theory and practice in the agri-sector.
              Since launching its training activities in 2019, the Academy has
              expanded its reach through national and international
              collaborations, offering programs that directly impact
              agricultural productivity and profitability across Nigeria.
            </p>
            <p>
              We have delivered training interventions across the six
              geo-political zones of Nigeria in collaboration with esteemed
              partners such as the International Institute of Tropical
              Agriculture (IITA) and the United States Soybean Export Council
              (USSEC).
            </p>
            <p>
              <strong>
                From 2021 – 2023, Premier Agribusiness Academy was the Nigeria
                Center Lead for the US Soy Excellence Center in Sub-Saharan
                Africa (SSA).
              </strong>{' '}
              In this capacity, we coordinate and deliver specialized training
              programs in poultry production, aquaculture management, feed
              mill operations, and Soybean production management training in
              alignment with US Soy's mission to strengthen agribusiness
              capabilities globally.
            </p>
          </div>
          <div className="story-image-wrap">
            <div className="about-image"></div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="section-title">Results that speak for themselves</h2>
            <p className="section-sub">
              With expert faculty, industry-relevant content, and practical
              learning approaches, we empower participants to grow their
              careers and businesses with confidence.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <div className="stat-number">
                  <CountUp end={stat.end} suffix="%" />
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mv-section">
        <div className="section-inner mv-grid">
          <div className="mv-card">
            <div className="mv-icon">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <h3>Mission</h3>
            <p>
              To facilitate human capital development in response to the
              growing needs of the agri-sector globally.
            </p>
          </div>
          <div className="mv-card">
            <div className="mv-icon">
              <i className="fa-solid fa-eye"></i>
            </div>
            <h3>Vision</h3>
            <p>
              To be one of the world's leading centres of learning, developing,
              and transferring well-researched and innovative competencies
              required for sustainable investment in all allied industries of
              the agri-sector.
            </p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Core Values</div>
            <h2 className="section-title">What we stand for</h2>
          </div>

          <div className="values-grid">
            {values.map((value) => (
              <div className="value-card" key={value.title}>
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Milestones</div>
            <h2 className="section-title">Our journey so far</h2>
          </div>

          <div className="timeline">
            {milestones.map((item) => (
              <div className="timeline-item" key={item.years}>
                <span className="timeline-years">{item.years}</span>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph.text}>
                    {paragraph.lead && <strong>{paragraph.lead} </strong>}
                    {paragraph.text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}