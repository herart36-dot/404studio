'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import HomeInfoBackground from '@/components/HomeInfoBackground'

const INFO_CARDS = [
  {
    title: 'Who I help',
    content: (
      <>
        <p>
          I work with small businesses that need to be found and trusted online: salons, barbershops, restaurants and
          local shops. Most don&apos;t need a huge platform. They need a clear website that shows what they offer,
          answers the questions customers keep asking, and makes the next step obvious, whether that&apos;s booking,
          ordering or sending a message. I&apos;m Kean Carl Donato, owner and developer at 404 Studio, based in the
          Philippines.
        </p>
      </>
    ),
  },
  {
    title: 'What I build',
    content: (
      <>
        <ul className="home-info-list">
          <li>
            <strong>Business websites:</strong> fast, mobile-friendly pages for your services, hours, location and
            contact details.
          </li>
          <li>
            <strong>Online stores:</strong> product pages and a simple way for customers to order.
          </li>
          <li>
            <strong>Booking and lead-capture forms:</strong> so appointments and enquiries reach you instead of getting
            lost.
          </li>
          <li>
            <strong>Client dashboards:</strong> a private place to see bookings, enquiries or customer details.
          </li>
        </ul>
        <p>Each project is scoped around your business and the tasks your customers need to complete.</p>
      </>
    ),
  },
  {
    title: 'Working remotely',
    content: (
      <p>
        I&apos;m based in the Philippines and work remotely with clients worldwide, so you don&apos;t need to be in the
        same city or time zone. Everything happens online, from the first conversation to launch. You can reach me at{' '}
        <a href="mailto:keandonato69@gmail.com">keandonato69@gmail.com</a>.
      </p>
    ),
  },
]

export default function HomeInfoSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const cards = section.querySelectorAll<HTMLElement>('.home-info-card')
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    section.classList.add('motion-ready')
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => {
      observer.disconnect()
      section.classList.remove('motion-ready')
    }
  }, [])

  return (
    <section className="on home-info-section" data-page="home" ref={sectionRef}>
      <HomeInfoBackground />
      <div className="home-info-content">
        <p className="home-keyword">
          Web developer building fast, mobile-friendly websites, online stores, and booking systems for small businesses
          worldwide.
        </p>
        <div className="home-info-grid">
          {INFO_CARDS.map((card, index) => (
            <article className="home-info-card" key={card.title} style={{ '--card-order': index } as CSSProperties}>
              <span className="home-info-index" aria-hidden="true">
                0{index + 1}
              </span>
              <h2>{card.title}</h2>
              <div className="home-info-card-copy">{card.content}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
