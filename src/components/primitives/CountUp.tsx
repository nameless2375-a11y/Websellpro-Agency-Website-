'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * A number that counts up once, when it scrolls into view.
 *
 * ponytail: the one client island in the motion system. The server renders the
 * real number, so no-JS, crawlers, reduced-motion visitors and anything already
 * on screen at load all see the final value. Only a number that starts below
 * the fold is reset to 0 and counted up — nothing flashes in view.
 */
export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(to)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setValue(0)
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / 1100, 1)
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 1 },
    )
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])

  // Fixed width + tabular figures: the digits change, the line does not reflow.
  return (
    <>
      <span
        ref={ref}
        aria-hidden="true"
        className="inline-block text-right tabular-nums"
        style={{ minWidth: `${String(to).length}ch` }}
      >
        {value}
      </span>
      <span className="sr-only">{to}</span>
    </>
  )
}
