import type { Metadata } from 'next'
import SampleCards from '@/components/SampleCards'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('samples', '/samples')

export default function SamplesPage() {
  return (
    <section className="on" data-page="samples">
      <h2>
        <span className="o">Sample</span>
        <span className="in">works</span>
      </h2>
      <SampleCards />
    </section>
  )
}
