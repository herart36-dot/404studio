'use client'

import type { PointerEvent } from 'react'
import { SAMPLES } from '@/lib/data'
import TLink from './TLink'

function tilt(e: PointerEvent<HTMLAnchorElement>) {
  const c = e.currentTarget
  const b = c.getBoundingClientRect()
  const px = (e.clientX - b.left) / b.width
  const py = (e.clientY - b.top) / b.height
  c.style.setProperty('--px', px * 100 + '%')
  c.style.setProperty('--py', py * 100 + '%')
  if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
    c.style.transform = `perspective(700px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 8}deg)`
  }
}

export default function SampleCards() {
  return (
    <div className="cards" id="cards">
      {SAMPLES.map((s, i) => (
        <TLink
          key={s.slug}
          className="card feat"
          data-g={s.group}
          data-i={i}
          href={'/samples/' + s.slug}
          onPointerMove={tilt}
          onPointerLeave={(e) => {
            e.currentTarget.style.transform = ''
          }}
        >
          <small>{s.category}</small>
          <h3>{s.name}</h3>
          <p>{s.description}</p>
          <b>Preview here</b>
        </TLink>
      ))}
    </div>
  )
}
