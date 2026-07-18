'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, Play } from 'lucide-react'
import Link from 'next/link'
import MagneticButton from '@/components/animations/MagneticButton'
import ScrollProgress from '@/components/animations/ScrollProgress'
import { Dynamic3DScene } from '@/components/3d/DynamicImports'

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <>
      <ScrollProgress />
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-background to-background" />

        <Dynamic3DScene />

        {/* Reduced glow intensity by ~30% */}
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 opacity-[0.02]"
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--color-accent) 0%, transparent 50%),
                              radial-gradient(circle at 75% 75%, var(--color-accent) 0%, transparent 50%)`,
          }} />
        </motion.div>

        <motion.div style={{ y, opacity }} className="relative z-10 container-wide text-center px-4 md:px-6">
          {/* Headline — dominant, large, commanding */}
          <div style={{ perspective: 1200 }}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-light tracking-tight text-balance mx-auto leading-[0.88]"
            >
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] block">
                Websites That
              </span>
              <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-accent block -mt-2 md:-mt-4">
                Actually Sell.
              </span>
            </motion.h1>
          </div>

          {/* Supporting copy — slightly larger, readable */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg md:text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-[350]"
          >
            We build premium websites for local businesses.
            Proven before payment. Launch when you&apos;re convinced.
          </motion.p>

          {/* CTA buttons — larger, more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <MagneticButton>
              <Link
                href="/contact"
                className="group relative px-10 py-4 md:px-12 md:py-5 bg-foreground text-background rounded-full text-base md:text-lg font-medium overflow-hidden transition-all duration-500 hover:bg-accent tracking-wide"
              >
                <span className="relative z-10">Let&apos;s Build Your Website</span>
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/portfolio"
                className="group px-10 py-4 md:px-12 md:py-5 border-2 border-border text-foreground rounded-full text-base md:text-lg font-medium hover:border-accent hover:text-accent transition-all duration-300 flex items-center gap-2 tracking-wide"
              >
                <Play className="w-5 h-5" />
                See Our Work
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-muted/60" />
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
