'use client'

import { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`
      }
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-3 h-3 pointer-events-none z-[9999] hidden md:block"
      style={{ willChange: 'transform' }}
    >
      <div className="w-full h-full rounded-full bg-accent/70" />
    </div>
  )
}
