'use client'

import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import HomeInfoBackground from '@/components/HomeInfoBackground'

const INFO_CARDS = [
  {
    title: 'Who I help',
    copy: (
      <>
        I work with small businesses such as salons, barbershops, restaurants and shops. A website can help customers
        understand what you offer, find useful information and take a next step. I&apos;m Kean Carl Donato, owner and
        developer at 404 Studio, based in the Philippines.
      </>
    ),
  },
  {
    title: 'What I build',
    copy: (
      <>
        I build business websites, online stores, booking and lead-capture forms, and client dashboards. Projects are
        scoped around the business and the tasks customers need to complete.
      </>
    ),
  },
  {
    title: 'Working remotely',
    copy: <>I am based in the Philippines and work remotely with clients worldwide.</>,
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
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
