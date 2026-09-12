import { useEffect, useRef, useState } from 'react'
import { SEGMENTS } from '../data'
import { SegmentIcon } from '../graphics/Icons'

export default function Solutions() {
  const track = useRef(null)
  const dialogRef = useRef(null)
  const lastCard = useRef(null)
  const closeTimer = useRef(null)
  const [open, setOpen] = useState(null)
  const [shown, setShown] = useState(false)
  const detail = open == null ? null : SEGMENTS[open]
  const prevSeg = open == null ? null : SEGMENTS[(open - 1 + SEGMENTS.length) % SEGMENTS.length]
  const nextSeg = open == null ? null : SEGMENTS[(open + 1) % SEGMENTS.length]

  function scroll(dir) {
    const el = track.current
    if (!el) return
    const card = el.querySelector('.sol-card')
    const amount = card ? card.getBoundingClientRect().width + 18 : 320
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  function openSeg(index) {
    const i = (index + SEGMENTS.length) % SEGMENTS.length
    window.clearTimeout(closeTimer.current)
    lastCard.current = document.getElementById(`sol-card-${i}`)
    setOpen(i)
    requestAnimationFrame(() => setShown(true))
  }

  function closeSeg() {
    setShown(false)
    closeTimer.current = window.setTimeout(() => {
      setOpen(null)
      lastCard.current?.focus()
    }, 320)
  }

  function onKey(e) {
    if (e.key === 'ArrowRight') scroll(1)
    if (e.key === 'ArrowLeft') scroll(-1)
  }

  useEffect(() => {
    if (open == null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') closeSeg()
      if (!shown) return
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        openSeg(open + 1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        openSeg(open - 1)
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
    <section id="solutions" className="solutions-band">
      <div className="wrap">
        <div className="sol-head">
          <div>
            <span className="kicker">Solutions</span>
            <h2>
              Providing <em>best solutions</em> of every kind
            </h2>
          </div>
          <div className="sol-head-right">
            <p>
              One predictive layer, used by the teams who have to commit capacity, capital, and service before the
              disruption is obvious. Click a card for the full picture.
            </p>
            <div className="sol-nav">
              <button type="button" aria-label="Previous segment" onClick={() => scroll(-1)}>
                ←
              </button>
              <button type="button" aria-label="Next segment" onClick={() => scroll(1)}>
                →
              </button>
            </div>
          </div>
        </div>
        <div className="sol-track" ref={track} tabIndex={0} onKeyDown={onKey} aria-label="Solution segments">
          {SEGMENTS.map((seg, i) => (
            <button
              type="button"
              className={`sol-card ${open === i ? 'is-on' : ''}`}
              id={`sol-card-${i}`}
              key={seg.title}
              aria-haspopup="dialog"
              aria-label={`${seg.title} — open description`}
              onClick={() => openSeg(i)}
            >
              <div className="sol-media">
                <img className="sol-photo" src={seg.image} alt="" />
                <SegmentIcon name={seg.title} />
              </div>
              <div className="sol-copy">
                <h3>{seg.title}</h3>
                <p>{seg.text}</p>
                <span className="card-go">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {detail && (
        <div className={`arch-pop ${shown ? 'is-in' : ''}`} role="presentation">
          <button type="button" className="arch-pop-dim" aria-label="Close solution detail" onClick={closeSeg} />
          <div
            ref={dialogRef}
            className="arch-pop-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sol-pop-title"
            tabIndex={-1}
          >
            <button type="button" className="arch-pop-close" onClick={closeSeg} aria-label="Close">
              ×
            </button>
            <div className="arch-pop-grid" key={open}>
              <div className="arch-pop-photo">
                <img src={detail.image} alt="" />
                <span className="sol-pop-icon">
                  <SegmentIcon name={detail.title} />
                </span>
              </div>
              <div className="arch-pop-copy">
                <span className="kicker">Solution</span>
                <h3 id="sol-pop-title">{detail.title}</h3>
                <p className="lede">{detail.detail}</p>
                <ul className="sol-pop-points">
                  {detail.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="arch-pop-nav">
                  <button type="button" className="btn btn-ghost" onClick={() => openSeg(open - 1)}>
                    ← {prevSeg.title}
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => openSeg(open + 1)}>
                    {nextSeg.title}
                    <span className="btn-arrow-wrap">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
