/**
 * Canonical site facts. Everything here must be verifiable.
 *
 * `url` never claims an unverified domain: it is NEXT_PUBLIC_SITE_URL when
 * set, else the host Vercel itself reports for this project, else localhost.
 * Claiming a domain that does not resolve puts a wrong value in every OG tag,
 * canonical link and sitemap entry. Set NEXT_PUBLIC_SITE_URL once the custom
 * domain resolves.
 */
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL
export const siteConfig = {
  name: 'WebSellPro',
  tagline: 'A web studio for businesses that have outgrown a template',
  description:
    'We design and build production websites, and we show you the working site before you pay. Studio engagements for businesses that need more than a template, plus a fixed-price entry tier for local businesses.',
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (vercelHost ? `https://${vercelHost}` : 'http://localhost:3000'),
  contact: {
    email: 'hello@websellpro.si',
    phone: '+91 91046 41180',
    phoneHref: 'tel:+919104641180',
    location: 'Gujarat, India',
  },
  // Social profiles intentionally omitted until real accounts exist.
  links: {},
} as const

export type SiteConfig = typeof siteConfig
