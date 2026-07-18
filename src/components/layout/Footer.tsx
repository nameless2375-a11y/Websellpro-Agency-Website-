'use client'

import Link from 'next/link'
import { ArrowUpRight, Mail, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const footerLinks = {
  Pages: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/process', label: 'Process' },
    { href: '/faq', label: 'FAQ' },
  ],
  Services: [
    { href: '/services', label: 'Website Design' },
    { href: '/services', label: 'Web Development' },
    { href: '/services', label: 'Landing Pages' },
    { href: '/services', label: 'Website Redesign' },
    { href: '/services', label: 'SEO Optimization' },
    { href: '/services', label: 'Website Maintenance' },
  ],
  Contact: [
    { href: '/contact', label: 'Get in Touch' },
    { href: '/contact', label: 'Request a Quote' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Websellpro<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-xs">
              We build premium websites that actually sell.
              Proven before payment. Built for local businesses ready to grow.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
              >
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-foreground transition-colors duration-300"
              >
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors duration-300 inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Websellpro. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Websites That Actually Sell.
          </p>
        </div>
      </div>
    </footer>
  )
}
