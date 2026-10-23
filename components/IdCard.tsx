'use client'

import { useRef } from 'react'

export default function IdCard() {
  const ref = useRef<HTMLDivElement>(null)

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--sx', (1 - px) * 100 + '%')
    if (!matchMedia('(prefers-reduced-motion:reduce)').matches) {
      el.style.transform = `perspective(800px) rotateX(${(0.5 - py) * 12}deg) rotateY(${(px - 0.5) * 12}deg)`
    }
  }

  return (
    <div
      className="idc"
      id="idc"
      ref={ref}
      onPointerMove={move}
      onPointerLeave={() => {
        if (ref.current) ref.current.style.transform = ''
      }}
    >
      <div className="idh">
        <span>404studio.click</span>
        <span>Developer</span>
      </div>
      <div className="idp" aria-hidden="true">
        KD
      </div>
      <div className="idn">Kean Carl Donato</div>
      <div className="idr">Founder, 404 Studio</div>
      <div className="ida">
        <i className="live"></i>Available for projects
      </div>
    </div>
  )
}
