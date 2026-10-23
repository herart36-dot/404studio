'use client'

import { useCallback, useEffect, useRef, useState, type PointerEvent } from 'react'
import { LOGOS, LOGO_BASES, TOOLS, TOOL_GROUPS, type Tool } from '@/lib/data'
import TLink from './TLink'

const FILTERS = ['All', 'Design', 'Build', 'Motion', 'Shop', 'Launch']

function logoUrls(name: string) {
  const o = LOGOS[name] || {}
  const u: string[] = []
  if (o.g) u.push(LOGO_BASES.g + o.g + '.svg')
  if (o.d) u.push(LOGO_BASES.d + o.d + '.svg')
  if (o.s) u.push(LOGO_BASES.s + o.s + '.svg')
  return u
}

function Tile({ tool, hidden }: { tool: Tool; hidden: boolean }) {
  const card = useRef<HTMLElement>(null)
  const logo = useRef<HTMLButtonElement>(null)
  const [src, setSrc] = useState<string | null>(null)

  // Try each logo source in order; fall back to the monogram if none loads.
  useEffect(() => {
    let cancelled = false
    const list = logoUrls(tool.name)
    const tryNext = (k: number) => {
      if (cancelled || k >= list.length) return
      const im = new Image()
      im.decoding = 'async'
      im.onload = () => !cancelled && setSrc(list[k])
      im.onerror = () => tryNext(k + 1)
      im.src = list[k]
    }
    tryNext(0)
    return () => {
      cancelled = true
    }
  }, [tool.name])

  const move = (e: PointerEvent<HTMLElement>) => {
    const c = card.current
    const lg = logo.current
    if (!c || !lg) return
    const r = c.getBoundingClientRect()
    c.style.setProperty('--px', ((e.clientX - r.left) / r.width) * 100 + '%')
    c.style.setProperty('--py', ((e.clientY - r.top) / r.height) * 100 + '%')
    const q = lg.getBoundingClientRect()
    let dx = (e.clientX - (q.left + q.width / 2)) / (r.width / 2)
    let dy = (e.clientY - (q.top + q.height / 2)) / (r.height / 2)
    dx = Math.max(-1, Math.min(1, dx))
    dy = Math.max(-1, Math.min(1, dy))
    lg.style.setProperty('--ry', dx * 22 + 'deg')
    lg.style.setProperty('--rx', -dy * 22 + 'deg')
    lg.style.setProperty('--sx', 120 - (dx + 1) * 70 + '%')
  }

  const leave = () => {
    const lg = logo.current
    if (!lg) return
    lg.style.setProperty('--rx', '0deg')
    lg.style.setProperty('--ry', '0deg')
    lg.style.setProperty('--sx', '120%')
  }

  const pop = () => {
    const lg = logo.current
    if (!lg) return
    lg.classList.remove('pop')
    void lg.offsetWidth
    lg.classList.add('pop')
  }

  return (
    <article className="tl" data-g={tool.group} hidden={hidden} ref={card} onPointerMove={move} onPointerLeave={leave}>
      <div className="lgw">
        <button
          className="lg"
          type="button"
          ref={logo}
          aria-label={`${tool.name} logo`}
          onClick={pop}
          onAnimationEnd={(e) => e.currentTarget.classList.remove('pop')}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {src ? <img src={src} alt="" decoding="async" /> : (
            <span className="mn" aria-hidden="true">
              {tool.mono}
            </span>
          )}
        </button>
      </div>
      <small>{TOOL_GROUPS[tool.group]}</small>
      <h3>{tool.name}</h3>
      <p className="hk">{tool.hook}</p>
      <p className="us">
        <b>What it is used for</b>
        {tool.usage}
      </p>
    </article>
  )
}

export default function Tools() {
  const [filter, setFilter] = useState('All')
  const grid = useRef<HTMLDivElement>(null)
  const shown = TOOLS.filter((t) => filter === 'All' || t.group === filter).length

  // Shrink long tool names until they fit inside the card.
  const fit = useCallback(() => {
    grid.current?.querySelectorAll<HTMLElement>('.tl h3').forEach((h) => {
      h.style.fontSize = ''
      if (!h.clientWidth) return
      let s = parseFloat(getComputedStyle(h).fontSize)
      let n = 0
      while (h.scrollWidth > h.clientWidth + 1 && s > 15 && n < 40) {
        s -= 1
        h.style.fontSize = s + 'px'
        n++
      }
    })
  }, [])

  useEffect(() => {
    fit()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(fit) : null
    if (grid.current) ro?.observe(grid.current)
    addEventListener('resize', fit)
    document.fonts?.ready.then(fit)
    return () => {
      ro?.disconnect()
      removeEventListener('resize', fit)
    }
  }, [fit, filter])

  return (
    <>
      <div className="flt" id="tf" role="group" aria-label="Filter tools by stage">
        {FILTERS.map((f) => (
          <button key={f} className={'chip' + (filter === f ? ' on' : '')} type="button" onClick={() => setFilter(f)}>
            {f === 'Shop' ? 'Shop and content' : f}
          </button>
        ))}
      </div>
      <p className="tcnt" id="tc" aria-live="polite">
        {shown + (shown === 1 ? ' tool' : ' tools') + ' in the kit'}
      </p>
      <div className="tg" id="tg" ref={grid}>
        {TOOLS.map((t) => (
          <Tile key={t.name} tool={t} hidden={!(filter === 'All' || t.group === filter)} />
        ))}
      </div>
      <div className="ct tcta">
        <p className="lead">Want this stack working for your business?</p>
        <TLink className="big" href="/contact">
          Let&apos;s build it
        </TLink>
      </div>
    </>
  )
}
