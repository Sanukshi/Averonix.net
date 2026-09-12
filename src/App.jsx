import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Platform from './components/Platform'
import About from './components/About'
import Marquee from './components/Marquee'
import Solutions from './components/Solutions'
import HowItWorks from './components/HowItWorks'
import Architecture from './components/Architecture'
import Outcomes from './components/Outcomes'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import Legal from './components/Legal'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash || '#home')

  useEffect(() => {
    const onHash = () => setHash(window.location.hash || '#home')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return hash.split('?')[0]
}

export default function App() {
  const hash = useHash()
  const legalPage = hash === '#privacy' ? 'privacy' : hash === '#terms' ? 'terms' : null

  useEffect(() => {
    if (legalPage) {
      window.scrollTo(0, 0)
      return
    }
    const id = (hash || '#home').replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView()
  }, [hash, legalPage])

  return (
    <>
      <a className="skip-link" href={legalPage ? `#${legalPage}` : '#home'}>
        Skip to content
      </a>
      <Header />
      {legalPage ? (
        <Legal page={legalPage} />
      ) : (
        <main>
          <Hero />
          <Platform />
          <About />
          <Marquee />
          <Solutions />
          <HowItWorks />
          <Architecture />
          <Outcomes />
          <Pricing />
          <FAQ />
          <Contact />
          <FinalCTA />
        </main>
      )}
      <Footer />
    </>
  )
}
