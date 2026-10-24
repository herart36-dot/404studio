import type { Metadata } from 'next'
import TLink from '@/components/TLink'
import { SERVICES } from '@/lib/services'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('services', '/services', {
  title: 'Web Design Services',
  description: 'Explore websites, booking systems and online stores built for salon, barbershop, restaurant and small shop owners.',
})

export default function ServicesPage() {
  return (
    <section className="on" data-page="services">
      <h1 className="page-title">Websites and systems for small businesses</h1>
      <p className="lead">Choose a service built around the questions your customers need answered and the next step they need to take.</p>
      <h2>Choose the service for your business</h2>
      <div className="cards">
        {SERVICES.map((service) => (
          <TLink className="card feat" href={`/services/${service.slug}`} key={service.slug}>
            <small>404 Studio service</small>
            <h3>{service.seoTitle}</h3>
            <p>{service.shortDescription}</p>
            <b>Explore this service</b>
          </TLink>
        ))}
      </div>
      <p className="ll">
        <TLink className="pill" href="/contact">Discuss a project</TLink>
      </p>
    </section>
  )
}
