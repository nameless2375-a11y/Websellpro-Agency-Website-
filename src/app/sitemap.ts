import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

const routes = [
  '',
  '/about',
  '/services',
  '/industries',
  '/portfolio',
  '/pricing',
  '/process',
  '/faq',
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
