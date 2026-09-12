import { useEffect, useRef } from 'react'

export function HeroVisual({ animate }) {
  const histRef = useRef(null)
  const futClipRef = useRef(null)

  useEffect(() => {
    if (!animate) return
    const hist = histRef.current
    if (hist) {
      const len = hist.getTotalLength()
      hist.style.strokeDasharray = `${len}`
      hist.style.strokeDashoffset = `${len}`
      hist.getBoundingClientRect()
      hist.style.transition = 'stroke-dashoffset 800ms ease-out'
      hist.style.strokeDashoffset = '0'
    }
    const clip = futClipRef.current
    if (clip) {
      clip.style.width = '0px'
      clip.getBoundingClientRect()
      clip.style.transition = 'width 700ms ease-out 280ms'
      clip.style.width = '140px'
    }
  }, [animate])

  return (
    <svg className="hero-visual" viewBox="0 0 640 560" fill="none" role="img" aria-label="Industrial silhouette with observed and projected forecast line">
      <defs>
        <linearGradient id="plantFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5F1EA" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#F5F1EA" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="panelGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#49C7C0" stopOpacity="0.12" />
          <stop offset="55%" stopColor="#E86A1C" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#14110F" stopOpacity="0" />
        </linearGradient>
        <clipPath id="heroClip">
          <path d="M0 28 C0 12 12 0 28 0 H612 C628 0 640 12 640 28 V478 C640 520 612 560 560 560 H0 V28 Z" />
        </clipPath>
        <clipPath id="heroFutClip">
          <rect ref={futClipRef} x="452" y="70" width="0" height="200" />
        </clipPath>
      </defs>

      <path d="M0 28 C0 12 12 0 28 0 H612 C628 0 640 12 640 28 V478 C640 520 612 560 560 560 H0 V28 Z" fill="#1D1815" />
      <path d="M0 28 C0 12 12 0 28 0 H612 C628 0 640 12 640 28 V478 C640 520 612 560 560 560 H0 V28 Z" stroke="rgba(245,241,234,0.1)" />
      <g clipPath="url(#heroClip)">
        <rect width="640" height="560" fill="url(#panelGlow)" />
        {[...Array(14)].map((_, i) => (
          <line key={`v${i}`} x1={40 + i * 44} y1="0" x2={40 + i * 44} y2="560" stroke="rgba(245,241,234,0.035)" />
        ))}
        {[...Array(12)].map((_, i) => (
          <line key={`h${i}`} x1="0" y1={40 + i * 44} x2="640" y2={40 + i * 44} stroke="rgba(245,241,234,0.035)" />
        ))}

        {/* Plant silhouette */}
        <g fill="url(#plantFade)" stroke="rgba(245,241,234,0.22)" strokeWidth="1.2">
          <rect x="48" y="268" width="92" height="168" />
          <rect x="78" y="214" width="32" height="54" />
          <rect x="86" y="168" width="16" height="46" />
          <rect x="152" y="236" width="118" height="200" />
          <rect x="176" y="196" width="28" height="40" />
          <rect x="222" y="184" width="22" height="52" />
          <rect x="284" y="292" width="78" height="144" />
          <rect x="308" y="248" width="30" height="44" />
          <path d="M86 168 L94 148 L102 168" fill="none" />
          <path d="M187 196 L190 176 L194 196" fill="none" />
          <path d="M230 184 L233 158 L236 184" fill="none" />
          <rect x="58" y="292" width="18" height="28" fill="none" />
          <rect x="100" y="292" width="18" height="28" fill="none" />
          <rect x="170" y="268" width="22" height="32" fill="none" />
          <rect x="210" y="268" width="22" height="32" fill="none" />
          <rect x="250" y="268" width="14" height="32" fill="none" />
          <path d="M48 436 H400" />
          <path d="M362 380 H430 V436 H362 Z" />
          <circle cx="396" cy="408" r="18" fill="none" />
          <circle cx="396" cy="408" r="8" fill="none" />
        </g>

        {/* Conveyor / pipe lines */}
        <g stroke="rgba(232,106,28,0.35)" strokeWidth="1.4" fill="none">
          <path d="M48 456 H430" />
          <path d="M270 292 C270 260 300 250 340 250 H470" />
        </g>

        {/* Chart panel */}
        <rect x="300" y="72" width="300" height="248" rx="12" fill="#14110F" stroke="rgba(245,241,234,0.1)" />
        <text x="318" y="98" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.18em">
          FORECAST LAYER
        </text>
        <text x="318" y="118" fill="#F5F1EA" fontFamily="Oswald, sans-serif" fontSize="18" letterSpacing="0.04em">
          OBSERVED → PROJECTED
        </text>

        {[200, 168, 136, 104].map((y) => (
          <line key={y} x1="318" y1={y} x2="580" y2={y} stroke="rgba(245,241,234,0.06)" />
        ))}

        <path
          ref={histRef}
          d="M318 210 C350 208 368 176 392 168 C416 160 430 188 452 174"
          stroke="#F5F1EA"
          strokeWidth="2.4"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M452 174 C476 158 492 120 520 128 C546 136 560 108 580 96"
          stroke="#49C7C0"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeDasharray="6 5"
          fill="none"
          clipPath="url(#heroFutClip)"
        />

        <line x1="452" y1="104" x2="452" y2="236" stroke="rgba(245,241,234,0.28)" strokeDasharray="3 4" />
        <circle cx="452" cy="174" r="4.5" fill="#F5F1EA" />
        <circle cx="580" cy="96" r="4" fill="#49C7C0" />

        <text x="430" y="252" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="9" letterSpacing="0.16em">
          TODAY
        </text>
        <text x="524" y="84" fill="#49C7C0" fontFamily="Work Sans, sans-serif" fontSize="9" letterSpacing="0.16em">
          PROJECTED
        </text>
      </g>
    </svg>
  )
}

