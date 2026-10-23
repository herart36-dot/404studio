'use client'

import { useEffect, useRef, useState } from 'react'
import type { Sample } from '@/lib/data'
import { useShell } from './shell-context'

/** Full-screen device preview of a sample site, shown on /samples/[slug]. */
export default function SampleViewer({ sample }: { sample: Sample }) {
  const { closeViewer } = useShell()
  const [phone, setPhone] = useState(false)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const closeRef = useRef(closeViewer)
  closeRef.current = closeViewer

  useEffect(() => {
    const last = document.activeElement as HTMLElement | null
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current()
    }
    addEventListener('keydown', onKey)
    return () => {
      removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      last?.focus?.()
    }
  }, [])

  return (
    <div id="vw" className="on" role="dialog" aria-modal="true" aria-label={`${sample.name} sample site`}>
      <div className="vb">
        <strong id="vtl">{sample.name} sample</strong>
        <button className={'pill' + (phone ? '' : ' on')} id="vd" type="button" onClick={() => setPhone(false)}>
          Desktop
        </button>
        <button className={'pill' + (phone ? ' on' : '')} id="vp" type="button" onClick={() => setPhone(true)}>
          Phone
        </button>
        <button className="pill" id="vx" type="button" ref={closeBtn} onClick={closeViewer}>
          Close
        </button>
      </div>
      <div className="vn">
        <iframe id="fr" className={phone ? 'ph' : undefined} title={`${sample.name} sample website`} src={'/' + sample.file} />
      </div>
      <div className="vt" id="vnote">
        {sample.note}
      </div>
    </div>
  )
}
