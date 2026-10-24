import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { WORK_CASES_BY_SLUG } from '@/lib/work-cases'

export const runtime = 'nodejs'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project || project.source !== 'legacy') {
    return new Response('Not found', { status: 404 })
  }

  const sourcePath = path.join(process.cwd(), 'legacy', project.file)
  const html = await readFile(sourcePath, 'utf8')
  return new Response(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'X-Frame-Options': 'SAMEORIGIN',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
