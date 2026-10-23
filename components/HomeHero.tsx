'use client'

import { useEffect, useRef } from 'react'

type Shape = { x: number; y: number; vx: number; vy: number; r: number; a: number; va: number; k: number; c: string }

const COLORS = ['#4f46e5', '#a855f7', '#ec4899']

export default function HomeHero() {
  const hero = useRef<HTMLDivElement>(null)
  const cv = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const heroEl = hero.current
    const canvas = cv.current
    const x = canvas?.getContext('2d')
    if (!heroEl || !canvas || !x) return

    const still = matchMedia('(prefers-reduced-motion:reduce)').matches
    const lines = heroEl.querySelectorAll<HTMLElement>('h1 .l')
    const P: Shape[] = []
    let W = 0
    let H = 0
    let mx = -999
    let my = -999
    let raf = 0

    const size = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2)
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width = W * dpr
      canvas.height = H * dpr
      x.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const mk = (px: number, py: number): Shape => ({
      x: px,
      y: py,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      r: 26 + Math.random() * 60,
      a: Math.random() * 6.28,
      va: (Math.random() - 0.5) * 0.02,
      k: Math.floor(Math.random() * 4),
      c: COLORS[Math.floor(Math.random() * 3)],
    })

    const draw = (p: Shape) => {
      x.save()
      x.translate(p.x, p.y)
      x.rotate(p.a)
      x.fillStyle = p.c
      x.strokeStyle = p.c
      x.lineWidth = 8
      const r = p.r
      x.beginPath()
      if (p.k === 0) {
        x.arc(0, 0, r, 0, 6.28)
        x.fill()
      } else if (p.k === 1) {
        x.arc(0, 0, r * 0.8, 0, 6.28)
        x.stroke()
      } else if (p.k === 2) {
        x.rect(-r, -r * 0.5, r * 2, r)
        x.fill()
      } else {
        x.moveTo(0, -r)
        x.lineTo(r, r * 0.8)
        x.lineTo(-r, r * 0.8)
        x.closePath()
        x.fill()
      }
      x.restore()
    }

    const step = () => {
      x.clearRect(0, 0, W, H)
      P.forEach((p) => {
        const dx = p.x - mx
        const dy = p.y - my
        const d = Math.sqrt(dx * dx + dy * dy) || 1
        if (d < 190) {
          const f = ((190 - d) / 190) * 1.5
          p.vx += (dx / d) * f
          p.vy += (dy / d) * f
          p.va += 0.003
        }
        p.vx *= 0.985
        p.vy *= 0.985
        p.x += p.vx
        p.y += p.vy
        p.a += p.va
        if (p.x < p.r || p.x > W - p.r) {
          p.vx *= -1
          p.x = Math.max(p.r, Math.min(W - p.r, p.x))
        }
        if (p.y < p.r || p.y > H - p.r) {
          p.vy *= -1
          p.y = Math.max(p.r, Math.min(H - p.r, p.y))
        }
        draw(p)
      })
      if (!still) raf = requestAnimationFrame(step)
    }

    size()
    for (let i = 0; i < 12; i++) P.push(mk(Math.random() * W, Math.random() * H))

    const onResize = () => {
      size()
      if (still) step()
    }
    const onMove = (e: PointerEvent) => {
      const b = canvas.getBoundingClientRect()
      mx = e.clientX - b.left
      my = e.clientY - b.top
      if (!still) {
        const nx = e.clientX / innerWidth - 0.5
        lines.forEach((l, i) => {
          l.style.transform = `translateX(${nx * (i % 2 ? -1 : 1) * (14 + i * 8)}px)`
        })
      }
    }
    const onLeave = () => {
      mx = my = -999
      lines.forEach((l) => {
        l.style.transform = ''
      })
    }
    const onDown = (e: PointerEvent) => {
      const b = canvas.getBoundingClientRect()
      for (let i = 0; i < 3; i++) P.push(mk(e.clientX - b.left, e.clientY - b.top))
      if (P.length > 36) P.splice(0, P.length - 36)
      if (still) step()
    }

    addEventListener('resize', onResize)
    heroEl.addEventListener('pointermove', onMove)
    heroEl.addEventListener('pointerleave', onLeave)
    heroEl.addEventListener('pointerdown', onDown)
    step()

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('resize', onResize)
      heroEl.removeEventListener('pointermove', onMove)
      heroEl.removeEventListener('pointerleave', onLeave)
      heroEl.removeEventListener('pointerdown', onDown)
    }
  }, [])

  return (
    <div className="hero on" data-page="home" ref={hero}>
      <canvas id="cv" ref={cv} aria-hidden="true"></canvas>
      <div className="hint">Move your cursor. Click to throw shapes.</div>
      <div className="side">Portfolio of Kean Carl Donato, PH</div>
      <h1 aria-label="Websites that move.">
        <span className="l o">
          <span>WEB</span>
        </span>
        <span className="l">
          <span>SITES</span>
        </span>
        <span className="l">
          <span className="gt">THAT</span>
        </span>
        <span className="l o">
          <span>MOVE.</span>
        </span>
      </h1>
    </div>
  )
}
