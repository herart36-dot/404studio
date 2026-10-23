'use client'

import { SAMPLES } from '@/lib/data'
import { useShell } from './shell-context'

/** The spinning "Open live sample" badge on /work. */
export default function OpenSampleBadge() {
  const { go } = useShell()
  return (
    <button
      className="badge"
      id="ov"
      type="button"
      aria-label="Open the live sample site"
      onClick={() => go('/samples/' + SAMPLES[0].slug)}
    >
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="cp" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text>
          <textPath href="#cp" textLength={480} lengthAdjust="spacing">
            Open live sample ✦ Open live sample ✦
          </textPath>
        </text>
      </svg>
      <b>↗</b>
    </button>
  )
}
