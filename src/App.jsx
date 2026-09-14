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
import Product from './components/Product'

function useRoute() {
  const getRoute = () => {
    const path = window.location.pathname.replace(/\/$/, '') || '/'
    const hash = window.location.hash ? window.location.hash.split('?')[0] : ''
    return { path, hash }
  }

  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const onLocationChange = () => {
      setRoute(getRoute())
    }

    window.addEventListener('popstate', onLocationChange)
    window.addEventListener('hashchange', onLocationChange)

    const handleDocumentClick = (e) => {
      const anchor = e.target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return

      // Ignore external links, mailto, tel, or target=_blank
      if (
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.target === '_blank'
      ) {
        return
      }

      const currentNormPath = window.location.pathname.replace(/\/$/, '') || '/'

      // Handle product page navigation
      if (href === '/product' || href === '/product/') {
        e.preventDefault()
        if (currentNormPath !== '/product') {
          window.history.pushState({}, '', '/product')
          setRoute({ path: '/product', hash: '' })
          window.scrollTo(0, 0)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        return
      }

      // Handle root navigation
      if (href === '/' || href === '') {
        e.preventDefault()
        window.history.pushState({}, '', '/')
        setRoute({ path: '/', hash: '#home' })
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }

      // Handle /#section links
      if (href.startsWith('/#')) {
        e.preventDefault()
        const targetHash = href.slice(1) // e.g. '#platform'
        const targetId = targetHash.slice(1)
        window.history.pushState({}, '', href)
        setRoute({ path: '/', hash: targetHash })
        setTimeout(() => {
          const el = document.getElementById(targetId)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
          else window.scrollTo(0, 0)
        }, 80)
        return
      }

      // Handle #section links (used across navbar and in-page anchors)
      if (href.startsWith('#')) {
        const targetId = href.slice(1)

        // If we are currently on /product or legal, navigate back to home with hash
        if (currentNormPath !== '/') {
          e.preventDefault()
          window.history.pushState({}, '', '/' + href)
          setRoute({ path: '/', hash: href })
          setTimeout(() => {
            const el = document.getElementById(targetId)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
            else window.scrollTo(0, 0)
          }, 80)
          return
        }

        // On home page already
        e.preventDefault()
        window.history.pushState({}, '', href)
        setRoute({ path: '/', hash: href })
        const el = document.getElementById(targetId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
        return
      }

      // Any other relative path
      if (href.startsWith('/')) {
        const [targetPath, targetHash] = href.split('#')
        const normTargetPath = targetPath.replace(/\/$/, '') || '/'

        if (normTargetPath !== currentNormPath) {
          e.preventDefault()
          window.history.pushState({}, '', href)
          setRoute(getRoute())
          if (targetHash) {
            setTimeout(() => {
              const el = document.getElementById(targetHash)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }, 80)
          } else {
            window.scrollTo(0, 0)
          }
        }
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      window.removeEventListener('popstate', onLocationChange)
      window.removeEventListener('hashchange', onLocationChange)
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return route
}

export default function App() {
  const route = useRoute()
  const isProduct = route.path === '/product' || route.hash === '#product'
  const legalPage =
    route.hash === '#privacy' || route.path === '/privacy'
      ? 'privacy'
      : route.hash === '#terms' || route.path === '/terms'
      ? 'terms'
      : null

  useEffect(() => {
    if (isProduct) {
      document.title = 'Averonix X.1 — Autonomous Predictive Operating System | Averonix'
      window.scrollTo(0, 0)
    } else if (legalPage) {
      document.title = `${legalPage === 'privacy' ? 'Privacy Policy' : 'Terms and Conditions'} — Averonix`
      window.scrollTo(0, 0)
    } else {
      document.title = 'Averonix — Predict what’s next. Plan with precision.'
      if (route.hash) {
        const id = route.hash.replace('#', '')
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [isProduct, legalPage, route.hash, route.path])

  return (
    <>
      <a className="skip-link" href={isProduct ? '#product-root' : legalPage ? `#${legalPage}` : '#home'}>
        Skip to content
      </a>
      <Header />
      {isProduct ? (
        <Product />
      ) : legalPage ? (
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
