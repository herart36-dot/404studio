import type { Metadata } from 'next'
import { pageMeta } from '@/lib/meta'
import CopyButton from '@/components/CopyButton'
import IdCard from '@/components/IdCard'

export const metadata: Metadata = pageMeta('me', '/me')

export default function MePage() {
  return (
    <section className="on" data-page="me">
      <h2><span className="o">Hi,</span><span className="in">I&apos;m Kean.</span></h2>
          <div className="prof">
            <IdCard />
            <div>
              <h3>Kean Carl Donato</h3>
              <p className="role">Founder and web developer at 404 Studio, Quezon City, Philippines</p>
              <span className="avail">Available for projects</span>
              <p className="bio">I design and build custom websites that bring together visual storytelling, thoughtful user experience and functional web solutions: responsive design, front-end development, interactive interfaces, portfolio sites and e-commerce concepts. Through 404 Studio, I make professionally designed websites more accessible to small businesses, independent creators and emerging brands.</p>
              <div className="crows">
                <div className="crow"><span>Email</span><a href="mailto:keandonato@404studio.click">keandonato@404studio.click</a><CopyButton text="keandonato@404studio.click" /></div>
                <div className="crow"><span>Viber</span><a href="viber://chat?number=%2B639619679095">+63 961 967 9095</a><CopyButton text="+63 961 967 9095" /></div>
                <div className="crow"><span>Based in</span><b>Quezon City, Philippines</b><i></i></div>
                <div className="crow"><span>Website</span><b>404studio.click</b><CopyButton text="404studio.click" /></div>
              </div>
              <div className="ll">
                <a href="https://www.linkedin.com/in/kean-carl-donato-8178b43b9" target="_blank" rel="noopener">LinkedIn <span>+</span></a>
                <a href="https://www.facebook.com/kean.concepcion.12/" target="_blank" rel="noopener">Facebook <span>+</span></a>
              </div>
              <div className="stats"><div><b className="o">9</b><span>Sample sites built</span></div><div><b className="o">100%</b><span>Mobile-friendly builds</span></div></div>
            </div>
          </div>
    </section>
  )
}
