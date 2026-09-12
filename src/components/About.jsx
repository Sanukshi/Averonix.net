import { useState } from 'react'
import { LAYER, PROBLEMS, SOLUTIONS } from '../data'
import { CheckIcon } from '../graphics/Icons'

const TABS = [
  { id: 'problem', label: 'The problem', items: PROBLEMS },
  { id: 'solution', label: 'The solution', items: SOLUTIONS },
  { id: 'layer', label: 'The layer', items: LAYER },
]

export default function About() {
  const [tab, setTab] = useState('problem')
  const current = TABS.find((t) => t.id === tab)

  return (
    <section id="about" className="section about-sec">
      <div className="wrap about-grid">
        <div className="about-side">
          <div className="about-frame">
            <img
              src="/images/about-who.png"
              alt="Operator looking from the office to the plant and network Averonix forecasts against"
            />
          </div>
          <img className="mini-plant" src="/images/about-layer.png" alt="Eight sources into one predictive layer" />
        </div>
        <div className="about-copy">
          <span className="kicker">Who we are</span>
          <h2>
            The future doesn’t wait for <em>the next report.</em>
          </h2>
          <p className="lede">
            Averonix gives organizations a predictive view of demand, operations, risk, and resources, turning the data
            they already have into intelligence they can act on.
          </p>
          <div className="tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`tab ${tab === t.id ? 'is-on' : ''}`}
                onClick={() => setTab(t.id)}
                role="tab"
                aria-selected={tab === t.id}
              >
                {t.label}
              </button>
            ))}
          </div>
          <ul className="checklist">
            {current.items.map((line) => (
              <li key={line}>
                <CheckIcon />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <div className="about-actions">
            <a className="btn btn-primary" href="#architecture">
              View architecture
              <span className="btn-arrow-wrap">→</span>
            </a>
            <a className="call-widget" href="#contact">
              <span className="phone-orb" aria-hidden="true">
                →
              </span>
              <span>
                <small>Have questions?</small>
                Averonix X.1
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
