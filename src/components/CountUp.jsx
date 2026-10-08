import { useEffect, useRef, useState } from 'react'

export default function CountUp({
  end,
  suffix = '',
  duration = 2000,
  pause = 1500,
  loop = false,
}) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    let frameId
    let timeoutId

    const run = () => {
      const startTime = performance.now()

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCount(Math.round(eased * end))

        if (progress < 1) {
          frameId = requestAnimationFrame(tick)
        } else if (loop) {
          // finished: wait, reset to 0, then run again
          timeoutId = setTimeout(() => {
            setCount(0)
            run()
          }, pause)
        }
      }

      frameId = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
      clearTimeout(timeoutId)
    }
  }, [end, duration, pause, loop])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}