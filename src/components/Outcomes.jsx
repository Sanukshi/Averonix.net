import { useRef, useState } from 'react'
import { OUTCOMES } from '../data'

function QuoteMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 48 36" fill="currentColor" aria-hidden="true">
      <path d="M0 36 V18 C0 7.2 7.4 0 18 0 h4 v10 h-4 c-4.6 0-8 3.2-8 8 v8 H0Zm26 0 V18 C26 7.2 33.4 0 44 0 h4 v10 h-4 c-4.6 0-8 3.2-8 8 v8 H26Z" />
    </svg>
  )
}

export default function Outcomes() {
  const track = useRef(null)
  const [active, setActive] = useState(1)

  function show(index) {
    const next = (index + OUTCOMES.length) % OUTCOMES.length
    setActive(next)
    const card = track.current?.querySelector(`[data-voice="${next}"]`)
    card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  function onKey(e) {
    if (e.key === 'ArrowRight') show(active + 1)
    if (e.key === 'ArrowLeft') show(active - 1)
  }

  return (
    <section className="section voice-sec" id="outcomes" aria-labelledby="voice-heading">
      <div className="wrap">
        <div className="voice-head">
          <p className="voice-note">Manufacturing · finance · supply chain</p>
          <h2 id="voice-heading">
            What our <em>clients</em> say
          </h2>
          <div className="voice-nav">
            <button type="button" aria-label="Previous client quote" onClick={() => show(active - 1)}>
              ←
            </button>
            <button type="button" aria-label="Next client quote" onClick={() => show(active + 1)}>
              →
            </button>
          </div>
        </div>

        <div className="voice-track" ref={track} tabIndex={0} onKeyDown={onKey} aria-label="Client quotes">
          {OUTCOMES.map((item, i) => {
            const on = active === i
            return (
              <article
                key={item.name}
                data-voice={i}
                className={`voice-card ${on ? 'is-on' : ''}`}
                onClick={() => show(i)}
                onFocus={() => show(i)}
                tabIndex={0}
                aria-current={on}
              >
                <div className="voice-shot">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="voice-panel">
                  <header>
                    <b>{item.name}</b>
                    <span>{item.tag}</span>
                  </header>
                  <QuoteMark className="voice-mark" />
                  <p>{item.quote}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
