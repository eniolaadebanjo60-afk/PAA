import { Link } from 'react-router-dom'
import heroVideo from '../assets/paa-hero.mp4'
import heroPoster from '../assets/paa-hero-poster.jpeg'

export default function HeroVideo() {
  return (
    <section className="hero-video">
      <video
        className="hero-video-media"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-video-overlay"></div>

      <div className="hero-video-content">
        <div className="hero-video-inner">
          <h1>
            Shape the Future
            <br />
            <span>You Deserve.</span>
          </h1>
          <p>
            Premier Agribusiness Academy is dedicated to bridging the gap
            between agriculture and business by equipping individuals and
            organisations with practical agribusiness knowledge, innovative
            skills, and entrepreneurial capacity to thrive in the
            agricultural value chain.
          </p>
          <Link to="/about-us" className="btn-primary hero-video-btn">
            See More Details &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}