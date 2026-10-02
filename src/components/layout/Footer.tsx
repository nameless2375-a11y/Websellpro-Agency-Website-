import Link from 'next/link'
import { siteConfig } from '@/lib/site'

/**
 * Three columns. V1's footer carried six "Services" links that all pointed
 * at the same page — dead weight, removed.
 */
const pages = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/approach', label: 'Approach' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
]

const legal = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
]

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper-sunken">
      <div className="container-v2 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-display-m leading-none text-ink">WebSellPro</p>
            <p className="measure-tight mt-4 text-small text-ink-muted">
              A web studio for businesses that have outgrown a template. We build the site
              first, and show you before you pay.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-label font-medium uppercase text-ink-muted">Pages</p>
            <ul className="mt-4 space-y-2">
              {pages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-small text-ink-body transition-colors duration-[160ms] hover:text-accent motion-reduce:transition-none"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-label font-medium uppercase text-ink-muted">Contact</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-small text-ink-body transition-colors duration-[160ms] hover:text-accent motion-reduce:transition-none"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="text-small text-ink-body transition-colors duration-[160ms] hover:text-accent motion-reduce:transition-none"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-small text-ink-muted">{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-8">
          <p className="text-small text-ink-muted">
            © {new Date().getFullYear()} WebSellPro
          </p>
          <ul className="flex gap-6">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small text-ink-muted transition-colors duration-[160ms] hover:text-ink motion-reduce:transition-none"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
