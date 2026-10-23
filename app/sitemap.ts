import type { MetadataRoute } from 'next'
import { PAGES, SAMPLES, SITE_URL } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map((p) => ({
    url: SITE_URL + (p === 'home' ? '/' : '/' + p),
    changeFrequency: 'monthly' as const,
    priority: p === 'home' ? 1 : 0.8,
  }))
  const samples = SAMPLES.map((s) => ({
    url: `${SITE_URL}/samples/${s.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [...pages, ...samples]
}
