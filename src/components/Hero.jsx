import { useEffect, useState } from 'react'
import { useCountUp, useInView } from '../hooks'

const HERO_BG = '/images/hero-banner.png'
const HERO_SHOT = '/images/hero-image.png'

const STATS = [
  { n: 5, label: 'Predictive engines', kind: 'engines' },
  { n: 8, label: 'Data sources', kind: 'sources' },
  { n: 8, label: 'Stage pipeline', kind: 'pipeline' },
]

function StatMark({ kind }) {
  if (kind === 'engines') {
    return (
      <svg className="hero-stat-mark" viewBox="0 0 40 16" fill="none" aria-hidden="true">
        {[6, 13, 20, 27, 34].map((x) => (
          <circle key={x} cx={x} cy="8" r="2.4" />
        ))}
      </svg>
    )
  }
  if (kind === 'sources') {
    return (
      <svg className="hero-stat-mark" viewBox="0 0 40 16" fill="none" aria-hidden="true">
        <circle cx="20" cy="8" r="2.2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
          const rad = (deg * Math.PI) / 180
          return <circle key={deg} cx={20 + Math.cos(rad) * 6.5} cy={8 + Math.sin(rad) * 5} r="1.5" />
        })}
      </svg>
    )
  }
  return (
    <svg className="hero-stat-mark" viewBox="0 0 40 16" fill="none" aria-hidden="true">
      <path d="M3 11 H37" />
      {[5, 10, 15, 20, 25, 30, 35].map((x) => (
        <circle key={x} cx={x} cy="11" r="1.6" />
      ))}
      <path d="M5 11 V6 H12" />
    </svg>
  )
}

function HeroStat({ n, label, kind, active, delay }) {
  const value = useCountUp(n, active, 1100)

  return (
    <article className={`hero-stat ${active ? 'is-in' : ''}`} style={{ '--d': `${delay}ms` }}>
      <span className="hero-stat-line" aria-hidden="true" />
      <StatMark kind={kind} />
      <b>{Math.round(value)}</b>
      <span>{label}</span>
    </article>
  )
}

function ForecastOverlay({ animate }) {
  return (
    <svg
      className={`hero-shot-line ${animate ? 'is-on' : ''}`}
      viewBox="0 0 360 88"
      fill="none"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="359" height="87" rx="16" fill="rgba(20,17,15,0.72)" stroke="rgba(245,241,234,0.12)" />
      <text x="18" y="24" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="9" letterSpacing="0.16em">
        OBSERVED → PROJECTED
      </text>
      <path d="M18 62 C48 60 70 50 96 48 C118 46 132 58 156 52" stroke="#F5F1EA" strokeWidth="2.2" strokeLinecap="round" />
      <path
        d="M156 52 C180 46 198 36 228 38 C252 40 278 32 334 30"
        stroke="#49C7C0"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeDasharray="6 5"
      />
      <line x1="156" y1="38" x2="156" y2="76" stroke="rgba(245,241,234,0.28)" strokeDasharray="3 4" />
      <circle cx="156" cy="52" r="3.5" fill="#F5F1EA" />
      <circle cx="334" cy="30" r="3.5" fill="#49C7C0" />
    </svg>
  )
}

export default function Hero() {
  const [drawn, setDrawn] = useState(false)
  const [statRef, statsOn] = useInView({ threshold: 0.2 })

  useEffect(() => {
    const t = window.setTimeout(() => setDrawn(true), 80)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-stage" aria-label="Averonix hero">
        <img
          className="hero-photo is-on"
          src={HERO_BG}
          alt=""
        />
        <div className="hero-photo-shade" />

        <div className="hero-grid">
          <div className="hero-copy">
            <span className="kicker light">Predictive intelligence platform</span>
            <h1 className="hero-title">
              Predict what’s next.
              <em>Plan with precision.</em>
            </h1>
            <p className="lede">
              A predictive intelligence platform that transforms business and operational data into forecasts, risk
              insights, and actionable plans.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="/product">
                Averonix X.1
                <span className="btn-arrow-wrap">→</span>
              </a>
              <button
                className="btn btn-ghost light"
                type="button"
                aria-disabled="true"
                title="Documentation has not shipped yet"
              >
                View Documentation
                <span className="soon">Coming soon</span>
              </button>
            </div>
          </div>

          <figure className="hero-shot">
            <img
              className="is-on"
              src={HERO_SHOT}
              alt="Forward picture across plant, network, and forecast overlays"
            />
            <ForecastOverlay animate={drawn} />
          </figure>
        </div>

        <div className={`hero-statbar ${statsOn ? 'is-on' : ''}`} ref={statRef}>
          {STATS.map((item, i) => (
            <HeroStat key={item.label} {...item} active={statsOn} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}
