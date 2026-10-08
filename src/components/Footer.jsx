import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-text">
              <strong>Premier AgriBusiness Academy</strong>
              <small>Shape the Future You Deserve</small>
            </div>
            <p>
              Nigeria's leading learning and development institution for
              agribusiness. Practical skills, real-world training, lasting impact.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/programmes">Programmes</Link></li>
              <li><Link to="/consultancy">Consultancy</Link></li>
              <li><Link to="/partnership">Partnerships</Link></li>
              <li><Link to="/media">Media</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <address>
              <strong>Phone</strong>
              <a href="tel:+2348101452322">+234 810 145 2322</a>
              <strong>Email</strong>
              <a href="mailto:info@premieragribusinessacademy.com">info@premieragribusinessacademy.com</a>
              <strong>Address</strong>
              IITA COOP Guest House, 33 Omonigbehin Community, opposite IITA,
              Moniya District, Ibadan 200136, Oyo State, Nigeria.
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Premier AgriBusiness Academy. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}