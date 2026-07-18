'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface ImageRevealProps {
  src?: string
  alt?: string
  gradient?: string
  className?: string
  label?: string
  aspect?: 'video' | 'square' | 'portrait' | 'wide'
}

export default function ImageReveal({
  src,
  alt = '',
  gradient = 'from-accent/20 to-accent/5',
  className = '',
  label,
  aspect = 'video',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[2/1]',
  }

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}>
      <motion.div
        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        animate={isInView ? { clipPath: 'inset(0 0% 0 0)' } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt || label || ''}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            {label && (
              <span className="text-sm md:text-base font-light text-white/40 tracking-wider uppercase">
                {label}
              </span>
            )}
          </>
        )}
      </motion.div>
    </div>
  )
}

export function ParallaxImage({
  gradient = 'from-accent/20 to-accent/5',
  className = '',
  label,
  aspect = 'video',
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[2/1]',
  }

  return (
    <div ref={ref} className={`overflow-hidden rounded-2xl ${aspectClasses[aspect]} ${className}`}>
      <motion.div
        className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center relative`}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(201, 168, 76, 0.1), transparent 70%)`,
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        />
        {label && (
          <motion.span
            className="text-sm md:text-base font-light text-white/30 tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {label}
          </motion.span>
        )}
      </motion.div>
    </div>
  )
}

export function MockupImage({
  gradient = 'from-blue-900/30 to-indigo-950/30',
  label,
  className = '',
}: {
  gradient?: string
  label?: string
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className={`overflow-hidden rounded-xl border border-border/50 ${className}`}>
      <motion.div
        className={`w-full aspect-[4/3] bg-gradient-to-br ${gradient} p-4 flex flex-col relative`}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 mb-3">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        {/* Content preview */}
        <div className="flex-1 bg-white/5 rounded-lg p-3 flex flex-col gap-2">
          <div className="h-2 w-1/3 bg-white/10 rounded" />
          <div className="h-2 w-2/3 bg-white/10 rounded" />
          <div className="flex-1 grid grid-cols-3 gap-2 mt-2">
            <div className="bg-white/5 rounded" />
            <div className="bg-white/5 rounded col-span-2" />
          </div>
        </div>
        {label && (
          <span className="text-[10px] text-white/40 mt-2">{label}</span>
        )}
      </motion.div>
    </div>
  )
}
