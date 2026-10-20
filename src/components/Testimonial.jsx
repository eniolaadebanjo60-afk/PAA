import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    name: 'Ngozi Nwafor',
    role: 'Agribusiness Manager',
    text: 'Premier AgriBusiness Academy opened my eyes to the business side of agriculture. The training on leadership and business acumen helped me improve how I manage people and resources. I now approach agribusiness not just as production, but as a structured enterprise with growth potential.',
  },
  {
    name: 'Tunde Akinpelu',
    role: 'Corporate Professional',
    text: "What I gained from the Academy goes beyond agriculture. It's about personal and professional growth. From communication skills to resilience training, every session was practical and relevant. I feel more confident leading my team and making decisions in a fast-changing workplace.",
  },
  {
    name: 'Usman Danladi',
    role: 'HR Professional',
    text: 'The sessions at Premier AgriBusiness Academy were eye-opening. I especially valued the focus on personal effectiveness and workplace culture. I have been able to apply these lessons in my organization, and the improvement in teamwork and productivity has been remarkable.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [current, paused])

  function handleTouchStart(e) {
    touchStartX.current = e.targetTouches[0].clientX
  }

  function handleTouchEnd(e) {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current

    if (diff > 50) {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))
    } else if (diff < -50) {
      setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
    }
  }

  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="testimonials-title">Testimonials</h2>
        </div>

        <div
          className="testimonial-slider"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="testimonial-meta">
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${current === index ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}