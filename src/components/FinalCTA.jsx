export default function FinalCTA() {
  return (
    <section className="final-cta section-darker">
      <div className="wrap final-inner">
        <div>
          <span className="kicker">Next</span>
          <h2>
            See what’s next. <em>Operate ahead of it.</em>
          </h2>
          <p className="lede">
            Put the Averonix predictive intelligence layer on the data manufacturing, finance, and supply chain already
            produce.
          </p>
          <div className="hero-actions" style={{ marginTop: 28 }}>
            <a className="btn btn-primary" href="#contact">
              Averonix X.1
              <span className="btn-arrow-wrap">→</span>
            </a>
            <a className="btn btn-ghost" href="#architecture">
              View architecture
              <span className="btn-arrow-wrap">→</span>
            </a>
          </div>
        </div>
        <img className="cta-photo" src="/images/cta-layer.png" alt="Enterprise data flowing into forecasts and operational plans" />
      </div>
    </section>
  )
}
