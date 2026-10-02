'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

/**
 * Quiet by default, and always there. Sticky on an opaque paper ground, not a
 * transparent overlay that becomes a blur, and never hidden on scroll — the
 * founder found a nav that scrolled away confusing. The primary paths stay
 * one click away from anywhere on the page.
 */
const links = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/pricing', label: 'Pricing' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const sheetRef = useRef<HTMLDivElement>(null)

  // Close on route change.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Lock scroll, trap focus, restore focus to the toggle on close.
  useEffect(() => {
    if (!open) return

    document.body.style.overflow = 'hidden'
    const previouslyFocused = document.activeElement as HTMLElement | null
    const toggle = toggleRef.current
    sheetRef.current?.querySelector<HTMLElement>('a, button')?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false)
        return
      }
      if (e.key !== 'Tab' || !sheetRef.current) return

      const focusable = sheetRef.current.querySelectorAll<HTMLElement>('a, button')
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
      ;(previouslyFocused ?? toggle)?.focus()
    }
  }, [open])

  return (
    <header className="enter-nav sticky top-0 z-50 border-b border-rule bg-paper">
      <div className="container-v2 flex h-[4.5rem] items-center justify-between py-4">
        <Link
          href="/"
          className="font-display text-display-m leading-none text-ink"
          aria-label="WebSellPro, home"
        >
          WebSellPro
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-small transition-colors duration-[160ms] motion-reduce:transition-none',
                  active
                    ? 'text-ink underline decoration-accent decoration-2 underline-offset-8'
                    : 'text-ink-muted hover:text-ink',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className="inline-flex min-h-10 items-center rounded-md border border-rule-strong px-4 text-small font-medium text-ink transition-colors duration-[160ms] hover:border-ink hover:bg-accent-wash motion-reduce:transition-none"
          >
            Start a project
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-ink md:hidden"
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="text-small font-medium uppercase tracking-widest">
            {open ? 'Close' : 'Menu'}
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          ref={sheetRef}
          className="fixed inset-0 top-[4.5rem] z-50 bg-paper md:hidden"
        >
          <nav className="container-v2 flex flex-col py-8" aria-label="Primary, mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border-b border-rule py-5 font-display text-display-m text-ink"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-small font-medium text-paper"
            >
              Start a project
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
