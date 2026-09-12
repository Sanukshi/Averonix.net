import { MARQUEE } from '../data'

export default function Marquee() {
  const row = [...MARQUEE, ...MARQUEE]
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((word, i) => (
          <span key={`${word}-${i}`}>
            {word}
            <i />
          </span>
        ))}
      </div>
    </section>
  )
}