export function AboutVisual({ mode }) {
  return (
    <svg className="about-visual" viewBox="0 0 480 560" fill="none" role="img" aria-label="Lagging operations versus predictive layer">
      <defs>
        <clipPath id="aboutClip">
          <path d="M0 36 C0 16 16 0 36 0 H480 V524 C480 544 464 560 444 560 H0 V36 Z" />
        </clipPath>
      </defs>
      <path d="M0 36 C0 16 16 0 36 0 H480 V524 C480 544 464 560 444 560 H0 V36 Z" fill="#1D1815" />
      <path d="M0 36 C0 16 16 0 36 0 H480 V524 C480 544 464 560 444 560 H0 V36 Z" stroke="rgba(245,241,234,0.1)" />
      <g clipPath="url(#aboutClip)">
        {[...Array(11)].map((_, i) => (
          <line key={i} x1={40 * i} y1="0" x2={40 * i} y2="560" stroke="rgba(245,241,234,0.04)" />
        ))}

        <g fill="rgba(245,241,234,0.08)" stroke="rgba(245,241,234,0.18)" strokeWidth="1.1">
          <rect x="36" y="300" width="70" height="140" />
          <rect x="116" y="248" width="96" height="192" />
          <rect x="226" y="276" width="64" height="164" />
          <rect x="58" y="256" width="18" height="44" />
          <rect x="148" y="208" width="22" height="40" />
          <path d="M36 440 H320" />
        </g>

        <rect x="48" y="48" width="384" height="220" rx="10" fill="#14110F" stroke="rgba(245,241,234,0.1)" />
        <text x="68" y="78" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="11" letterSpacing="0.18em">
          {mode === 'solution' ? 'PREDICTIVE LAYER' : 'LAGGING PICTURE'}
        </text>
        <text x="68" y="104" fill="#F5F1EA" fontFamily="Oswald, sans-serif" fontSize="20">
          {mode === 'solution' ? 'OPERATE AHEAD' : 'REPORT AFTER IMPACT'}
        </text>

        {[148, 176, 204, 232].map((y) => (
          <line key={y} x1="68" y1={y} x2="400" y2={y} stroke="rgba(245,241,234,0.06)" />
        ))}

        {mode === 'problem' ? (
          <>
            <path d="M68 210 C110 206 140 188 180 192 C230 198 260 230 320 228 C360 226 380 214 400 216" stroke="#A79D8F" strokeWidth="2.2" fill="none" />
            <circle cx="400" cy="216" r="4" fill="#D65A4A" />
            <text x="318" y="250" fill="#D65A4A" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.12em">
              RISK AT IMPACT
            </text>
          </>
        ) : (
          <>
            <path d="M68 210 C110 206 140 188 180 192 C210 194 230 180 256 176" stroke="#F5F1EA" strokeWidth="2.2" fill="none" />
            <path d="M256 176 C290 168 320 140 360 132 C380 128 392 118 400 110" stroke="#49C7C0" strokeWidth="2.2" strokeDasharray="6 5" fill="none" />
            <line x1="256" y1="128" x2="256" y2="232" stroke="rgba(245,241,234,0.28)" strokeDasharray="3 4" />
            <circle cx="256" cy="176" r="4" fill="#F5F1EA" />
            <circle cx="400" cy="110" r="4" fill="#49C7C0" />
            <text x="300" y="122" fill="#49C7C0" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.12em">
              PROJECTED
            </text>
          </>
        )}
      </g>
    </svg>
  )
}

