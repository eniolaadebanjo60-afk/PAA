import { Link } from 'react-router-dom'
import HeroVideo from '../components/HeroVideo'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonial'
import posts from '../data/posts.js'
import PostCard from '../components/PostCard.jsx'
import '../styles/home.css'

const coreTracks = [
  'Creative Thinking and Problem-Solving for Decision-Making',
  'Supply Chain and Logistics Management',
  'Agronomy, Aquaculture, and Poultry Production Management',
  '"Farming Farmers Farms": a philosophy and methodology for agricultural transformation',
]

const featured = [
  {
    title: 'Personal Effectiveness & Growth',
    image: null,
    text: 'Adaptability, active listening, creative thinking, stress management and emotional intelligence.',
  },
  {
    title: 'Leadership & Management',
    image: null,
    text: 'Leading change, building high-performance teams and managing the workplace with confidence.',
  },
  {
    title: 'Business Growth & Strategy',
    image: null,
    text: 'Business acumen, grant management, resource mobilization, sales strategy and negotiation.',
  },
]

const trainingVideo = ''

export default function Home() {
  return (
    <div className="home-page">
      <HeroVideo />
      <Partners />

      <section className="who-section">
        <div className="section-inner who-inner">
          <div className="who-image-wrap">
            <div className="who-image"></div>
          </div>

          <div className="who-text">
            <div className="section-tag who-tag">Who We Are</div>
            <h2 className="section-title who-title">Who we are</h2>
            <p className="who-lead">
              Premier Agribusiness Academy (PAA) is Nigeria's leading learning
              and development institution, dedicated to equipping individuals
              and organizations with the skills, knowledge, and competencies
              needed to succeed in the agricultural and allied sectors.
            </p>
            <p className="who-body">
              Established in 2018 and headquartered at the IITA COOP Guest
              House, opposite IITA, in the Moniya District of Ibadan, we
              commenced the delivery of transformative training programs in
              2019. Since then, we have grown into a trusted hub for innovative
              agribusiness capacity development.
            </p>
            <Link to="/about-us" className="btn-primary who-btn">
              Read More &nbsp;<i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      <section className="programmes-section">
        <div className="section-inner programmes-inner">
          <div className="programmes-text">
            <div className="section-tag">Our Programmes</div>
            <h2 className="section-title">Our Programmes</h2>
            <p>
              Our programs are delivered through in-person training sessions,
              hybrid models, and strategic outreach in collaboration with
              government and private institutions.
            </p>
            <p>Our core training tracks focus on:</p>
            <ul className="check-list">
              {coreTracks.map((track) => (
                <li key={track}>{track}</li>
              ))}
            </ul>
            <Link to="/programmes" className="btn-primary">
              Read More &nbsp;<i className="fa-solid fa-arrow-right"></i>
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
              <div className="programmes-image"></div>
            )}
          </div>
        </div>
      </section>

      
      <section className="features-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="features-title">Featured Programmes</h2>
          </div>

          <div className="features-grid">
            {featured.map((item) => (
              <Link to="/programmes" className="feature-card" key={item.title}>
                <div className="feature-img">
                  {item.image ? (
                    <img src={item.image} alt={item.title} />
                  ) : (
                    <div className="feature-placeholder">
                      <span>{item.title}</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="news-preview-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <h2 className="news-preview-title">Read Latest News</h2>
          </div>

          <div className="news-preview-grid">
            {posts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  )
}