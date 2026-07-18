'use client'

import { type ReactNode, type ElementType } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps {
  as?: HeadingLevel
  children: ReactNode
  className?: string
  animate?: boolean
}

export function Heading({ as: Tag = 'h2', children, className, animate = true }: HeadingProps) {
  const sizes = {
    h1: 'text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]',
    h2: 'text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]',
    h3: 'text-2xl md:text-3xl font-normal tracking-tight',
    h4: 'text-xl font-normal tracking-tight',
  }

  const Comp = animate ? motion(Tag as ElementType) : Tag

  return (
    <Comp
      className={cn(sizes[Tag], 'text-balance', className)}
      {...(animate ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-100px' },
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
      } : {})}
    >
      {children}
    </Comp>
  )
}

interface TextProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'base' | 'lg' | 'xl'
  muted?: boolean
}

export function Text({ children, className, size = 'base', muted = false }: TextProps) {
  const sizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  }

  return (
    <p className={cn(sizes[size], muted ? 'text-muted' : 'text-foreground/80', 'leading-relaxed', className)}>
      {children}
    </p>
  )
}

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  container?: 'wide' | 'narrow'
}

export function Section({ children, className, id, container = 'wide' }: SectionProps) {
  return (
    <section id={id} className={cn('section-pad', className)}>
      <div className={`container-${container}`}>
        {children}
      </div>
    </section>
  )
}

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider uppercase border border-border rounded-full text-muted',
      className
    )}>
      {children}
    </span>
  )
}

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  onClick?: () => void
  as?: ElementType
}

export function Button({ children, variant = 'primary', size = 'md', href, className, onClick, as: Tag = 'button' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full'
  
  const variants = {
    primary: 'bg-foreground text-background hover:bg-accent hover:text-background',
    secondary: 'bg-surface-elevated text-foreground hover:bg-surface-hover border border-border',
    ghost: 'text-foreground hover:text-accent',
    outline: 'border border-border text-foreground hover:border-accent hover:text-accent bg-transparent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const Comp = motion(Tag as ElementType)

  return (
    <Comp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </Comp>
  )
}
