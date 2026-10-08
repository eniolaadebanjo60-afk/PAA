import { useState, useEffect } from 'react'

const testimonials = [
  {
    initials: 'NN',
    name: 'Ngozi Nwafor',
    role: 'Agribusiness Manager',
    text: `"Premier AgriBusiness Academy opened my eyes to the business side of agriculture. The training on leadership and business acumen helped me improve how I manage people and resources. I now approach agribusiness not just as production, but as a structured enterprise with growth potential."`,
  },
  {
    initials: 'TA',
    name: 'Tunde Akinpelu',
    role: 'Corporate Professional',
    text: `"What I gained from the Academy goes beyond agriculture. It's about personal and professional growth. From communication skills to resilience training, every session was practical and relevant. I feel more confident leading my team and making decisions in a fast-changing workplace."`,
  },
  {
    initials: 'UD',
    name: 'Usman Danladi',
    role: 'HR Professional',
    text: `"The sessions at Premier AgriBusiness Academy were eye-opening. I especially valued the focus on personal effectiveness and workplace culture. I have been able to apply these lessons in my organization, and the improvement in teamwork and productivity has been remarkable."`,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  function goTo(index) {
    setCurrent((index + testimonials.length) % testimonials.length)
  }

  // Auto-advance every 6 seconds (restarts after any change)
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [current])

  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <div className="section-tag">Participant Stories</div>
          <h2 className="section-title" style={{ color: 'var(--green)' }}>
            Testimonials
          </h2>
        </div>

        <div className="testimonials-slider">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div className="testimonial-card" key={item.name}>
                <div className="testimonial-quote">
                  <i className="fa-solid fa-quote-left"></i>
                </div>
                <p>{item.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{item.initials}</div>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="t-btn t-prev" aria-label="Previous" onClick={() => goTo(current - 1)}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="t-btn t-next" aria-label="Next" onClick={() => goTo(current + 1)}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="t-dots">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                className={index === current ? 'slider-dot active' : 'slider-dot'}
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => goTo(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}