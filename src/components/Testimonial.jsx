import NN from '../assets/NN.jpg'
import TA from '../assets/TA.jpg'

const testimonials = [
  {
    image: NN,
    name: 'Ngozi Nwafor',
    role: 'Agribusiness Manager',
    text: 'Premier AgriBusiness Academy opened my eyes to the business side of agriculture. The training on leadership and business acumen helped me improve how I manage people and resources. I now approach agribusiness not just as production, but as a structured enterprise with growth potential.',
  },
  {
    image: TA,
    name: 'Tunde Akinpelu',
    role: 'Corporate Professional',
    text: 'What I gained from the Academy goes beyond agriculture. It\'s about personal and professional growth. From communication skills to resilience training, every session was practical and relevant. I feel more confident leading my team and making decisions in a fast-changing workplace.',
  },
]

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center' }}>
          <h2 className="testimonials-title">Testimonials</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}