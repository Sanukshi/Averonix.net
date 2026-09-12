import { useState } from 'react'
import { FAQS } from '../data'

function ToggleIcon({ open }) {
  return (
    <svg className="faq-toggle-svg" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path d="M5 5 L15 15 M15 5 L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      ) : (
        <path d="M10 4 V16 M4 10 H16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  function toggle(i) {
    setOpen((current) => (current === i ? -1 : i))
  }

  return (
    <section id="faq" className="section faq-sec" aria-labelledby="faq-heading">
      <div className="wrap faq-layout">
        <figure className="faq-shot">
          <img
            src="/images/faq-layer.png"
            alt="Questions flowing into a predictive picture of plant, network, and plan"
          />
        </figure>

        <div className="faq-copy">
          <div className="section-head faq-head">
            <span className="kicker">FAQ</span>
            <h2 id="faq-heading">Frequently Asked Questions</h2>
          </div>

          <div className="faq-stack">
            {FAQS.map((item, i) => {
              const on = open === i
              return (
                <article key={item.q} className={`faq-pill ${on ? 'is-on' : ''}`}>
                  <button
                    type="button"
                    className="faq-pill-q"
                    aria-expanded={on}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span className="faq-pill-text">{item.q}</span>
                    <span className="faq-pill-btn" aria-hidden="true">
                      <ToggleIcon open={on} />
                    </span>
                  </button>
                  <div className="faq-pill-a" id={`faq-a-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                    <div>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
