import type { Metadata } from 'next'
import OpenSampleBadge from '@/components/OpenSampleBadge'
import WorkScreens from '@/components/WorkScreens'
import { pageMeta } from '@/lib/meta'

export const metadata: Metadata = pageMeta('work', '/work')

export default function WorkPage() {
  return (
    <>
      <section className="work-index on" data-page="work">
        <h1>Work and sample projects</h1>
        <p className="lead">Selected business websites, online stores and interface samples by 404 Studio.</p>
      </section>
      <section className="on" data-page="work">
        <div className="wh">
          <h2>
            <span className="o">TMM</span>
            <span className="in">Clippers</span>
            <span className="o">Salon</span>
          </h2>
          <OpenSampleBadge />
        </div>
        <div className="grid">
          <dl className="meta">
            <div>
              <dt>Category</dt>
              <dd>Web development, UX/UI design</dd>
            </div>
            <div>
              <dt>Client</dt>
              <dd>TMM Clippers Salon</dd>
            </div>
            <div>
              <dt>Branches</dt>
              <dd>Taguig and General Trias, Cavite</dd>
            </div>
            <div>
              <dt>Features</dt>
              <dd>Priced menu, service gallery, online booking</dd>
            </div>
          </dl>
          <div>
            <p className="lead">One salon, two branches, and customers who wanted prices and a slot without calling.</p>
            <p>
              I built a gallery of the salon&apos;s work, a menu with every price, a branch map, and a booking chat that
              saves each appointment. Customers pick a service, a date and a time in about a minute.
            </p>
          </div>
        </div>
      </section>
      <section className="on" data-page="work">
        <h2>
          <span className="o">Try</span>
          <span className="in">the screens</span>
        </h2>
        <WorkScreens />
      </section>
    </>
  )
}
