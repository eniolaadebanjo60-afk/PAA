import { useEffect, useRef } from 'react'
import partners from '../data/partners'

const loopList = [...partners, ...partners]
const GAP = 24
const SPEED = 1 

export default function Partners() {
  const trackRef = useRef(null)
  const pausedRef = useRef(false)
  const manualUntil = useRef(0)
  const periodRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId

    const calculatePeriod = () => {
      if (!track || !track.children[partners.length]) return
      periodRef.current = track.children[partners.length].offsetLeft - track.children[0].offsetLeft
    }

    calculatePeriod()
    window.addEventListener('resize', calculatePeriod)

    const tick = () => {
      const period = periodRef.current

      if (!pausedRef.current && !reduceMotion && Date.now() > manualUntil.current && period > 0) {
        track.scrollLeft += SPEED
      }

      if (period > 0 && track.scrollLeft >= period) {
        track.scrollLeft -= period
      }

      frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', calculatePeriod)
    }
  }, [])

  function slide(direction) {
    const track = trackRef.current
    const period = periodRef.current
    if (!track || !period) return
    
    const step = track.children[0].offsetWidth + GAP
    manualUntil.current = Date.now() + 700

    if (direction === -1 && track.scrollLeft < step) {
      track.scrollTo({ left: track.scrollLeft + period, behavior: 'auto' })
    }
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <div className="partners-section">
      <div className="section-inner">
        <h3>Trusted by leading organizations worldwide</h3>
        <div
          className="partners-slider"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
        >
          <button className="partners-btn partners-prev" aria-label="Previous partners" onClick={() => slide(-1)}>
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <div className="partners-track" ref={trackRef}>
            {loopList.map((partner, index) => {
              const duplicate = index >= partners.length
              const content = partner.logo ? (
                <img src={partner.logo} alt={partner.name} />
              ) : (
                <span>{partner.name}</span>
              )

              return partner.url ? (
                <a key={index} href={partner.url} target="_blank" rel="noreferrer" className="partner-logo-box" aria-hidden={duplicate} tabIndex={duplicate ? -1 : 0}>
                  {content}
                </a>
              ) : (
                <div key={index} className="partner-logo-box" aria-hidden={duplicate}>
                  {content}
                </div>
              )
            })}
          </div>
          <button className="partners-btn partners-next" aria-label="Next partners" onClick={() => slide(1)}>
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  )
}