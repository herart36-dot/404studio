import type { Metadata } from 'next'
import TLink from '@/components/TLink'

export const metadata: Metadata = {
  title: { absolute: 'Page not found | Kean Carl Donato' },
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
