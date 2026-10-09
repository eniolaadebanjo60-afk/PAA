import { useState } from 'react'
import '../styles/contact.css'

const contactCards = [
  {
    icon: 'fa-solid fa-envelope',
    title: 'Office Email',
    lines: [
      { text: 'info@premieragribusinessacademy.com', href: 'mailto:info@premieragribusinessacademy.com' },
    ],
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Office Phone',
    lines: [
      { text: '234 810 145 2322', href: 'tel:+2348101452322' },
    ],
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Office Address',
    lines: [
      {
        text: 'IITA COOP Guest House 33, Omonigbehin Community FWX7+VXG, opposite IITA, Moniya District, Ibadan 200136, Oyo State, Nigeria.',
      },
    ],
  },
]

const faqs = [
  {
    q: 'What is the goal of Premier Agribusiness Academy training programs?',
    a: [
      "Our programs are designed to build capacity for personal, professional, and business growth. Whether you're learning agribusiness skills or professional competencies like communication, Excel, or leadership, our goal is to equip you with practical tools for success in the workplace or entrepreneurial space.",
    ],
  },
  {
    q: 'Who can attend these trainings?',
    a: [
      'We welcome:',
      '• Aspiring and existing agribusiness entrepreneurs',
      '• Youth corps members and fresh graduates',
      '• Professionals seeking to upgrade their skills',
      '• Retirees preparing for second careers',
      '• Government or corporate staff under capacity development initiatives',
    ],
  },
  {
    q: 'Will I receive a certificate?',
    a: [
      'Yes. All participants who complete the training and meet attendance and/or assessment criteria will receive a Certificate of Participation or Certificate of Competence.',
    ],
  },
  {
    q: 'Are the trainings practical?',
    a: [
      'Absolutely. All our programs emphasize hands-on learning through practical sessions, real-world scenarios, tools, simulations, and in agribusiness trainings—field demonstrations and live projects.',
    ],
  },
  {
    q: 'Are the trainings virtual or physical?',
    a: [
      'We offer virtual, physical, and hybrid delivery modes depending on the course and audience. This is always specified in the training schedule or invitation.',
    ],
  },
  {
    q: 'Will I receive post-training support?',
    a: [
      'Yes. Our alumni benefit from:',
      '• Mentorship & coaching sessions',
      '• Webinars and refresher courses',
      '• Access to our learning community and ongoing project updates',
      '• Support in sourcing tools, inputs, or templates (especially in agribusiness)',
    ],
  },
  {
    q: 'Do you provide training kits or materials?',
    a: [
      'Yes. All participants receive digital or printed training manuals, slides, templates, and relevant tools. Select agribusiness programs also provide starter packs or resource guides.',
    ],
  },
  {
    q: 'Is funding or grant access included?',
    a: [
      "While we don't provide direct funding, we guide participants on:",
      '• Writing business plans or funding proposals',
      '• Accessing loans, grants, or cooperative networks',
      '• Partnering with relevant institutions and donor programs',
    ],
  },
  {
    q: 'Can I apply what I learned in my job or business?',
    a: [
      'Yes. Our training is designed to be immediately applicable in professional roles, personal development, and agribusiness ventures.',
    ],
  },
  {
    q: 'What happens if I miss a session?',
    a: [
      'We strongly encourage full attendance. However, if you miss a session, recordings or make-up options (where available) will be provided. You may also join a future cohort.',
    ],
  },
  {
    q: 'How do I register for future training?',
    a: [
      'Visit: www.premieragribusinessacademy.com',
      'Call/WhatsApp: 234 810 145 2322',
      'Email: info@premieragribusinessacademy.com',
    ],
  },
  {
    q: 'Can I refer a friend or bring this training to my organization?',
    a: [
      'Yes! We offer:',
      '• Group discounts',
      '• Customized corporate training',
      '• Train-the-trainer programs',
      '• Referral incentives (on select programs)',
    ],
  },
]

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(0)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    alert('Thanks for reaching out — we will get back to you shortly.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <section className="page-hero contact-hero">
        <div className="section-inner">
          <h1>Contact</h1>
        </div>
      </section>

      <section className="get-in-touch-section">
        <div className="section-inner get-in-touch-inner">
          <div className="contact-form-card">
            <h2>Get In Touch with Us!</h2>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info">
            {contactCards.map((card) => (
              <div className="contact-info-item" key={card.title}>
                <div className="contact-info-icon">
                  <i className={card.icon}></i>
                </div>
                <div className="contact-info-text">
                  <h3>{card.title}</h3>
                  {card.lines.map((line, i) =>
                    line.href ? (
                      <a key={i} href={line.href}>{line.text}</a>
                    ) : (
                      <p key={i}>{line.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-inner">
          <h2 className="faq-heading">Frequently Asked Questions</h2>

          <div className="faq-list">
            {faqs.map((item, index) => (
              <div
                className={openIndex === index ? 'faq-item open' : 'faq-item'}
                key={item.q}
              >
                <button
                  className="faq-question"
                  aria-expanded={openIndex === index}
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>
                  <i className="fa-solid fa-caret-down"></i>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    {item.a.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}