import type { MetadataRoute } from 'next'
import { PAGES, SITE_URL } from '@/lib/data'
import { WORK_CASES } from '@/lib/work-cases'
import { statSync } from 'node:fs'
import path from 'node:path'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.map((p) => ({
    url: SITE_URL + (p === 'home' ? '/' : '/' + p),
    lastModified: statSync(path.join(process.cwd(), 'app', p === 'home' ? 'page.tsx' : p, ...(p === 'home' ? [] : ['page.tsx']))).mtime,
    changeFrequency: 'monthly' as const,
    priority: p === 'home' ? 1 : 0.8,
  }))
  const workCases = WORK_CASES.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified: statSync(path.join(process.cwd(), project.source, project.file)).mtime,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [...pages, ...workCases]
}
