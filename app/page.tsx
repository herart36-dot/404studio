import type { Metadata } from 'next'
import HomeHero from '@/components/HomeHero'
import HomeInfoSection from '@/components/HomeInfoSection'
import JsonLd from '@/components/JsonLd'
import TLink from '@/components/TLink'
import { pageMeta } from '@/lib/meta'
import { SITE_URL, TITLES } from '@/lib/data'

export const metadata: Metadata = {
  ...pageMeta('home', '/'),
  title: { absolute: `${TITLES.home} | 404 Studio` },
}

const BAND = ['Web development', 'UI design', 'Interactive sites', 'Case studies', 'Mobile first']

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: '404 Studio',
          url: SITE_URL,
          description:
            '404 Studio builds clear business websites, online stores, booking forms and client dashboards for small businesses in the Philippines and worldwide.',
          areaServed: [{ '@type': 'Country', name: 'Philippines' }, 'Worldwide'],
          email: 'keandonato69@gmail.com',
          sameAs: [
            'https://www.linkedin.com/in/kean-carl-donato-8178b43b9',
            'https://www.facebook.com/kean.concepcion.12/',
          ],
        }}
      />
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
      <HomeInfoSection />
      <section className="on" data-page="home">
        <h2>Services</h2>
        <p className="lead">Websites and online tools shaped around the needs of local businesses.</p>
        <div className="ll">
          <TLink href="/services/website-for-salons">Websites for salons <span>+</span></TLink>
          <TLink href="/services/booking-system-for-barbershops">Booking systems for barbershops <span>+</span></TLink>
          <TLink href="/services/website-for-restaurants">Websites for restaurants <span>+</span></TLink>
          <TLink href="/services/online-store-for-small-shops">Online stores for small shops <span>+</span></TLink>
        </div>
        <TLink className="pill" href="/services">Explore all services</TLink>
      </section>
      <section className="on" data-page="home">
        <div className="ll">
          <TLink href="/work">Work <span>+</span></TLink>
          <TLink href="/samples">Samples <span>+</span></TLink>
          <TLink href="/services">Services <span>+</span></TLink>
          <TLink href="/tools">Tools <span>+</span></TLink>
          <TLink href="/reviews">Reviews <span>+</span></TLink>
          <TLink href="/me">Me <span>+</span></TLink>
          <TLink href="/contact">Contact <span>+</span></TLink>
        </div>
      </section>
    </>
  )
}
