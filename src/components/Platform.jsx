import { useState } from 'react'
import { CAPABILITIES } from '../data'
import { IconArrow } from '../graphics/Icons'
import Reveal from './Reveal'

function Card({ item, className, delay, open, onToggle }) {
  const id = `plat-desc-${item.title.replace(/\s+/g, '-').toLowerCase()}`

  return (
    <Reveal delay={delay} className={`plat-card ${className} ${open ? 'is-open' : ''}`} as="article">
      <div className="plat-shot">
        <img src={item.image} alt="" />
      </div>
      <div className="plat-copy">
        {item.tag && <span className="plat-tag">{item.tag}</span>}
        <h3>{item.title}</h3>
        <div className="plat-desc" id={id}>
          <p>{item.text}</p>
        </div>
        <button
          type="button"
          className="plat-more"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
        >
          {open ? 'Read less' : 'Read more'}
          <IconArrow />
        </button>
      </div>
    </Reveal>
  )
}

export default function Platform() {
  const featured = CAPABILITIES.filter((item) => item.featured)
  const rest = CAPABILITIES.filter((item) => !item.featured)
  const [open, setOpen] = useState(null)

  function toggle(title) {
    setOpen((current) => (current === title ? null : title))
  }

  return (
    <section id="platform" className="section platform-sec" aria-labelledby="platform-heading">
      <div className="plat-bg" aria-hidden="true">
        <img src="/images/sol-manufacturing.png" alt="" />
        <div className="plat-shade" />
      </div>
      <div className="wrap plat-wrap">
        <div className="plat-head">
          <div>
            <span className="kicker light">Platform</span>
            <h2 id="platform-heading">One predictive layer. Five engines you can act on.</h2>
          </div>
          <a className="btn btn-primary plat-browse" href="#architecture">
            View architecture
            <span className="btn-arrow-wrap">→</span>
          </a>
        </div>

        <div className="plat-wide">
          {featured.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              className="is-wide"
              delay={i * 70}
              open={open === item.title}
              onToggle={() => toggle(item.title)}
            />
          ))}
        </div>

        <div className="plat-stack">
          {rest.map((item, i) => (
            <Card
              key={item.title}
              item={item}
              className="is-tall"
              delay={140 + i * 70}
              open={open === item.title}
              onToggle={() => toggle(item.title)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
