import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/JsonLd'
import SampleCards from '@/components/SampleCards'
import SampleViewer from '@/components/SampleViewer'
import { SITE_URL, SAMPLES } from '@/lib/data'
import { pageMeta } from '@/lib/meta'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SAMPLES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const sample = SAMPLES.find((item) => item.slug === slug)
  if (!sample) return {}
  return pageMeta('samples', `/samples/${sample.slug}`, {
    title: `${sample.name} Website Sample`,
    description: sample.seoDescription,
  })
}

export default async function SamplePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const sample = SAMPLES.find((s) => s.slug === slug)
  if (!sample) notFound()
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Samples', item: `${SITE_URL}/samples` },
      { '@type': 'ListItem', position: 3, name: sample.name, item: `${SITE_URL}/samples/${sample.slug}` },
    ],
  }

  // The gallery stays rendered underneath the full-screen viewer, like the original site.
  return (
    <>
      <JsonLd data={breadcrumb} />
      <section className="on" data-page="samples">
        <h1 className="page-title">
          <span className="o">Sample</span>
          <span className="in">works</span>
        </h1>
        <SampleCards />
      </section>
      <SampleViewer sample={sample} />
    </>
  )
}
