import { useEffect, useState } from 'react'
import { NAV } from '../data'
import { useActiveSection, useScrolled } from '../hooks'
import { IconMenu, LogoMark } from '../graphics/Icons'

export default function Header() {
  const scrolled = useScrolled(40)
  const active = useActiveSection(NAV.map((n) => n.href))
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('hashchange', close)
    window.addEventListener('popstate', close)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('hashchange', close)
      window.removeEventListener('popstate', close)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap header-inner">
        <a href="#home" className="brand" aria-label="Averonix home">
          <LogoMark />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className={active === item.href ? 'is-active' : ''}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <span className="header-meta">averonix.net</span>
          <a className="btn btn-primary" href="/product">
            Averonix X.1
            <span className="btn-arrow-wrap" aria-hidden="true">
              →
            </span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <IconMenu open={open} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="mobile-nav" id="mobile-nav" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href ? 'is-active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
