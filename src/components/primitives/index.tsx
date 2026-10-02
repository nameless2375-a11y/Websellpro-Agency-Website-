import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/* ==========================================================================
   V2 primitives — blueprint §F.5.
   Server components by default. Motion lives in <Reveal>, imported
   separately so a page that does not animate pays nothing for it.
   ========================================================================== */

type Tone = 'paper' | 'sunken' | 'peak'

const toneClass: Record<Tone, string> = {
  paper: 'bg-paper text-ink-body',
  sunken: 'bg-paper-sunken text-ink-body',
  peak: 'bg-peak text-peak-ink',
}

/** A page section. One idea per section — if it has two headings, split it. */
export function Section({
  children,
  tone = 'paper',
  className,
  id,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
  id?: string
}) {
  return (
    <section id={id} className={cn('section-v2', toneClass[tone], className)}>
      <div className="container-v2">{children}</div>
    </section>
  )
}

/** The editorial kicker above every section heading. Blueprint §F.5. */
export function Eyebrow({
  children,
  tone = 'paper',
  className,
}: {
  children: ReactNode
  tone?: Tone
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-label font-medium uppercase',
        tone === 'peak' ? 'text-peak-muted' : 'text-ink-muted',
        className,
      )}
    >
      {children}
    </p>
  )
}

/**
 * Heading. Level and size are independent on purpose — V1 welded them
 * together, which made correct document outline and correct visual
 * hierarchy mutually exclusive.
 */
export function Heading({
  children,
  level = 2,
  size = 'l',
  tone = 'paper',
  className,
}: {
  children: ReactNode
  level?: 1 | 2 | 3 | 4
  size?: 'xl' | 'l' | 'm'
  tone?: Tone
  className?: string
}) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'
  const sizes = {
    xl: 'text-display-xl',
    l: 'text-display-l',
    m: 'text-display-m',
  }

  return (
    <Tag
      className={cn(
        'font-display font-normal text-balance-v2',
        sizes[size],
        tone === 'peak' ? 'text-peak-ink' : 'text-ink',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/** Body copy. Always inside a measure — never full-bleed paragraphs. */
export function Text({
  children,
  size = 'base',
  tone = 'paper',
  muted = false,
  className,
}: {
  children: ReactNode
  size?: 'lead' | 'base' | 'small'
  tone?: Tone
  muted?: boolean
  className?: string
}) {
  const sizes = {
    lead: 'text-body-l',
    base: 'text-body',
    small: 'text-small',
  }

  const colour =
    tone === 'peak'
      ? muted
        ? 'text-peak-muted'
        : 'text-peak-ink'
      : muted
        ? 'text-ink-muted'
        : 'text-ink-body'

  return (
    <p className={cn('measure text-pretty-v2', sizes[size], colour, className)}>
      {children}
    </p>
  )
}

/* --------------------------------------------------------------------------
   Actions. Exactly one `solid` visible per screen — a second is a bug,
   not a styling choice. Blueprint §F.5.
   -------------------------------------------------------------------------- */

const buttonBase =
  'btn-v2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 text-small font-medium transition-[background-color,border-color,transform] duration-[160ms] motion-reduce:transition-none'

const buttonVariant = {
  solid: 'bg-accent text-paper hover:bg-accent-hover',
  quiet:
    'border border-rule-strong text-ink hover:border-ink hover:bg-accent-wash',
  peak: 'bg-peak-ink text-peak hover:bg-white',
}

export function Button({
  children,
  href,
  variant = 'solid',
  className,
  ...rest
}: {
  children: ReactNode
  href: string
  variant?: keyof typeof buttonVariant
  className?: string
} & Omit<ComponentProps<typeof Link>, 'href' | 'className'>) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const classes = cn(buttonBase, buttonVariant[variant], className)
  // The primary action carries a small arrow that steps forward on hover.
  const label = (
    <>
      {children}
      {variant !== 'quiet' && (
        <span aria-hidden="true" className="btn-arrow">
          →
        </span>
      )}
    </>
  )

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {label}
    </Link>
  )
}

/** The only secondary action. Never a second button. */
export function TextLink({
  children,
  href,
  tone = 'paper',
  className,
}: {
  children: ReactNode
  href: string
  tone?: Tone
  className?: string
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const classes = cn(
    'text-small font-medium underline decoration-1 underline-offset-4 transition-colors duration-[160ms] motion-reduce:transition-none',
    tone === 'peak'
      ? 'text-peak-ink decoration-peak-rule hover:decoration-peak-ink'
      : 'text-accent decoration-accent/40 hover:decoration-accent',
    className,
  )

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

/** Flat card. No shadow at rest, no glow ever. */
export function Card({
  children,
  className,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  return (
    <Tag
      className={cn(
        'rounded-md border border-rule bg-paper-raised p-6 transition-colors duration-[160ms] hover:border-rule-strong motion-reduce:transition-none md:p-8',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

/** A hairline used to separate list rows without adding a box. */
export function Rule({ className }: { className?: string }) {
  return <hr className={cn('border-0 border-t border-rule', className)} />
}
