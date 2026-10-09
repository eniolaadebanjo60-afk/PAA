import ProgressRing from '../components/ProgressRing'
import '../styles/about.css'

const stats = [
  { end: 96, label: 'Participant Satisfaction' },
  { end: 94, label: 'Practical Application' },
  { end: 95, label: 'Career Growth & Advancement' },
  { end: 93, label: 'Expert & Industry Faculty' },
]

const values = [
  {
    title: 'Excellence',
    text: 'We are committed to high standards in curriculum design, facilitation, and participant outcomes.',
  },
  {
    title: 'Innovation',
    text: 'We develop and deliver forward-thinking solutions based on research and evolving sector needs.',
  },
  {
    title: 'Integrity',
    text: 'We operate with honesty and transparency in all our engagements.',
  },
  {
    title: 'Collaboration',
    text: 'We thrive through partnerships that amplify our impact and effectiveness.',
  },
  {
    title: 'Sustainability',
    text: 'We promote practices that support long-term success in agriculture and agribusiness.',
  },
]

const milestones = [
  {
    years: '2018–2019',
    title: 'Development and Rollout of Training Programs',
    paragraphs: [
      {
        text: 'The PAA was inaugurated in 2018, even though appropriate training began in 2019. The academy began on a platform of innovative thinking and problem-solving competencies for decision-making, and it welcomed its inaugural training session in Lagos.',
      },
      {
        lead: 'Diversified Training Portfolio:',
        text: 'PAA has also designed and offered different training courses in agribusiness management, supply chain management, logistics, and technical agricultural skills. The trainings include poultry value chain coordination, soya bean production, aquaculture management, and feeding management.',
      },
    ],
    side: 'left',
  },
  {
    years: '2020 and 2023',
    title: 'Collaboration with Foreign Organizations',
    paragraphs: [
      {
        text: "PAA organized a study of Nigeria's poultry industry, e.g., market size, challenges, and improvement areas.",
      },
      {
        text: 'PAA was the centre lead to Nigeria Soy Excellence Centre between 2020 and 2023.',
      },
      {
        lead: 'Collaboration with the International Institute of Tropical Agriculture (IITA):',
        text: 'PAA collaborates with the IITA for the execution of quality training in commercial agriculture and agricultural management.',
      },
      {
        lead: 'Impact and Extent of Training:',
        text: 'From 2020 up to September 2022, PAA had trained over 3,000 agribusiness stakeholders in the six geo-political zones of Nigeria on ToT level in-person and self paced hybrid. In addition, several webinars have been organised on topical issues by PAA.',
      },
      {
        text: 'Training has been directed towards various groups of people including managing directors, chief executive officers, and agribusiness experts to enable the enhancement of their decision-making and organizational skills.',
      },
    ],
    side: 'right',
  },
]

export default function About() {
  return (
    <div className="about-page">
      <section className="page-hero about-hero">
        <div className="section-inner">
          <h1>About Us</h1>
          <p>Nigeria's leading learning and development institution for agribusiness.</p>
        </div>
      </section>

      <section className="story-section">
        <div className="section-inner story-inner">
          <div className="story-text">
            <h2 className="story-heading">Who we are?</h2>
            <p className="story-lead">
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
            <p className="story-lead">
              We specialize in well-researched, practical, and
              industry-relevant training that empowers farmers, agripreneurs,
              executives, and policy stakeholders to adopt modern practices
              and scale sustainable agricultural ventures.
            </p>
          </div>

          <div className="story-image-wrap">
            <div className="story-image story-image-top"></div>
          </div>
        </div>
      </section>

      <section className="band-section">
        <div className="band-overlay"></div>
        <div className="band-content">
          <h2>Empowering Minds,<br />Shaping Futures</h2>
        </div>
      </section>

      <section className="history-section">
        <div className="section-inner history-inner">
          <div className="history-image-wrap">
            <div className="history-image"></div>
          </div>
          <div className="history-text">
            <h2 className="history-heading">History</h2>
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
        </div>
      </section>

      <section className="why-section">
        <div className="section-inner">
          <div className="why-header">
            <h2 className="why-heading">Why Choose Us?</h2>
            <p className="why-sub">
              At Premier AgriBusiness Academy, our results speak for themselves.
              With expert faculty, industry-relevant content, and practical
              learning approaches, we empower participants to grow their
              careers and businesses with confidence.
            </p>
          </div>

          <div className="rings-grid">
            {stats.map((stat) => (
              <ProgressRing
                key={stat.label}
                value={stat.end}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mv-section">
        <div className="section-inner mv-inner">
          <div className="mv-text">
            <div className="mv-block">
              <h2>Mission</h2>
              <p>
                To facilitate human capital development in response to the
                growing needs of the agri-sector globally.
              </p>
            </div>

            <div className="mv-block">
              <h2>Vision</h2>
              <p>
                To be one of the world's leading centres of learning,
                developing, and transferring well-researched and innovative
                competencies required for sustainable investment in all allied
                industries of the agri-sector.
              </p>
            </div>

            <div className="mv-block">
              <h2>Core Values</h2>
              <ul className="mv-values-list">
                {values.map((v) => (
                  <li key={v.title}>
                    <strong>{v.title}:</strong> {v.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mv-image-wrap">
            <div className="mv-image"></div>
          </div>
        </div>
      </section>

      <section className="milestones-section">
        <div className="section-inner">
          <h2 className="milestones-heading">Milestones</h2>

          <div className="timeline">
            {milestones.map((item) => (
              <div className={`timeline-row timeline-${item.side}`} key={item.years}>
                <div className="timeline-meta">
                  <span className="timeline-years">{item.years}</span>
                  <span className="timeline-meta-title">{item.title}</span>
                </div>

                <div className="timeline-node"></div>

                <div className="timeline-card">
                  <h3>{item.title}</h3>
                  {item.paragraphs.map((p, i) => (
                    <p key={i}>
                      {p.lead && <strong>{p.lead} </strong>}
                      {p.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}