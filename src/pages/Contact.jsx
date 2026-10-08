import { useState } from 'react'
import '../styles/contact.css'

const contactCards = [
  {
    icon: 'fa-solid fa-envelope',
    title: 'Office Email',
    text: 'info@premieragribusinessacademy.com',
    href: 'mailto:info@premieragribusinessacademy.com',
  },
  {
    icon: 'fa-solid fa-phone',
    title: 'Office Phone',
    text: '+234 810 145 2322',
    href: 'tel:+2348101452322',
  },
  {
    icon: 'fa-solid fa-location-dot',
    title: 'Office Address',
    text: 'IITA COOP Guest House, 33 Omonigbehin Community, opposite IITA, Moniya District, Ibadan 200136, Oyo State, Nigeria.',
    href: '',
  },
]

const faqs = [
  {
    q: 'What is the goal of Premier Agribusiness Academy training programs?',
    a: "Our programs are designed to build capacity for personal, professional, and business growth. Whether you're learning agribusiness skills or professional competencies like communication, Excel, or leadership, our goal is to equip you with practical tools for success in the workplace or entrepreneurial space.",
  },
  {
    q: 'Who can attend these trainings?',
    a: 'We welcome aspiring and existing agribusiness entrepreneurs, youth corps members and fresh graduates, professionals seeking to upgrade their skills, retirees preparing for second careers, and government or corporate staff under capacity development initiatives.',
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Yes. All participants who complete the training and meet attendance and/or assessment criteria will receive a Certificate of Participation or Certificate of Competence.',
  },
  {
    q: 'Are the trainings practical?',
    a: 'Absolutely. All our programs emphasize hands-on learning through practical sessions, real-world scenarios, tools, simulations, and in agribusiness trainings, field demonstrations and live projects.',
  },
  {
    q: 'Are the trainings virtual or physical?',
    a: 'We offer virtual, physical, and hybrid delivery modes depending on the course and audience. This is always specified in the training schedule or invitation.',
  },
  {
    q: 'Will I receive post-training support?',
    a: 'Yes. Alumni benefit from mentorship and coaching sessions, webinars and refresher courses, access to our learning community and ongoing project updates, and support in sourcing tools, inputs, or templates (especially in agribusiness).',
  },
  {
    q: 'Do you provide training kits or materials?',
    a: 'Yes. All participants receive digital or printed training manuals, slides, templates, and relevant tools. Select agribusiness programs also provide starter packs or resource guides.',
  },
  {
    q: 'Is funding or grant access included?',
    a: "While we don't provide direct funding, we guide participants on writing business plans or funding proposals, accessing loans, grants, or cooperative networks, and partnering with relevant institutions and donor programs.",
  },
  {
    q: 'Can I apply what I learned in my job or business?',
    a: 'Yes. Our training is designed to be immediately applicable in professional roles, personal development, and agribusiness ventures.',
  },
  {
    q: 'What happens if I miss a session?',
    a: 'We strongly encourage full attendance. However, if you miss a session, recordings or make-up options (where available) will be provided. You may also join a future cohort.',
  },
  {
    q: 'How do I register for future training?',
    a: 'Call/WhatsApp 234 810 145 2322 or email info@premieragribusinessacademy.com.',
  },
  {
    q: 'Can I refer a friend or bring this training to my organization?',
    a: 'Yes! We offer group discounts, customized corporate training, train-the-trainer programs, and referral incentives (on select programs).',
  },
]

export default function Contact() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(index) {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="section-inner">
          <h1>Get in touch with us!</h1>
          <p>We would love to hear from you.</p>
        </div>
      </section>

      <section className="contact-cards-section">
        <div className="section-inner">
          <div className="contact-cards">
            {contactCards.map((card) => (
              <div className="contact-card" key={card.title}>
                <div className="contact-icon">
                  <i className={card.icon}></i>
                </div>
                <h3>{card.title}</h3>
                {card.href ? (
                  <a href={card.href}>{card.text}</a>
                ) : (
                  <p>{card.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="section-inner">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">Frequently asked questions</h2>
          </div>

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
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
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