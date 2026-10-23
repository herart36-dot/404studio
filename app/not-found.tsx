import type { Metadata } from 'next'
import TLink from '@/components/TLink'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = {
  ...pageMeta('contact', '/404', {
    title: 'Page not found',
    description: 'The requested page could not be found on 404 Studio.',
  }),
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section className="ct on" data-page="contact">
      <h2>
        <span className="o">Page</span>
        <span className="in">not found.</span>
      </h2>
      <TLink className="big" href="/">
        Back to the home page
      </TLink>
    </section>
  )
}
