import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import slide1 from '../assets/paa-slide1.jpg'
import slide2 from '../assets/paa-slide2.jpg'
import slide3 from '../assets/paa-slide3.jpg'

const slides = [
  {
    image: slide1,
    position: 'center 60%',
    tag: "Nigeria's Leading Agribusiness Academy",
    line1: 'Shape the Future',
    line2: 'You Deserve.',
    text: 'Premier Agribusiness Academy is dedicated to bridging the gap between agriculture and business by equipping individuals and organisations with practical agribusiness knowledge, innovative skills, and entrepreneurial capacity.',
    primary: { label: 'See more details', to: '/about-us' },
    secondary: { label: 'Our Programmes', to: '/programmes' },
  },
  {
    image: slide2,
    position: 'center 20%',
    tag: 'Practical Training',
    line1: 'Skills That Grow',
    line2: 'Real Businesses.',
    text: 'Our programs are delivered through in-person training sessions, hybrid models, and strategic outreach in collaboration with government and private institutions.',
    primary: { label: 'Explore Programmes', to: '/programmes' },
    secondary: { label: 'Consultancy', to: '/consultancy' },
  },
  {
    image: slide3,
    position: 'center 20%',
    tag: 'Trusted Partnerships',
    line1: 'Working Together',
    line2: 'For Food Security.',
    text: 'We work with global and local institutions such as IITA, USSEC and NIAS to enhance the quality and relevance of agribusiness training across Nigeria.',
    primary: { label: 'Our Partners', to: '/partnership' },
    secondary: { label: 'Contact Us', to: '/contact-us' },
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)

  function goTo(index) {
    setCurrent((index + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <div className="hero-slider">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={slide.tag}
            className={index === current ? 'hero-slide active' : 'hero-slide'}
            style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: slide.position }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <div className="hero-tag">{slide.tag}</div>
              <h1>
                {slide.line1}
                <br />
                <span>{slide.line2}</span>
              </h1>
              <p>{slide.text}</p>
              <div className="hero-btns">
                <Link to={slide.primary.to} className="btn-primary">
                  {slide.primary.label} &nbsp;<i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link to={slide.secondary.to} className="btn-outline">
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="slider-btn slider-prev"
        aria-label="Previous slide"
        onClick={() => goTo(current - 1)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <button
        className="slider-btn slider-next"
        aria-label="Next slide"
        onClick={() => goTo(current + 1)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>

      <div className="slider-dots">
        {slides.map((slide, index) => (
          <button
            key={slide.tag}
            className={index === current ? 'slider-dot active' : 'slider-dot'}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}