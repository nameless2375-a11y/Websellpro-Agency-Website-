'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useTransform, motion, useSpring, useMotionValue } from 'framer-motion'

export default function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      ref={ref}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left"
      style={{ scaleX }}
    />
  )
}
