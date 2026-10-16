import { useState, useEffect } from 'react'

const testimonials = [
  {
    image: null,
    name: 'Ngozi Nwafor',
    role: 'Agribusiness Manager',
    text: 'Premier AgriBusiness Academy opened my eyes to the business side of agriculture. The training on leadership and business acumen helped me improve how I manage people and resources. I now approach agribusiness not just as production, but as a structured enterprise with growth potential.',
  },
  {
    image: null,
    name: 'Tunde Akinpelu',
    role: 'Corporate Professional',
    text: "What I gained from the Academy goes beyond agriculture. It's about personal and professional growth. From communication skills to resilience training, every session was practical and relevant. I feel more confident leading my team and making decisions in a fast-changing workplace.",
  },
  {
    image: null,
    name: 'Usman Danladi',
    role: 'HR Professional',
    text: 'The sessions at Premier AgriBusiness Academy were eye-opening. I especially valued the focus on personal effectiveness and workplace culture. I have been able to apply these lessons in my organization, and the improvement in teamwork and productivity has been remarkable.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = setTimeout(() => {
      setCurrent((c) => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearTimeout(timer)
  }, [current, paused])

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
        >
          <div
            className="testimonial-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <div className="testimonial-avatar">
                  {item.image ? (
                    <img src={item.image} alt={item.name} />
                  ) : (
                    <div className="testimonial-avatar-placeholder">
                      {item.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-text">"{item.text}"</p>
                  <div className="testimonial-meta">
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}