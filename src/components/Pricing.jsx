import { PRICING } from '../data'
import { CheckIcon } from '../graphics/Icons'
import { useCountUp, useInView } from '../hooks'
import Reveal from './Reveal'

function PlanGlyph({ kind }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' }
  return (
    <svg viewBox="0 0 48 48" className="price-glyph" aria-hidden="true">
      {kind === 'ring' && <circle cx="24" cy="24" r="11" {...common} />}
      {kind === 'tri' && <path d="M24 12 L36 34 H12 Z" {...common} />}
      {kind === 'hex' && <path d="M16 14 H32 L40 24 L32 34 H16 L8 24 Z" {...common} />}
    </svg>
  )
}

function Radar() {
  return (
    <svg className="price-radar" viewBox="0 0 1200 640" fill="none" aria-hidden="true">
      <g className="price-radar-spin">
        <circle className="price-radar-ring" cx="600" cy="320" r="90" />
        <circle className="price-radar-ring" cx="600" cy="320" r="170" />
        <circle className="price-radar-ring" cx="600" cy="320" r="260" />
        <circle className="price-radar-ring is-accent" cx="600" cy="320" r="350" />
        {[0, 45, 90, 135].map((deg) => (
          <line
            key={deg}
            x1="600"
            y1="320"
            x2={600 + 350 * Math.cos((deg * Math.PI) / 180)}
            y2={320 + 350 * Math.sin((deg * Math.PI) / 180)}
          />
        ))}
        <path className="price-radar-beam" d="M600 320 L950 180" />
      </g>
      <circle className="price-radar-core" cx="600" cy="320" r="6" />
    </svg>
  )
}

function PlanPrice({ price, period, active }) {
  const numeric = price === 'Custom' ? 0 : Number(price)
  const value = useCountUp(numeric, active && price !== 'Custom', 1100)

  if (price === 'Custom') return 'Custom'

  return (
    <>
      <span className="price-currency">$</span>
      {Math.round(value)}
      {period && <small>/ {period}</small>}
    </>
  )
}

export default function Pricing() {
  const [ref, visible] = useInView({ threshold: 0.12 })

  return (
    <section
      id="pricing"
      ref={ref}
      className={`section price-sec ${visible ? 'is-in' : ''}`}
      aria-labelledby="price-heading"
    >
      <Radar />
      <div className="price-orbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="wrap">
        <Reveal className="section-head center price-head">
          <span className="kicker">Pricing</span>
          <h2 id="price-heading">
            Predictive intelligence. <em>Priced for how you operate.</em>
          </h2>
          <p className="lede">
            Three ways to bring Averonix into your operations. Start with the capabilities you need and scale as your
            forecasting, planning, and intelligence requirements grow.
          </p>
        </Reveal>

        <div className="price-grid-3">
          {PRICING.map((item, i) => (
            <Reveal key={item.title} delay={90 + i * 140} className="price-reveal">
              <article className={`price-plan ${item.featured ? 'is-featured' : ''}`}>
                {item.featured && <span className="price-plan-badge">Featured</span>}
                <div className="price-plan-icon">
                  <span className="price-icon-ring" />
                  {item.image ? (
                    <img src={item.image} alt="" className="price-plan-mark-img" />
                  ) : (
                    <PlanGlyph kind={item.icon} />
                  )}
                </div>
                <span className="price-plan-label">{item.label}</span>
                <div className="price-plan-mark">
                  <PlanPrice price={item.price} period={item.period} active={visible} />
                </div>
                <p className="price-plan-audience">{item.audience}</p>
                <ul className="price-plan-points">
                  {item.points.map((point) => (
                    <li key={point}>
                      <CheckIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className={`btn ${item.featured ? 'btn-primary' : 'btn-ghost'} price-plan-cta`}
                  href="#contact"
                >
                  <PlanGlyph kind={item.icon} />
                  {item.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
