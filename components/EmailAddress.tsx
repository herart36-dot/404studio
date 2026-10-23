'use client'

import { useEffect, useRef, useState } from 'react'

const EMAIL = 'keandonato69@gmail.com'

function legacyCopy() {
  let textarea: HTMLTextAreaElement | undefined

  try {
    textarea = document.createElement('textarea')
    textarea.value = EMAIL
    textarea.setAttribute('readonly', '')
    textarea.setAttribute('aria-hidden', 'true')
    textarea.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0'
    document.body.appendChild(textarea)
    textarea.select()
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    try {
      textarea?.remove()
    } catch {
      return false
    }
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

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copyEmail = async () => {
    let copied = false

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
        copied = true
      } else {
        copied = legacyCopy()
      }
    } catch {
      copied = legacyCopy()
    }

    setStatus(copied ? 'copied' : 'failed')
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus(null), 2000)
  }

  const copyButton = (labelText: string, extraClass = '') => (
      <button
        className={`email-copy-button${status === 'copied' ? ' is-copied' : ''} ${extraClass}`.trim()}
        type="button"
        aria-label="Copy email address"
        onClick={copyEmail}
      >
        <svg className="email-copy-icon" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <g className="email-copy-float">
            <g className="email-copy-art">
              <rect className="email-copy-body" x="5" y="13" width="38" height="27" rx="1" />
              <path className="email-copy-letter" d="M13 30V12h22v18" />
              <path className="email-copy-flap" d="m5.5 14 18.5 15L42.5 14" />
            </g>
            <path className="email-copy-check" d="m14 25 7 7 14-15" />
            <g className="email-copy-sparks">
              <circle cx="7" cy="8" r="1.5" />
              <circle cx="24" cy="4" r="1.5" />
              <circle cx="41" cy="8" r="1.5" />
              <circle cx="4" cy="27" r="1.5" />
              <circle cx="44" cy="29" r="1.5" />
            </g>
          </g>
        </svg>
        {labelText && (
          <span className="email-copy-button-label" aria-live="polite">
            {status === 'copied' ? 'Copied!' : labelText}
          </span>
        )}
      </button>
  )

  if (variant === 'footer') {
    return (
      <span className={`email-address email-address-footer ${className}`.trim()}>
        <a className="email-address-link" href={`mailto:${EMAIL}`}>
          keandonato69@gmail.com
        </a>
        {copyButton('', 'email-copy-button-footer')}
        <span className="sr-only" aria-live="polite">
          {status === 'copied' ? 'Copied!' : status === 'failed' ? 'Copy failed, select the text instead' : ''}
        </span>
      </span>
    )
  }

  return (
    <div className={`email-address email-address-card ${className}`.trim()}>
      <div className="email-address-row">
        {copyButton('', 'email-copy-button-card')}
        <div className="email-address-text">
          <span className="email-address-label">EMAIL ME</span>
          <a className="email-address-link" href={`mailto:${EMAIL}`}>
            keandonato69<wbr />@gmail.com
          </a>
          <span className="email-address-location">
            Based in the Philippines · working with clients worldwide
          </span>
        </div>
      </div>
      <div className="email-address-actions">
        {copyButton('Copy email', 'pill email-copy-button-pill')}
        <a className="pill email-open-link" href={`mailto:${EMAIL}`}>
          Open mail app
        </a>
        <span className="email-copy-status" aria-live="polite">
          {status === 'failed' ? 'Copy failed, select the text instead' : ''}
        </span>
      </div>
    </div>
  )
}
