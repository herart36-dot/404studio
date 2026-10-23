import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SampleCards from '@/components/SampleCards'
import SampleViewer from '@/components/SampleViewer'
import { SAMPLES } from '@/lib/data'
import { pageMeta } from '@/lib/meta'

type Params = { slug: string }

export const dynamicParams = false

export function generateStaticParams(): Params[] {
  return SAMPLES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const s = SAMPLES.find((x) => x.slug === slug)
  if (!s) return {}
  return pageMeta('samples', `/work/${s.slug}`, {
    title: `${s.name}: sample website by Kean Carl Donato`,
    description: `${s.description} A sample website by Kean Carl Donato, web developer in the Philippines.`,
  })
}

export default async function SamplePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const sample = SAMPLES.find((s) => s.slug === slug)
  if (!sample) notFound()

  // The gallery stays rendered underneath the full-screen viewer, like the original site.
  return (
    <>
      <section className="on" data-page="samples">
        <h2>
          <span className="o">Sample</span>
          <span className="in">works</span>
        </h2>
        <SampleCards />
      </section>
      <SampleViewer sample={sample} />
    </>
  )
}
