import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TLink from '@/components/TLink'
import { WORK_CASES, WORK_CASES_BY_SLUG } from '@/lib/work-cases'
import { pageMeta } from '@/lib/meta'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return WORK_CASES.map(({ slug }) => ({ slug }))
}

function descriptionFor(slug: string) {
  const project = WORK_CASES_BY_SLUG.get(slug)
  return project
    ? `${project.name} is a ${project.businessType.toLowerCase()} ${project.isSample ? 'sample project' : 'case study'} by 404 Studio. ${project.features.join(', ')}.`
    : ''
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project) return {}

  return pageMeta('work', `/work/${slug}`, {
    title: `${project.name} | ${project.businessType}`,
    description: descriptionFor(slug),
  })
}

export default async function WorkCasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project) notFound()

  const previewPath =
    project.source === 'public' ? `/${project.file}` : `/work/${project.slug}/preview`

  return (
    <section className="work-case-page on" data-page="work">
      <h1>{project.name}</h1>
      <p className="work-case-label">
        {project.isSample ? 'Sample project' : 'Case study'} · {project.businessType}
      </p>
      <div className="work-case-copy">
        <h2>Project brief</h2>
        <p>{project.problem}</p>
        <h2>What I built</h2>
        <p>{project.built}</p>
        <h2>Features shown</h2>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h2>Technology</h2>
        <p>Built as a standalone HTML, CSS, and JavaScript sample. A production version could be built with Next.js.</p>
      </div>
      <p>
        <a href={previewPath} target="_blank" rel="noopener noreferrer">
          Open the {project.name} sample
        </a>
      </p>
      <iframe className="work-case-preview" src={previewPath} title={`${project.name} sample project preview`} sandbox="allow-scripts allow-forms allow-popups" />
      {project.slug === 'tmm-clippers' && (
        <p>
          <TLink href="/work">Read the TMM Clippers case study</TLink>
        </p>
      )}
      <p className="work-case-back">
        <TLink href="/work">Back to Work</TLink>
      </p>
    </section>
  )
}
