import { useEffect, useRef, useState } from 'react'

export default function ProgressRing({
  value = 0,
  size = 180,
  stroke = 14,
  duration = 1600,
  label,
}) {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)

  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    let frameId

    const run = () => {
      const startTime = performance.now()

      const tick = (now) => {
        const p = Math.min((now - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setProgress(eased * value)

        if (p < 1) {
          frameId = requestAnimationFrame(tick)
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
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [value, duration])

  const dash = (progress / 100) * circumference

  return (
    <div className="progress-ring" ref={ref}>
      <svg width={size} height={size} className="progress-ring-svg">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--accent-light)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference * 0.04} ${circumference}`}
          transform={`rotate(-110 ${size / 2} ${size / 2})`}
          opacity="0.9"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--green-deep)"
          strokeWidth={stroke}
          opacity="0.08"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--green-deep)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>

      <div className="progress-ring-label">
        <span className="progress-ring-value">{Math.round(progress)}</span>
        <span className="progress-ring-pct">%</span>
      </div>

      {label && <p className="progress-ring-caption">{label}</p>}
    </div>
  )
}