export function DashboardChart({ animate }) {
  const histRef = useRef(null)
  const futClipRef = useRef(null)

  useEffect(() => {
    if (!animate) return
    const hist = histRef.current
    if (hist) {
      const len = hist.getTotalLength()
      hist.style.strokeDasharray = `${len}`
      hist.style.strokeDashoffset = `${len}`
      hist.getBoundingClientRect()
      hist.style.transition = 'stroke-dashoffset 800ms ease-out'
      hist.style.strokeDashoffset = '0'
    }
    const clip = futClipRef.current
    if (clip) {
      clip.style.width = '0px'
      clip.getBoundingClientRect()
      clip.style.transition = 'width 700ms ease-out 280ms'
      clip.style.width = '240px'
    }
  }, [animate])

  const hist = 'M48 168 C90 166 120 140 150 132 C186 122 210 148 248 136'
  const fut = 'M248 136 C286 122 318 88 360 92 C400 96 430 70 472 58'

  return (
    <svg className="dash-chart" viewBox="0 0 520 240" fill="none" role="img" aria-label="Forecast trend, observed to projected">
      <defs>
        <clipPath id="dashFutClip">
          <rect ref={futClipRef} x="248" y="0" width="0" height="240" />
        </clipPath>
      </defs>
      <rect width="520" height="240" rx="12" fill="#14110F" />
      {[48, 96, 144, 192].map((y) => (
        <line key={y} x1="36" y1={y} x2="492" y2={y} stroke="rgba(245,241,234,0.06)" />
      ))}
      <text x="36" y="24" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.16em">
        DEMAND / PRODUCTION FORECAST
      </text>
      <text x="36" y="44" fill="#F5F1EA" fontFamily="Oswald, sans-serif" fontSize="16">
        HISTORICAL  ·  PROJECTED
      </text>

      <path ref={histRef} d={hist} stroke="#F5F1EA" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d={fut} stroke="#49C7C0" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeDasharray="7 6" clipPath="url(#dashFutClip)" />

      <line x1="248" y1="48" x2="248" y2="208" stroke="rgba(245,241,234,0.28)" strokeDasharray="3 4" />
      <circle cx="248" cy="136" r="4.5" fill="#F5F1EA" />
      <circle cx="472" cy="58" r="4" fill="#49C7C0" />
      <text x="226" y="224" fill="#A79D8F" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.14em">
        TODAY
      </text>
      <text x="400" y="48" fill="#49C7C0" fontFamily="Work Sans, sans-serif" fontSize="10" letterSpacing="0.14em">
        PROJECTED
      </text>
    </svg>
  )
}

