import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'


export const metadata: Metadata = pageMeta('reviews', '/reviews')

export default function ReviewsPage() {
  return (
    <section className="on" data-page="reviews">
      <h2><span className="o">What</span><span className="in">clients say</span></h2>
          <figure className="rev">
            <div className="stars" role="img" aria-label="5 out of 5 stars">★★★★★</div>
            <blockquote>The design is gorgeous. My logo fits right into the site, and the whole look is so kikay, just like my salon. The AI assistant is the best part: it&apos;s like my salon is open at every hour.</blockquote>
            <figcaption><b>Tarhata Marzon</b><br />Owner, TMM Clippers Salon</figcaption>
          </figure>
    </section>
  )
}
