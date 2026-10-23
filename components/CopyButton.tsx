'use client'

import { useEffect, useRef, useState } from 'react'

function legacyCopy(text: string) {
  const a = document.createElement('textarea')
  a.value = text
  a.style.cssText = 'position:fixed;opacity:0'
  document.body.appendChild(a)
  a.select()
  try {
    document.execCommand('copy')
  } finally {
    a.remove()
  }
}

export default function CopyButton({ text }: { text: string }) {
  const [ok, setOk] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const done = () => {
    setOk(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setOk(false), 1600)
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      done()
    } catch {
      try {
        legacyCopy(text)
        done()
      } catch {
        /* ignore */
      }
    }
  }

  return (
    <button className={'cp' + (ok ? ' ok' : '')} data-c={text} type="button" onClick={copy}>
      {ok ? 'Copied' : 'Copy'}
    </button>
  )
}
