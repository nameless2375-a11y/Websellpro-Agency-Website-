'use client'

import { useRef, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    ref.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
  }

  const handleReset = () => {
    if (!ref.current) return
    ref.current.style.transform = 'translate(0px, 0px)'
  }

  const Tag = href ? 'a' : 'button'

  return (
    <div
      ref={ref}
      className="inline-block transition-transform duration-200 ease-out"
      onMouseMove={handleMouse}
      onMouseLeave={handleReset}
    >
      <Tag
        href={href as any}
        onClick={onClick}
        className={className}
      >
        {children}
      </Tag>
    </div>
  )
}
