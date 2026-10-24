import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import TLink from '@/components/TLink'
import { WORK_CASES, WORK_CASES_BY_SLUG } from '@/lib/work-cases'
import { pageMeta } from '@/lib/meta'
import { SITE_URL } from '@/lib/data'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return WORK_CASES.map(({ slug }) => ({ slug }))
}

function descriptionFor(slug: string) {
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project) return ''
  const description = `${project.name}: ${project.businessType} website project breakdown featuring ${project.features.slice(0, 2).join(' and ')}.`
  if (description.length <= 155) return description
  return `${project.name}: ${project.businessType} website project featuring ${project.features[0]}.`.slice(0, 155)
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project) return {}

  return pageMeta('work', `/work/${slug}`, {
    title: project.name,
    description: descriptionFor(slug),
  })
}

export default async function WorkCasePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const project = WORK_CASES_BY_SLUG.get(slug)
  if (!project) notFound()

  const previewPath =
    project.source === 'public' ? `/${project.file}` : `/work/${project.slug}/preview`
  const businessType = project.businessType.toLowerCase()
  const service = businessType.includes('salon')
    ? { path: '/services/website-for-salons', label: 'salon website service' }
    : businessType.includes('coffee shop')
      ? { path: '/services/website-for-restaurants', label: 'restaurant website service' }
      : businessType.includes('barber')
        ? { path: '/services/booking-system-for-barbershops', label: 'barbershop booking system' }
        : businessType.includes('shop')
          ? { path: '/services/online-store-for-small-shops', label: 'online store service for small shops' }
          : { path: '/services', label: '404 Studio services' }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Work', item: `${SITE_URL}/work` },
      { '@type': 'ListItem', position: 3, name: project.name, item: `${SITE_URL}/work/${project.slug}` },
    ],
  }

  return (
    <section className="work-case-page on" data-page="work">
      <JsonLd data={breadcrumb} />
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
      <p>Explore the <TLink href={service.path}>{service.label}</TLink>.</p>
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
