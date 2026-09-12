import { STEPS } from '../data'
import { IconForecast, IconOps, IconRisk, IconSignals, IconSources } from '../graphics/Icons'
import Reveal from './Reveal'

const ICONS = {
  sources: IconSources,
  signals: IconSignals,
  forecast: IconForecast,
  risk: IconRisk,
  ops: IconOps,
}

function StepCard({ step, index, className = '' }) {
  const Icon = ICONS[step.icon]
  return (
    <article
      className={`how-card ${step.icon === 'risk' ? 'is-risk' : ''} ${className}`}
      style={{ '--how-d': `${index * 0.8}s` }}
    >
      <span className="how-card-glow" aria-hidden="true" />
      <span className="how-card-n" aria-hidden="true">
        {step.n}
      </span>
      <span className="how-card-icon">
        <span className="how-card-icon-ring" aria-hidden="true" />
        <Icon />
      </span>
      <div className="how-card-body">
        <span className="how-card-step">Step {step.n}</span>
        <h3>{step.title}</h3>
        <p>{step.text}</p>
        <div className="how-card-flow" aria-hidden="true">
          {STEPS.map((item, i) => (
            <span key={item.n} className={i === index ? 'is-on' : i < index ? 'is-done' : ''} />
          ))}
        </div>
      </div>
    </article>
  )
}

export default function HowItWorks() {
  const [first, second, third, fourth, fifth] = STEPS

  return (
    <section id="how-it-works" className="section how-sec" aria-labelledby="how-heading">
      <div className="wrap">
        <div className="how-shell">
          <div className="section-head center how-head">
            <span className="kicker">How it works</span>
            <h2 id="how-heading">
              From enterprise data to <em>proactive operations.</em>
            </h2>
            <p className="lede">
              Five steps. One predictive cycle. From connected sources to emerging signals, forecasts, and a clear path
              operations can execute.
            </p>
          </div>

          <div className="how-board">
            <div className="how-col">
              <Reveal delay={40}>
                <StepCard step={first} index={0} />
              </Reveal>
              <Reveal delay={120}>
                <StepCard step={second} index={1} />
              </Reveal>
            </div>

            <figure className="how-shot">
              <img
                src="/images/how-it-works.png"
                alt="Eight-stage pipeline from enterprise sources through to the operational plan"
              />
            </figure>

            <div className="how-col">
              <Reveal delay={80}>
                <StepCard step={third} index={2} />
              </Reveal>
              <Reveal delay={160}>
                <StepCard step={fourth} index={3} />
              </Reveal>
            </div>
          </div>

          <Reveal delay={200}>
            <StepCard step={fifth} index={4} className="is-end" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

