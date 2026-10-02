import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/**
 * Orientation motion, CSS-only (see .reveal in globals.css).
 *
 * ponytail: no IntersectionObserver, no client component. A scroll-linked
 * animation degrades to fully-visible content wherever it is unsupported or
 * motion is reduced — an observer that never fires leaves the page blank.
 *
 * V2.2: `index` replaces V2.1's `delay`. A view() timeline is driven by
 * scroll progress, not time, so `animation-delay` had no effect — four
 * siblings with 0/60/120/180ms delays held identical transforms at the same
 * scroll position. The stagger now shifts each sibling's `animation-range`
 * start instead, which is the same idea expressed in the timeline that is
 * actually running.
 */
export default function Reveal({
  children,
  index = 0,
  className,
  style,
  as: Tag = 'div',
}: {
  children: ReactNode
  /** Sibling position. Shifts the scroll range start by 7% of entry each step. */
  index?: number
  className?: string
  style?: CSSProperties
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  return (
    <Tag
      className={cn('reveal', className)}
      style={index ? ({ ...style, '--i': index } as CSSProperties) : style}
    >
      {children}
    </Tag>
  )
}
