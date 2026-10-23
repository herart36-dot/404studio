'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const HomeInfoScene = dynamic(() => import('@/components/HomeInfoScene'), { ssr: false })

type Palette = { primary: string; secondary: string; accent: string }

const FALLBACK_PALETTE: Palette = { primary: '#4f46e5', secondary: '#a855f7', accent: '#ec4899' }

export default function HomeInfoBackground() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [palette, setPalette] = useState(FALLBACK_PALETTE)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const style = getComputedStyle(document.documentElement)
    setPalette({
      primary: style.getPropertyValue('--c1').trim() || FALLBACK_PALETTE.primary,
      secondary: style.getPropertyValue('--c2').trim() || FALLBACK_PALETTE.secondary,
      accent: style.getPropertyValue('--c3').trim() || FALLBACK_PALETTE.accent,
    })

    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)')
    const mobile = matchMedia('(max-width: 700px)')
    let inView = false
    let tabVisible = !document.hidden

    const sync = () => setEnabled(!reducedMotion.matches && !mobile.matches && inView && tabVisible)
    const onVisibilityChange = () => {
      tabVisible = !document.hidden
      sync()
    }
    const onMediaChange = () => sync()

    const observer = 'IntersectionObserver' in window
      ? new IntersectionObserver(
          ([entry]) => {
            inView = entry.isIntersecting
            sync()
          },
          { rootMargin: '120px' },
        )
      : null
    if (observer) observer.observe(root)
    else inView = true
    sync()
    document.addEventListener('visibilitychange', onVisibilityChange)
    reducedMotion.addEventListener('change', onMediaChange)
    mobile.addEventListener('change', onMediaChange)

    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', onVisibilityChange)
      reducedMotion.removeEventListener('change', onMediaChange)
      mobile.removeEventListener('change', onMediaChange)
    }
  }, [])

  return (
    <div className="home-info-backdrop" ref={rootRef} aria-hidden="true">
      {enabled && <HomeInfoScene palette={palette} />}
    </div>
  )
}
