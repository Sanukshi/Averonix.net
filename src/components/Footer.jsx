import { useState } from 'react'
import { OFFICES, QUICK_LINKS, SOCIAL } from '../data'
import { LogoMark, SocialIcon } from '../graphics/Icons'

function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

function SocialLinks() {
  return (
    <div className="footer-social" aria-label="Social">
      {SOCIAL.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
        >
          <SocialIcon id={item.id} />
        </a>
      ))}
    </div>
  )
}

export default function Footer() {
  const [done, setDone] = useState(false)

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="news-row">
          <div>
            <h3>Subscribe to the access list</h3>
            <p>Documentation has not shipped yet. Leave a work email if you want to be notified when it does.</p>
          </div>
          {done ? (
            <p className="news-ok">Noted in this browser — no email was sent from this static site.</p>
          ) : (
            <form
              className="news-form"
              onSubmit={(e) => {
                e.preventDefault()
                setDone(true)
              }}
            >
              <input type="email" required placeholder="Work email" aria-label="Work email" />
              <button className="btn btn-primary" type="submit">
                Subscribe
                <span className="btn-arrow-wrap">→</span>
              </button>
            </form>
          )}
        </div>
        <div className="footer-grid">
          <div>
            <a href="#home" className="brand" aria-label="Averonix home">
              <LogoMark size={32} />
            </a>
            <p>
              AI forecasting and predictive operations for manufacturing, finance, and supply chain organizations. Five
              engines. Eight sources. An eight-stage pipeline from ingestion to the plan.
            </p>
            <SocialLinks />
          </div>
          <div>
            <h4>Quick links</h4>
            <div className="footer-links">
              {QUICK_LINKS.map((n) => (
                <a key={n.href} href={n.href}>
                  {n.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4>Explore</h4>
            <div className="footer-links">
              <a href="#platform">Capabilities</a>
              <a href="#architecture">Architecture</a>
              <a href="#pricing">Pricing models</a>
            </div>
          </div>
          <div>
            <h4>Access</h4>
            <div className="footer-links">
              <a href="/product">Averonix X.1</a>
              <a href="#faq">FAQ</a>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms and Conditions</a>
              <span>Documentation — coming soon</span>
            </div>
          </div>
        </div>
        <div className="footer-offices">
          {OFFICES.map((office) => (
            <address key={office.name} className="office-card is-footer">
              <span>{office.region}</span>
              <strong>{office.name}</strong>
              <p>{office.address}</p>
              <a href={telHref(office.phone)}>{office.phone}</a>
            </address>
          ))}
        </div>
        <div className="copyright">
          <span>© {new Date().getFullYear()} Averonix Technologies Inc. All rights reserved.</span>
          <nav className="footer-legal" aria-label="Legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms and Conditions</a>
          </nav>
          <span>averonix.net</span>
        </div>
      </div>
    </footer>
  )
}
