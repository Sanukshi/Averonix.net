const stroke = {
  fill: 'none',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function LogoMark({ size = 36 }) {
  return (
    <img
      src="/logo.png"
      alt=""
      className="brand-logo"
      style={{ height: size }}
      draggable="false"
    />
  )
}

export function IconForecast() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon" fill="none" aria-hidden="true">
      <path d="M8 36 V12" stroke="currentColor" strokeWidth="1.6" {...stroke} />
      <path d="M8 36 H40" stroke="currentColor" strokeWidth="1.6" {...stroke} />
      <path d="M12 28 L20 20 L28 24 L38 12" stroke="currentColor" strokeWidth="1.8" {...stroke} />
      <path d="M38 12 H30 M38 12 V20" stroke="currentColor" strokeWidth="1.8" {...stroke} />
    </svg>
  )
}

export function IconOps() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon" fill="none" aria-hidden="true">
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 14 V24 L31 28" stroke="currentColor" strokeWidth="1.8" {...stroke} />
      <path d="M10 24 H14 M34 24 H38 M24 10 V14 M24 34 V38" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconRisk() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon card-icon-risk" fill="none" aria-hidden="true">
      <path d="M24 10 L40 36 H8 Z" stroke="currentColor" strokeWidth="1.7" {...stroke} />
      <path d="M24 20 V28" stroke="currentColor" strokeWidth="1.8" {...stroke} />
      <circle cx="24" cy="32.2" r="1.3" fill="currentColor" />
    </svg>
  )
}

export function IconScenario() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon" fill="none" aria-hidden="true">
      <path d="M12 34 C16 26 20 26 24 20" stroke="currentColor" strokeWidth="1.7" {...stroke} />
      <path d="M24 20 C28 14 32 16 36 12" stroke="currentColor" strokeWidth="1.7" strokeDasharray="3 2.5" {...stroke} />
      <path d="M24 20 C27 24 31 26 36 24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2.5" opacity="0.7" {...stroke} />
      <path d="M24 20 C26 28 30 32 36 34" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2.5" opacity="0.45" {...stroke} />
      <circle cx="24" cy="20" r="2" fill="currentColor" />
    </svg>
  )
}

export function IconSources() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon" fill="none" aria-hidden="true">
      <rect x="8" y="11" width="32" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8" y="21" width="32" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <rect x="8" y="31" width="32" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export function IconSignals() {
  return (
    <svg viewBox="0 0 48 48" className="card-icon" fill="none" aria-hidden="true">
      <path d="M12 32 V20 M20 34 V14 M28 32 V22 M36 36 V12" stroke="currentColor" strokeWidth="1.7" {...stroke} />
    </svg>
  )
}

export function IconArrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 9 H14 M10 5 L14 9 L10 13" stroke="currentColor" strokeWidth="1.5" {...stroke} />
    </svg>
  )
}

export function IconMenu({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      {open ? (
        <path d="M5 5 L17 17 M17 5 L5 17" stroke="currentColor" strokeWidth="1.6" {...stroke} />
      ) : (
        <path d="M4 6 H18 M4 11 H18 M4 16 H18" stroke="currentColor" strokeWidth="1.6" {...stroke} />
      )}
    </svg>
  )
}

const SEGMENT_PATHS = {
  Manufacturing: 'M8 32 V16 H16 V12 H24 V16 H32 V32 H8 Z M12 32 V24 H20 V32 M16 12 V8',
  'Supply chain': 'M8 24 H16 L20 16 H36 M16 24 L20 32 H36 M36 16 L40 20 L36 24 M36 28 L40 32 L36 36',
  Finance: 'M10 32 V16 H18 V32 M22 32 V12 H30 V32 M14 16 H10 M26 12 H22 M8 32 H36',
  Operations: 'M8 28 H40 M12 28 V18 L20 12 L28 18 V28 M24 20 V28',
  Planning: 'M10 12 H38 V36 H10 Z M10 18 H38 M16 18 V36 M16 24 H38',
  Analytics: 'M10 32 V22 M18 32 V14 M26 32 V18 M34 32 V10',
  Strategy: 'M24 8 L28 16 H36 L30 22 L32 32 L24 27 L16 32 L18 22 L12 16 H20 Z',
  'IT teams': 'M10 16 H38 V32 H10 Z M16 16 V12 H32 V16 M20 22 H28 M20 26 H26',
}

export function SegmentIcon({ name }) {
  return (
    <svg viewBox="0 0 48 48" className="seg-icon" fill="none" aria-hidden="true">
      <path d={SEGMENT_PATHS[name]} stroke="currentColor" strokeWidth="1.7" {...stroke} />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="8" stroke="#E86A1C" strokeWidth="1.2" />
      <path d="M5.2 9.2 L7.8 11.8 L12.8 6.4" stroke="#E86A1C" strokeWidth="1.6" {...stroke} />
    </svg>
  )
}

export function SocialIcon({ id }) {
  const common = { fill: 'currentColor' }
  if (id === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          {...common}
          d="M14.5 8.2h2.2V5.1h-2.2c-2.6 0-4.3 1.7-4.3 4.5V12H8.1v3.1h2.1V22h3.3v-6.9h2.4l.5-3.1h-2.9V10c0-1 .3-1.8 1.5-1.8Z"
        />
      </svg>
    )
  }
  if (id === 'x') {
    return (
      <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
        <path
          {...common}
          d="M17.6 3h2.8l-6.1 7 7.2 9.6h-5.6l-4.4-5.8L6.1 19.6H3.2l6.6-7.5L3 3h5.8l4 5.3L17.6 3Zm-1 14.9h1.6L7.5 4.6H5.8l10.8 13.3Z"
        />
      </svg>
    )
  }
  if (id === 'pinterest') {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
        <path
          {...common}
          d="M12 3.2A8.8 8.8 0 0 0 8.1 20c.1-.7.4-1.8.7-2.6.2-.5 1.4-5.4 1.4-5.4s-.4-.7-.4-1.8c0-1.7 1-2.9 2.2-2.9 1 0 1.5.8 1.5 1.7 0 1-.7 2.6-1 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.6-2.7 3.6-5.9 0-2.4-1.6-4.2-4.6-4.2-3.3 0-5.4 2.5-5.4 5.2 0 .9.3 1.6.7 2.1.1.1.1.2.1.3l-.3 1.1c0 .2-.2.3-.4.2-1.5-.6-2.2-2.3-2.2-4.1 0-3.1 2.6-6.8 7.8-6.8 4.2 0 6.9 3 6.9 6.3 0 4.3-2.4 7.5-5.9 7.5-1.2 0-2.3-.6-2.6-1.4l-.7 2.7c-.3 1-1 2.2-1.5 3A8.8 8.8 0 1 0 12 3.2Z"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
      <path
        {...common}
        d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2.1 12a28 28 0 0 0 .3 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 21.9 12a28 28 0 0 0-.3-4.8ZM10 15.2V8.8l5.3 3.2L10 15.2Z"
      />
    </svg>
  )
}

export function TechBadge({ name, color }) {
  return (
    <svg viewBox="0 0 160 56" className="tech-svg" aria-hidden="true">
      <rect x="1" y="1" width="158" height="54" rx="8" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="28" r="6" fill={color} />
      <path d="M18 28 H26 M22 24 V32" stroke="#14110F" strokeWidth="1.4" />
      <text x="38" y="33" fill="currentColor" fontFamily="Oswald, sans-serif" fontSize="13" letterSpacing="0.08em">
        {name.toUpperCase()}
      </text>
    </svg>
  )
}
