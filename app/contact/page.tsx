import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import EmailAddress from '@/components/EmailAddress'


export const metadata: Metadata = pageMeta('contact', '/contact')

export default function ContactPage() {
  return (
    <section className="ct on" data-page="contact">
      <h1 className="page-title"><span className="o">Let&apos;s</span><span className="in">work together.</span></h1>
          <EmailAddress className="contact-email" />
          <div className="ll" style={{marginTop:"40px"}}>
            <a href="viber://chat?number=%2B639619679095">Viber <span>+</span></a>
            <a href="https://www.linkedin.com/in/kean-carl-donato-8178b43b9" target="_blank" rel="noopener">LinkedIn <span>+</span></a>
            <a href="https://www.facebook.com/kean.concepcion.12/" target="_blank" rel="noopener">Facebook <span>+</span></a>
          </div>
    </section>
  )
}
