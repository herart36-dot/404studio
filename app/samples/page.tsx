import type { Metadata } from 'next'
import SampleCards from '@/components/SampleCards'
import TLink from '@/components/TLink'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('samples', '/samples')

export default function SamplesPage() {
  return (
    <section className="on" data-page="samples">
      <h1 className="page-title">Interactive website samples</h1>
      <p className="lead">Preview interactive sample sites made for small businesses, shops and creative projects.</p>
      <h2 className="sr-only">Explore the sample sites</h2>
      <SampleCards />
      <p className="ll">
        <TLink className="pill" href="/contact">Discuss a website project</TLink>
      </p>
    </section>
  )
}
