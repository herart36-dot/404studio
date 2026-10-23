import type { Metadata } from 'next'
import HomeHero from '@/components/HomeHero'
import TLink from '@/components/TLink'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = {
  ...pageMeta('home', '/', {
    title: '404 Studio | Web Developer for Small Businesses Worldwide',
  }),
  title: { absolute: '404 Studio | Web Developer for Small Businesses Worldwide' },
}

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
        <p className="home-keyword">
          Web developer building fast, mobile-friendly websites, online stores, and booking systems for small businesses
          worldwide.
        </p>
        <div className="home-info-grid">
          <section>
            <h2>Who I help</h2>
            <p>
              I work with small businesses such as salons, barbershops, restaurants and shops. A website can help
              customers understand what you offer, find useful information and take a next step. I&apos;m Kean Carl
              Donato, owner and developer at 404 Studio, based in the Philippines.
            </p>
          </section>
          <section>
            <h2>What I build</h2>
            <p>
              I build business websites, online stores, booking and lead-capture forms, and client dashboards. Projects
              are scoped around the business and the tasks customers need to complete.
            </p>
          </section>
          <section>
            <h2>Working remotely</h2>
            <p>
              I am based in the Philippines and work remotely with clients worldwide.
            </p>
          </section>
        </div>
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
