import type { MetadataRoute } from 'next'
import { statSync } from 'node:fs'
import path from 'node:path'
import { SITE_URL, SAMPLES } from '@/lib/data'
import { SERVICES } from '@/lib/services'
import { WORK_CASES } from '@/lib/work-cases'

const sourceDate = (relativePath: string) =>
  statSync(path.join(process.cwd(), relativePath)).mtime

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { route: '/', source: 'app/page.tsx', priority: 1 },
    { route: '/work', source: 'app/work/page.tsx', priority: 0.8 },
    { route: '/samples', source: 'app/samples/page.tsx', priority: 0.8 },
    { route: '/services', source: 'app/services/page.tsx', priority: 0.8 },
    { route: '/tools', source: 'app/tools/page.tsx', priority: 0.6 },
    { route: '/contact', source: 'app/contact/page.tsx', priority: 0.7 },
    { route: '/me', source: 'app/me/page.tsx', priority: 0.6 },
    { route: '/reviews', source: 'app/reviews/page.tsx', priority: 0.6 },
  ].map(({ route, source, priority }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: sourceDate(source),
    changeFrequency: 'monthly' as const,
    priority,
  }))

  const workCases = WORK_CASES.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: sourceDate('lib/work-cases.ts'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const samples = SAMPLES.map((sample) => ({
    url: `${SITE_URL}/samples/${sample.slug}`,
    lastModified: sourceDate('lib/data.ts'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const services = SERVICES.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: sourceDate('lib/services.ts'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...pages, ...workCases, ...samples, ...services]
}
