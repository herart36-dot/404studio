import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import TLink from '@/components/TLink'
import { SITE_URL } from '@/lib/data'
import { pageMeta } from '@/lib/meta'
import { SERVICES, SERVICES_BY_SLUG } from '@/lib/services'
import { WORK_CASES_BY_SLUG } from '@/lib/work-cases'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SERVICES.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES_BY_SLUG.get(slug)
  if (!service) return {}
  return pageMeta('services', `/services/${slug}`, {
    title: service.seoTitle,
    description: service.metaDescription,
  })
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const service = SERVICES_BY_SLUG.get(slug)
  if (!service) notFound()

  const relatedServices = SERVICES.filter((item) => item.slug !== service.slug)
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      { '@type': 'ListItem', position: 3, name: service.seoTitle, item: `${SITE_URL}/services/${service.slug}` },
    ],
  }
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.seoTitle,
    description: service.metaDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { '@type': 'ProfessionalService', name: '404 Studio', url: SITE_URL },
    areaServed: [{ '@type': 'Country', name: 'Philippines' }, 'Worldwide'],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <section className="work-case-page on" data-page="services">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumb} />
      <h1>{service.h1}</h1>
      <p className="lead">{service.intro}</p>
      <div className="work-case-copy">
        <h2>Problems this service addresses</h2>
        <ul>{service.problems.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>What you get</h2>
        <ul>{service.whatYouGet.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>Features we can plan</h2>
        <ul>{service.features.map((item) => <li key={item}>{item}</li>)}</ul>

        <h2>How we work together</h2>
        <ol>{service.process.map((item) => <li key={item}>{item}</li>)}</ol>

        <h2>Frequently asked questions</h2>
        {service.faq.map(({ question, answer }) => (
          <div key={question}>
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        ))}

        <h2>Related work</h2>
        {service.relatedWorkSlugs.length ? (
          <ul>
            {service.relatedWorkSlugs.map((workSlug) => {
              const project = WORK_CASES_BY_SLUG.get(workSlug)
              return project ? (
                <li key={project.slug}><TLink href={`/work/${project.slug}`}>{project.name} project</TLink></li>
              ) : null
            })}
          </ul>
        ) : (
          <p>There is no matching barbershop project in the current work collection.</p>
        )}

        <h2>Related services</h2>
        <ul>
          {relatedServices.map((related) => (
            <li key={related.slug}><TLink href={`/services/${related.slug}`}>{related.seoTitle}</TLink></li>
          ))}
        </ul>
      </div>
      <p className="ll">
        <TLink className="pill" href="/contact">{service.ctaText}</TLink>
      </p>
    </section>
  )
}
