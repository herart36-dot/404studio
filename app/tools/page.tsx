import type { Metadata } from 'next'
import Tools from '@/components/Tools'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('tools', '/tools')

export default function ToolsPage() {
  return (
    <section className="on" data-page="tools">
      <h2>
        <span className="o">The</span>
        <span className="in">toolkit.</span>
      </h2>
      <p className="lead">Behind every site that moves is a stack that works.</p>
      <p className="tin">
        I use the same professional tools trusted by top studios and product teams. Every site I build is designed with
        precision, built to load fast, animated with taste and launched on infrastructure that scales. Here is every tool
        in my kit, and what it does for a project.
      </p>
      <Tools />
    </section>
  )
}