export function MiniPlant() {
  return (
    <svg className="mini-plant" viewBox="0 0 220 140" fill="none" aria-hidden="true">
      <rect width="220" height="140" rx="10" fill="#14110F" stroke="rgba(245,241,234,0.08)" />
      <g fill="rgba(245,241,234,0.1)" stroke="rgba(245,241,234,0.22)" strokeWidth="1">
        <rect x="18" y="62" width="44" height="52" />
        <rect x="70" y="42" width="62" height="72" />
        <rect x="142" y="70" width="40" height="44" />
        <rect x="32" y="42" width="12" height="20" />
        <rect x="92" y="24" width="14" height="18" />
        <path d="M18 114 H200" />
      </g>
      <path d="M24 88 C60 86 80 70 110 68 C140 66 160 78 196 52" stroke="#49C7C0" strokeWidth="1.6" strokeDasharray="4 3" fill="none" />
    </svg>
  )
}

export function CtaGraphic() {
  return (
    <svg className="cta-graphic" viewBox="0 0 420 180" fill="none" aria-hidden="true">
      <path d="M20 140 C70 136 90 90 140 86 C190 82 210 120 250 100 C290 80 330 40 400 28" stroke="#F5F1EA" strokeWidth="2" fill="none" />
      <path d="M250 100 C290 80 330 40 400 28" stroke="#49C7C0" strokeWidth="2" strokeDasharray="6 5" fill="none" />
      <line x1="250" y1="36" x2="250" y2="160" stroke="rgba(245,241,234,0.25)" strokeDasharray="3 4" />
      <circle cx="250" cy="100" r="4" fill="#F5F1EA" />
      <circle cx="400" cy="28" r="4" fill="#49C7C0" />
    </svg>
  )
}

export function HeroStage({ animate }) {
  const histRef = useRef(null)
  const futClipRef = useRef(null)

  useEffect(() => {
    if (!animate) return
    const hist = histRef.current
    if (hist) {
      const len = hist.getTotalLength()
      hist.style.strokeDasharray = `${len}`
      hist.style.strokeDashoffset = `${len}`
      hist.getBoundingClientRect()
      hist.style.transition = 'stroke-dashoffset 800ms ease-out'
      hist.style.strokeDashoffset = '0'
    }
    const clip = futClipRef.current
    if (clip) {
      clip.style.width = '0px'
      clip.getBoundingClientRect()
      clip.style.transition = 'width 700ms ease-out 280ms'
      clip.style.width = '420px'
    }
  }, [animate])

  return (
    <svg className="hero-stage-svg" viewBox="0 0 1600 820" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="heroWash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D1815" />
          <stop offset="55%" stopColor="#241E19" />
          <stop offset="100%" stopColor="#0F0D0B" />
        </linearGradient>
        <linearGradient id="heroVig" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#14110F" stopOpacity="0.72" />
          <stop offset="45%" stopColor="#14110F" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#14110F" stopOpacity="0.35" />
        </linearGradient>
        <clipPath id="stageFutClip">
          <rect ref={futClipRef} x="980" y="180" width="0" height="280" />
        </clipPath>
      </defs>
      <rect width="1600" height="820" fill="url(#heroWash)" />
      {[...Array(20)].map((_, i) => (
        <line key={`v${i}`} x1={80 * i} y1="0" x2={80 * i} y2="820" stroke="rgba(245,241,234,0.035)" />
      ))}
      {[...Array(12)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={70 * i} x2="1600" y2={70 * i} stroke="rgba(245,241,234,0.035)" />
      ))}
      <g fill="rgba(245,241,234,0.08)" stroke="rgba(245,241,234,0.2)" strokeWidth="1.4">
        <rect x="720" y="430" width="130" height="250" />
        <rect x="860" y="360" width="180" height="320" />
        <rect x="1050" y="410" width="110" height="270" />
        <rect x="1170" y="470" width="150" height="210" />
        <rect x="1340" y="390" width="90" height="290" />
        <rect x="780" y="360" width="28" height="70" />
        <rect x="920" y="300" width="36" height="60" />
        <rect x="1080" y="340" width="24" height="70" />
        <rect x="1370" y="320" width="22" height="70" />
        <path d="M780 360 L794 320 L808 360" fill="none" />
        <path d="M930 300 L938 268 L946 300" fill="none" />
        <path d="M1088 340 L1092 300 L1096 340" fill="none" />
        <circle cx="1248" cy="560" r="32" fill="none" />
        <path d="M700 680 H1480" />
      </g>
      <path d="M760 560 C860 548 920 500 980 492" stroke="#F5F1EA" strokeWidth="3" fill="none" ref={histRef} strokeLinecap="round" />
      <path
        d="M980 492 C1060 478 1140 400 1220 390 C1300 380 1380 320 1460 300"
        stroke="#49C7C0"
        strokeWidth="3"
        fill="none"
        strokeDasharray="8 7"
        strokeLinecap="round"
        clipPath="url(#stageFutClip)"
      />
      <line x1="980" y1="220" x2="980" y2="620" stroke="rgba(245,241,234,0.28)" strokeDasharray="4 5" />
      <circle cx="980" cy="492" r="6" fill="#F5F1EA" />
      <circle cx="1460" cy="300" r="6" fill="#49C7C0" />
      <rect width="1600" height="820" fill="url(#heroVig)" />
    </svg>
  )
}

