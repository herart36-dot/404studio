'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const EMAIL = 'keandonato69@gmail.com'

function legacyCopy() {
  try {
    const t = document.createElement('textarea')
    t.value = EMAIL
    t.style.cssText = 'position:fixed;left:-9999px;opacity:0'
    document.body.appendChild(t)
    t.select()
    const ok = document.execCommand('copy')
    t.remove()
    return ok
  } catch {
    return false
  }
}

export default function EmailAddress({
  className = '',
  variant = 'card',
}: {
  className?: string
  variant?: 'card' | 'footer'
}) {
  const [status, setStatus] = useState<'copied' | 'failed' | null>(null)
  const timer = useRef<number | undefined>(undefined)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  useEffect(() => {
    if (variant !== 'card' || !root.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.ec-char', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.02, duration: 0.5, ease: 'power3.out' })
      gsap.fromTo('.ec-fade', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power3.out' })
    }, root)
    return () => ctx.revert()
  }, [variant])

  const copyEmail = async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(EMAIL)
      ok = true
    } catch {
      ok = legacyCopy()
    }
    setStatus(ok ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus(null), 2000)
  }

  if (variant === 'footer') {
    return (
      <span className={`email-address email-address-footer ${className}`.trim()}>
        <a className="email-address-link" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </a>
        <button
          className="email-copy-button email-copy-button-footer"
          type="button"
          aria-label="Copy email address"
          onClick={copyEmail}
        >
          {status === 'copied' ? '✓' : 'Copy'}
        </button>
      </span>
    )
  }

  return (
    <div className={`ec ${className}`.trim()} ref={root}>
      <p className="ec-label ec-fade">
        <i className="live" /> Email me
      </p>
      <a className="ec-mail" href={`mailto:${EMAIL}`} aria-label={EMAIL}>
        {EMAIL.split('@').map((part, p) => (
          <span key={p} className="ec-line" aria-hidden="true">
            {(p === 1 ? '@' + part : part).split('').map((c, i) => (
              <span key={i} className={c === '@' ? 'ec-char at' : 'ec-char'}>
                {c}
              </span>
            ))}
          </span>
        ))}
      </a>
      <p className="ec-loc ec-fade">Based in the Philippines · working with clients worldwide</p>
      <div className="ec-actions ec-fade">
        <button type="button" className="ec-btn ec-primary" onClick={copyEmail}>
          {status === 'copied' ? 'Copied ✓' : 'Copy email'}
        </button>
        <a className="ec-btn ec-ghost" href={`mailto:${EMAIL}`}>
          Open mail app
        </a>
      </div>
      <span className="sr-only" role="status" aria-live="polite">
        {status === 'copied' ? 'Email copied' : status === 'failed' ? 'Copy failed' : ''}
      </span>
    </div>
  )
}