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
      { text: '+234 810 145 2322', href: 'tel:+2348101452322' },
    ],
  },
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp',
    lines: [
      { text: 'Chat with us directly', href: 'https://wa.me/2348101452322', external: true },
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

const mapEmbed =
  'https://www.google.com/maps?q=IITA%20COOP%20Guest%20House%20Moniya%20Ibadan&output=embed'

const mapDirections =
  'https://www.google.com/maps/dir/?api=1&destination=IITA+COOP+Guest+House+Moniya+Ibadan'

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
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
    setTimeout(() => setSubmitted(false), 5000)
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
            <p className="contact-form-sub">
              Fill the form below and a member of our team will get back to you within 24 hours.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className={form.subject ? "has-value" : ""}
                  >
                    <option value="" disabled>Select a Subject *</option>
                    <option value="Training Enquiry">Training Enquiry</option>
                    <option value="Consultancy">Consultancy</option>
                    <option value="Partnership">Partnership</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn-primary submit-btn">
                Send Message
              </button>

              {submitted && (
                <div className="form-success">
                  <i className="fa-solid fa-circle-check"></i>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
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
                      <a 
                        key={i} 
                        href={line.href}
                        target={line.external ? "_blank" : undefined}
                        rel={line.external ? "noreferrer" : undefined}
                      >
                        {line.text}
                      </a>
                    ) : (
                      <p key={i}>{line.text}</p>
                    )
                  )}
                </div>
              </div>
            ))}

            <div className="find-us-block">
              <h3 className="find-us-heading">Find Us</h3>
              <div className="find-us-map">
                <iframe
                  title="Premier AgriBusiness Academy location"
                  src={mapEmbed}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a href={mapDirections} target="_blank" rel="noreferrer" className="find-us-btn">
                Get Directions &nbsp;<i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
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