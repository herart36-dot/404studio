import type { Metadata } from 'next'
import HomeHero from '@/components/HomeHero'
import TLink from '@/components/TLink'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('home', '/')

const BAND = ['Web development', 'UI design', 'Interactive sites', 'Case studies', 'Mobile first']

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <div className="band on" data-page="home" aria-hidden="true">
        <div>
          {[...BAND, ...BAND].map((t, i) => (
            <span key={i}>
              {t}
              {'✦'}
            </span>
          ))}
        </div>
      </div>
      <section className="on" data-page="home">
      <div className="ll">
            <TLink href="/work">Work <span>+</span></TLink>
            <TLink href="/samples">Samples <span>+</span></TLink>
            <TLink href="/tools">Tools <span>+</span></TLink>
            <TLink href="/reviews">Reviews <span>+</span></TLink>
            <TLink href="/me">Me <span>+</span></TLink>
            <TLink href="/contact">Contact <span>+</span></TLink>
          </div>
      </section>
    </>
  )
}
