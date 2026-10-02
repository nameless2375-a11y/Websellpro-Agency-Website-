import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

/** Live routes only. Retired routes are 301s and must not appear here. */
const routes = [
  '',
  '/work',
  '/services',
  '/approach',
  '/pricing',
  '/contact',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/pricing' ? 0.8 : 0.6,
  }))
}