function PlantMotif({ accent = '#E86A1C' }) {
  return (
    <g fill="rgba(245,241,234,0.08)" stroke="rgba(245,241,234,0.22)" strokeWidth="1.2">
      <rect x="24" y="78" width="52" height="70" />
      <rect x="84" y="54" width="78" height="94" />
      <rect x="170" y="88" width="48" height="60" />
      <rect x="42" y="54" width="14" height="24" />
      <rect x="112" y="32" width="16" height="22" />
      <path d="M24 148 H230" />
      <path d="M40 110 C80 104 120 86 210 70" stroke={accent} fill="none" strokeDasharray="4 3" />
    </g>
  )
}

export function SolutionArt() {
  return (
    <svg className="sol-art" viewBox="0 0 280 150" fill="none" aria-hidden="true">
      <rect width="280" height="150" fill="#14110F" />
      <PlantMotif accent="#E86A1C" />
    </svg>
  )
}

export function InsightArt({ kind }) {
  return (
    <svg className="insight-art" viewBox="0 0 400 220" fill="none" aria-hidden="true">
      <rect width="400" height="220" fill="#14110F" />
      {[...Array(8)].map((_, i) => (
        <line key={i} x1={50 * i} y1="0" x2={50 * i} y2="220" stroke="rgba(245,241,234,0.05)" />
      ))}
      {kind === 'risk' ? (
        <>
          <path d="M40 150 L200 70 L360 170" stroke="#D65A4A" strokeWidth="2.2" fill="none" />
          <path d="M200 70 L200 40 L230 70" stroke="#D65A4A" strokeWidth="2" fill="none" />
        </>
      ) : kind === 'pipeline' ? (
        <>
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={36 + i * 88} y="70" width="70" height="80" rx="10" stroke="rgba(245,241,234,0.2)" />
          ))}
          <path d="M106 110 H124 M194 110 H212 M282 110 H300" stroke="#E86A1C" strokeWidth="1.6" />
        </>
      ) : (
        <>
          <path d="M36 150 C90 146 120 110 180 104 C220 100 250 128 280 118" stroke="#F5F1EA" strokeWidth="2.2" fill="none" />
          <path d="M280 118 C320 104 348 78 372 70" stroke="#49C7C0" strokeWidth="2.2" strokeDasharray="6 5" fill="none" />
          <line x1="280" y1="50" x2="280" y2="180" stroke="rgba(245,241,234,0.25)" strokeDasharray="3 4" />
        </>
      )}
    </svg>
  )
}

export function GalleryTile({ kind }) {
  return <InsightArt kind={kind} />
}
