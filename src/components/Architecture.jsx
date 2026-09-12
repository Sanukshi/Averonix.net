import { useEffect, useRef, useState } from 'react'
import { DATA_SOURCES, PIPELINE } from '../data'

export default function Architecture() {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(null)
  const [shown, setShown] = useState(false)
  const closeTimer = useRef(null)
  const lastPill = useRef(null)
  const dialogRef = useRef(null)
  const current = PIPELINE[active]
  const detail = open == null ? null : PIPELINE[open]
  const prevStage = open == null ? null : PIPELINE[(open - 1 + PIPELINE.length) % PIPELINE.length]
  const nextStage = open == null ? null : PIPELINE[(open + 1) % PIPELINE.length]

  function highlight(index) {
    const next = (index + PIPELINE.length) % PIPELINE.length
    setActive(next)
    requestAnimationFrame(() => {
      document.getElementById(`arch-pill-${next}`)?.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
      })
    })
  }

  function openStage(index) {
    const i = (index + PIPELINE.length) % PIPELINE.length
    window.clearTimeout(closeTimer.current)
    lastPill.current = document.getElementById(`arch-pill-${i}`)
    setActive(i)
    setOpen(i)
    requestAnimationFrame(() => setShown(true))
  }

  function closeStage() {
    setShown(false)
    closeTimer.current = window.setTimeout(() => {
      setOpen(null)
      lastPill.current?.focus()
    }, 320)
  }

  function onTrackKey(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      openStage(active)
      return
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      highlight(active + 1)
    }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      highlight(active - 1)
    }
    if (e.key === 'Home') {
      e.preventDefault()
      highlight(0)
    }
    if (e.key === 'End') {
      e.preventDefault()
      highlight(PIPELINE.length - 1)
    }
  }

  useEffect(() => {
    if (open == null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeStage()
      if (!shown) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        openStage(open + 1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        openStage(open - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    dialogRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, shown])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  return (
    <section id="architecture" className="section arch-sec" aria-labelledby="arch-heading">
      <div className="wrap">
        <div className="section-head split">
          <div>
            <span className="kicker">Architecture</span>
            <h2 id="arch-heading">
              Eight sources. <em>Eight stages.</em>
            </h2>
          </div>
          <p className="lede">
            Averonix does not sit beside the enterprise stack. It ingests it, then runs a defined technical pipeline
            from signal to operational plan. Click a stage to open it.
          </p>
        </div>
        <p className="chips-label">Data sources</p>
        <div className="chips">
          {DATA_SOURCES.map((src) => (
            <span className="chip" key={src}>
              {src}
            </span>
          ))}
        </div>
      </div>

      <div className="arch-catalogue">
        <div className="arch-rail" aria-hidden="true">
          <span className="arch-rail-arrow">↗</span>
          <span className="arch-rail-label">Architecture</span>
        </div>

        <div className="arch-main">
          <p className="chips-label">Processing pipeline</p>
          <div
            className="arch-track"
            role="listbox"
            aria-label="Eight-stage processing pipeline"
            tabIndex={0}
            onKeyDown={onTrackKey}
          >
            {PIPELINE.map((stage, i) => (
              <button
                key={stage.n}
                id={`arch-pill-${i}`}
                type="button"
                role="option"
                aria-selected={i === active}
                aria-haspopup="dialog"
                aria-label={`${stage.n} ${stage.title} — open stage detail`}
                className={`arch-pill ${i % 2 === 0 ? 'is-up' : 'is-down'} ${i === active ? 'is-on' : ''} ${
                  stage.risk ? 'is-risk' : ''
                }`}
                onClick={() => openStage(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <img src={stage.image} alt="" />
                <span className="arch-pill-fade" />
                <span className="arch-pill-meta">
                  <span className="arch-n">{stage.n}</span>
                  <span className="arch-pill-title">{stage.title}</span>
                </span>
              </button>
            ))}
          </div>

          <p className={`arch-caption ${current.risk ? 'is-risk' : ''}`}>
            <b>
              {current.n} · {current.title}
            </b>
            {current.text} Click the stage for the full handoff.
          </p>
        </div>
      </div>

      {detail && (
        <div className={`arch-pop ${shown ? 'is-in' : ''} ${detail.risk ? 'is-risk' : ''}`} role="presentation">
          <button type="button" className="arch-pop-dim" aria-label="Close stage detail" onClick={closeStage} />
          <div
            ref={dialogRef}
            className="arch-pop-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="arch-pop-title"
            tabIndex={-1}
          >
            <button type="button" className="arch-pop-close" onClick={closeStage} aria-label="Close">
              ×
            </button>

            <div className="arch-pop-grid" key={open}>
              <div className="arch-pop-photo">
                <img src={detail.image} alt="" />
                <span className="arch-pop-n" aria-hidden="true">
                  {detail.n}
                </span>
              </div>

              <div className="arch-pop-copy">
                <span className="kicker">
                  Stage {detail.n} of {String(PIPELINE.length).padStart(2, '0')}
                </span>
                <h3 id="arch-pop-title">{detail.title}</h3>
                <p className="lede">{detail.text}</p>

                <div className="arch-pop-io">
                  <div>
                    <span>Takes in</span>
                    <p>{detail.input}</p>
                  </div>
                  <div>
                    <span>Hands off</span>
                    <p>{detail.output}</p>
                  </div>
                </div>

                <div className="arch-pop-dots" aria-hidden="true">
                  {PIPELINE.map((stage, i) => (
                    <button
                      key={stage.n}
                      type="button"
                      className={`${i === open ? 'is-on' : ''} ${i < open ? 'is-done' : ''} ${stage.risk ? 'is-risk' : ''}`}
                      onClick={() => openStage(i)}
                      aria-label={`Open ${stage.title}`}
                    />
                  ))}
                </div>

                <div className="arch-pop-nav">
                  <button type="button" className="btn btn-ghost" onClick={() => openStage(open - 1)}>
                    ← {prevStage.title}
                  </button>
                  {open === PIPELINE.length - 1 ? (
                    <a className="btn btn-primary" href="#contact" onClick={closeStage}>
                      Averonix X.1
                      <span className="btn-arrow-wrap">→</span>
                    </a>
                  ) : (
                    <button type="button" className="btn btn-primary" onClick={() => openStage(open + 1)}>
                      {nextStage.title}
                      <span className="btn-arrow-wrap">→</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
