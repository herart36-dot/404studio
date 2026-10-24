import type { Metadata } from 'next'
import TLink from '@/components/TLink'

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'The requested page could not be found on 404 Studio.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="ct on" data-page="contact">
      <h1 className="page-title">
        <span className="o">Page</span>
        <span className="in">not found.</span>
      </h1>
      <TLink className="big" href="/">
        Back to the home page
      </TLink>
    </section>
  )
}
