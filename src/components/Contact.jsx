import { useState } from 'react'
import { OFFICES } from '../data'

function telHref(phone) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact-sec">
      <div className="contact-bg" aria-hidden="true">
        <img src="/images/hero-banner.png" alt="" />
        <div className="contact-shade" />
      </div>
      <div className="wrap contact-grid">
        <div>
          <span className="kicker light">Contact</span>
          <h2>
            Request access to the <em>predictive layer.</em>
          </h2>
          <p className="lede">
            Tell us about the manufacturing, finance, or supply chain environment you want to put on a forward picture.
            We will follow up on access and deployment model.
          </p>
          <div className="contact-offices">
            {OFFICES.map((office) => (
              <address key={office.name} className="office-card">
                <span>{office.region}</span>
                <strong>{office.name}</strong>
                <p>{office.address}</p>
                <a href={telHref(office.phone)}>{office.phone}</a>
              </address>
            ))}
          </div>
        </div>
        {sent ? (
          <div className="form-success">
            <h3>Request received</h3>
            <p>
              This is a static site — your details stayed in the browser. Reach the Averonix team with the same
              information to continue access.
            </p>
          </div>
        ) : (
          <form className="form" onSubmit={onSubmit}>
            <div className="form-row">
              <label>
                Name
                <input name="name" type="text" required autoComplete="name" />
              </label>
              <label>
                Work email
                <input name="email" type="email" required autoComplete="email" />
              </label>
            </div>
            <label>
              Company
              <input name="company" type="text" required autoComplete="organization" />
            </label>
            <label>
              Message
              <textarea name="message" required placeholder="Environment, data sources, and what you need to forecast." />
            </label>
            <button className="btn btn-primary" type="submit">
              Averonix X.1
              <span className="btn-arrow-wrap">→</span>
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

