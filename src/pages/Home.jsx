import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonial'
import '../styles/home.css'

const coreTracks = [
  'Creative Thinking and Problem-Solving for Decision-Making',
  'Supply Chain and Logistics Management',
  'Agronomy, Aquaculture, and Poultry Production Management',
  '"Farming Farmers Farms": a philosophy and methodology for agricultural transformation',
]

const featured = [
  {
    icon: 'fa-solid fa-user-check',
    title: 'Personal Effectiveness & Growth',
    items: [
      'Adaptability',
      'Attention to Details / Active Listening',
      'Creativity and Innovation / Creative Thinking',
      'Effective Stress Management',
      'Emotional Intelligence',
      'Improving Personal Effectiveness and Interpersonal Skills',
    ],
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Business Growth & Strategy',
    items: [
      'Business Acumen',
      'Proposal Development for a Successful Grant',
      'Introduction to Resource Mobilization',
      'Fundamentals of Grant Management',
      'Successful Sales Strategy',
      'Handling and Conversion of Objections to Opportunities',
      'Negotiation Skills',
    ],
  },
  {
    icon: 'fa-solid fa-people-group',
    title: 'Workplace Culture & Resilience',
    items: [
      'Employee Engagement and Career Development',
      'Ethics and Innovative Work Behaviour',
      'Ethics and Professionalism at Work',
      'Improving Team Effectiveness and Understanding Team Dynamics',
      'Managing Workplace Conflicts / Conflict Management',
      'Understanding and Managing Corporate Culture',
    ],
  },
]

const trainingVideo = ''

export default function Home() {
  return (
    <div className="home-page">
      <HeroSlider />
      <Partners />

      <section className="about-section">
        <div className="section-inner about-inner">
          <div className="about-image-wrap">
            <div className="image-placeholder"></div>
            <div className="about-badge">
              <span className="badge-number">2018</span>
              <span className="badge-label">Established</span>
            </div>
          </div>

          <div className="about-text">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title">
              Nigeria's leading learning institution for agribusiness
            </h2>
            <p>
              Premier Agribusiness Academy (PAA) is dedicated to equipping
              individuals and organizations with the skills, knowledge, and
              competencies needed to succeed in the agricultural and allied
              sectors. Established in 2018 and headquartered at the IITA COOP
              Guest House, opposite IITA, in the Moniya District of Ibadan, we
              commenced the delivery of transformative training programs in 2019.
            </p>
            <p>
              Since then, we have grown into a trusted hub for innovative
              agribusiness capacity development.
            </p>
            <Link to="/about-us" className="btn-primary">
              Read more &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="programmes-section">
        <div className="section-inner programmes-inner">
          <div className="programmes-text">
            <div className="section-tag">Our Programmes</div>
            <h2 className="section-title">Practical training, real results</h2>
            <p>
              Our programs are delivered through in-person training sessions,
              hybrid models, and strategic outreach in collaboration with
              government and private institutions. Our core training tracks
              focus on:
            </p>
            <ul className="track-list">
              {coreTracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
            <Link to="/programmes" className="btn-primary">
              Read more &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="programmes-image-wrap">
            {trainingVideo ? (
              <div className="video-frame">
                <iframe
                  src={trainingVideo}
                  title="PAA training session"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="video-frame video-empty">
                <i className="fa-solid fa-circle-play"></i>
              </div>
            )}
          </div>
        </div>
      </section>

            <section className="features-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">Featured Programmes</div>
            <h2 className="section-title">Learn skills that move your career forward</h2>
            <p className="section-sub">
              Our participants share how Premier AgriBusiness Academy shaped
              their journey.
            </p>
          </div>

          <div className="features-grid">
            {featured.map((group) => (
              <div className="feature-card" key={group.title}>
                <div className="feature-icon">
                  <i className={group.icon}></i>
                </div>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  )
}